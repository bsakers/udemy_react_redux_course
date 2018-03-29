import React, { Component } from 'react';
import { completeGoalRef, goalRef } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component {
  completeGoal(){
    console.log('this.props from goalItem', this.props);
    goalRef.child(this.props.goal.serverKey).remove();
    completeGoalRef.push({
      email: this.props.user.email,
      goalTitle: this.props.goal.goalTitle,
    });
  }

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
const mapStateToProps = (state) => {
  // console.log('state', state)
  const { user } = state
  return {
    user: user
  }
}

export default connect(mapStateToProps, null)(GoalItem);
