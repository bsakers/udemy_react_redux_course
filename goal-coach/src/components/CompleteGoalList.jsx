import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';

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

  clearCompleted(){
    completeGoalRef.set([]);
  }

  render(){
    // console.log('this.props.completeGoals', this.props.completeGoals)
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

const mapStateToProps = (state) => {
  const { completeGoals } = state
  return {
    completeGoals: completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
