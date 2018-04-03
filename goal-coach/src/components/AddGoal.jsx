//This is our addGoal component
//The purpose of this component is to allow a signed in user to create a new goal
//and add it to the list of existing goals.

import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

//Here we define our AddGoal class; the state references the new goal to be added.
class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state= {
      goalTitle: ''
    }
  }

  //This method allows us to push the new goal to our firebase database.
  //Note that we use the store to access the user submitting the goal.
  addGoal(){
    goalRef.push({email: this.props.user.email, goalTitle: this.state.goalTitle})
  }

  //Here we render the input field and submit button
  render(){
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Add a goal"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({goalTitle: event.target.value})}
          />
          <button
            className="btn btn-success"
            type="button"
            onClick={()=> this.addGoal()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

//The below function allows us to access the store, so that we can identify the
//current user submitting the goal.
const mapStateToProps = (state) => {
  const {user} = state;
  return {
    user: user
  }
}

export default connect(mapStateToProps, null)(AddGoal);
