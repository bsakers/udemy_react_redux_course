//This is our GoalList component.
//The purpose of this component is to pull the list of goals from the firebase
//database, and then set that list to our store. We then map over the list, and
//pass down the necessarily information to our GoalItem component for display.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem'

//Here we deine our GoalList class, and once the page loads, we pull the goals from
//firebase, and then use our action creator setGoals to save them to the store.
class GoalList extends Component{
  componentDidMount(){
    goalRef.on('value', snapshot => {
      let goals = [];
      snapshot.forEach(goal => {
        const { email, goalTitle } = goal.val()
        const serverKey = goal.key
        goals.push({
          email,
          goalTitle,
          serverKey
        });
      })
      this.props.setGoals(goals);
    })
  }

  //Here we simply map over the goals from our store, and pass each goal's key
  //and goal object to the GoalItem component.
  render(){
    return(
      <div>
        {
          this.props.goals.map((goal, index) => {
            return(
              <GoalItem
                key={index}
                goal={goal}
              />
            )
          })
        }
      </div>
    )
  }
}

//The below allows us to access the goal list from our store.
const mapStateToProps = (state) => {
  const { goals } = state
  return {
    goals: goals
  }
}

export default connect(mapStateToProps, {setGoals})(GoalList);
