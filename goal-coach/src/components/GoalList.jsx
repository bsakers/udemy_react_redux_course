import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem'

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

const mapStateToProps = (state) => {
  // console.log('state', state)
  const { goals } = state
  return {
    goals: goals
  }
}

export default connect(mapStateToProps, {setGoals})(GoalList);
