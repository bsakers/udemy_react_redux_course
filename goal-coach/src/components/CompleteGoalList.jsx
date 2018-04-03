//This is our CompleteGoalList component.
//The purpose of this component is to pull the list of completed goals from
//firebase, and then set that list to our store. We then map over that list and
//display each.

import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';

//Here we deine our CompleteGoalList class, and once the page loads, we pull the
//completed goals from firebase, and then use our action creator setCompleted to
//save them to the store.
class CompleteGoalList extends Component {
  componentDidMount(){
    completeGoalRef.on('value', snapshot => {
      let completeGoals = [];
      snapshot.forEach(completeGoal => {
        const { email, goalTitle } = completeGoal.val()
        completeGoals.push({
          email,
          goalTitle
        });
      })
      this.props.setCompleted(completeGoals);
    })
  }

  //The method allows us to set our completed goals array in firebase to an empty
  //array, thus clearing all of the items from the database.
  clearCompleted(){
    completeGoalRef.set([]);
  }

  //Here we simply map over the goal list, obtained from our store, and display each.
  //We also build our clear all button.
  render(){
    return(
      <div>
        {
          this.props.completeGoals.map((completeGoal, index)=>{
            const { goalTitle, email } = completeGoal;
            return(
              <div key={index}>
                <strong>{goalTitle}</strong> Completed by: <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className="btn btn-primary"
          onClick={()=> this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}

//The below allows us to access the completed goal list from our store.
const mapStateToProps = (state) => {
  const { completeGoals } = state
  return {
    completeGoals: completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
