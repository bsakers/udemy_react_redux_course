//This is our GoalItem component.
//The purpose of this component is to display information about each goal, which
//was obtained through props, and build a build a button so that a user can mark
//each goal as completed.

import React, { Component } from 'react';
import { completeGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component {
  //This method is called when the user clicks the complete button.
  //The method pushes the goal into the firebase database of completed goals.
  completeGoal(){
    goalRef.child(this.props.goal.serverKey).remove();
    completeGoalRef.push({
      email: this.props.user.email,
      goalTitle: this.props.goal.goalTitle,
    });
  }

  //Here we simply render each goal, along with it's button for completion.
  render(){
    return(
      <div style={{margin: '5px'}}>
        <strong>{this.props.goal.goalTitle}</strong>
        <span style={{marginRight: '5px'}}> submitted by: <em>{this.props.goal.email}</em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

//The below allows us to access the user from our store.
const mapStateToProps = (state) => {
  const { user } = state
  return {
    user: user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
