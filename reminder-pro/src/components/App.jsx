//This is our App component
//The purpose of this component is to display the list of reminders, and provide
//functionality to the user so that they can add reminders or delete reminders

import React, { Component } from 'react';
import { connect } from 'react-redux';
//the react-redux function connect() allows us to connect to the store from a specific component
import { bindActionCreators} from 'redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

//Here we define our App class, which has state. The state references the specific
//reminder being added to the store.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  //This method allows us to add a reminder to the store, via the addReminder action
  //creator.
  //An alternative to defining the below functions is to simply call them as this.props
  //as long as we've bound them to the dispatch, and connected the dispatch to this
  //component, but this method allows us to use console log and see where we are.
  addReminder(){
    console.log('state of dueDate', this.state.dueDate)
    this.props.addReminder(this.state.text, this.state.dueDate)
    this.setState({text: ''})
  }

  //This method allows us to delete a reminder from the store via the deleteReminder
  //action creator.
  deleteReminder(id){
    this.props.deleteReminder(id)
    console.log("in deleteReminder")
    console.log("reminder id", id)
  }

  //Here we render each reminder by mapping over the reminders, which were accessible
  //via the store.
  //Here we also build the add/clear reminder buttons along with the input field.
  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return(
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={()=> this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    return(
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to.."
              value={this.state.text}
              onChange={event=> this.setState({text: event.target.value})}
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={()=> this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
        <div
          className="btn btn-danger"
          onClick={()=> this.props.clearReminders()}
        >
          Clear Reminders
        </div>
      </div>
    )
  }
}

//The below function connects our addReminder action creator to our application
//and we do this via the bindActionCreators function. This essentially makes our
//addReminder action creator accessible in this component.
const mapDispatchToProps = (dispatch)=> {
  return bindActionCreators({addReminder, deleteReminder, clearReminders}, dispatch);
}

//The below function allows us to access the store within this component via props.
const mapStateToProps = (state) => {
  console.log(state);
  return {
    reminders: state
  }
}

//now we actually connect the both of the above functions to this specific component.
export default connect(mapStateToProps, mapDispatchToProps)(App)


//the short hand for all of the above though is:
// export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App)


//** ADDITIONAL NOTES **
// Actions are payloads of information (objects) that send data from your
  //application to your store (which holds the application state).
  //They are the only source of information for the store.
  //Each action is simply an object, and the only required property is type.
// Action creators are exactly that: functions that create actions.
// Reducers specify how the application's state changes in response to
  //actions sent to the store. Remember that actions only describe the
  //fact that something happened, but don't describe how the application's
  //state changes.
  //Reducers are simply functions that:
    //1.) Take in the previous state of the application
    //2.) Take in the action being dispatched
    //3.) And return a new state (meaning the reducer function must be pure!)
// State is read only, so the only way to change state is to despatch an action

//Pure functions: functions whos return values depend solely on the input values
  //They simply calculate a new value, but dont change the original values
  //Example is a simple calculation or array.map (since this returns a NEW array)
  //Example: returning state + 1 is okay, since this is a new object
  //Example: .concat[], .slice(), filter
//Impure functions: functions that have potential side effects
  //They may call a database or override the input values
  //Example is removing an item from an array or calling a database
  //Example: .push or .splice
//This is important, because some of the functions we write in redux must be pure
  //Example: we can't change state directly, so we need pure functions to
  //return a new state object
