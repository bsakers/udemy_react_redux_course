//This is our App component.
//The purpose of this component is to allow a user to signout, and to pass
//information to the AddGoal, GoalList, and CompleteGoalList components as props.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component{
  //The signout method allows us to use firebaseApp (which we defined in our
  //firebase file) to sign the user out.
  signOut(){
    firebaseApp.auth().signOut()
  }

  //Here we render the sign-out button and pass down information as props.
  render(){
    return(
      <div style={{margin: '5px'}}>
        <div>
          <h3>Goal Coach</h3>
          <AddGoal />
          <hr />
          <h4>Goals</h4>
          <GoalList />
          <hr />
          <h4>Completed Goals</h4>
          <CompleteGoalList />
          <hr/>
        </div>
        <button
          className="btn btn-danger"
          onClick={()=> this.signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  }
}

//Here we map state to props, in case we wanted to call upon the store in anyway.
const mapStateToProps = (state) => {
  return {
  }
}


export default connect(mapStateToProps, null)(App);
