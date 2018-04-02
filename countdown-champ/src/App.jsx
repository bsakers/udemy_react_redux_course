//This is our App Component.
//The purpose of this component is to build the input fields/submit button and
//pass props to the Clock component.

import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

//Here we define our App class, which has state.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: ''
    }
  }

  //This is a helper method which is called when the user clicks the submit button.
  //The method changes the state by setting deadline to newDeadline.
  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  //Here we render the component, pass down probs to the Clock component, and also
  //build our form for inputting a new deadline date.
  render() {
    return(
      <div className='App'>
        <div className='App-title'>
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline = {this.state.deadline}
        />
        <Form inline={true}>
          <FormControl className="deadlineInput" placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})}/>
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default App;
