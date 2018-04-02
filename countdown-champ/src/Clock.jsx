//This is our Clock component.
//The purpose of this component is to build the actual clock display.

import React, { Component} from 'react';
import './App.css';

//Here we define the clock class, which has state
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  //This method simply calls the getTimeUntil methond once the page finished loading.
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  //This helper method will call the getTimeUntil method every 1 second, thus
  //re-rendering the page and updating the display.
  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  //This method simply ensures a zero prefaces a 1 digit date (ex: October 01).
  leading0(num) {
    return num < 10 ? '0' + num :num;
  }

  //This method turns state data into the amount of time until the deadline is reached.
  getTimeUntil(deadline){
    let time = Date.parse(deadline)- Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds})
  }

  render(){
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    )
  }
}

export default Clock;
