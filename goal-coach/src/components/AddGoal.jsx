import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component {
  constructor(props){
    super(props);
    this.state= {
      goalTitle: ''
    }
  }

  addGoal(){
    console.log('this', this)
    goalRef.push({email: this.props.user.email, goalTitle: this.state.goalTitle})
  }

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

const mapStateToProps = (state) => {
  const {user} = state;
  console.log('state in AddGoal.jsx', state)
  return {
    user: user
  }
}

export default connect(mapStateToProps, null)(AddGoal);
