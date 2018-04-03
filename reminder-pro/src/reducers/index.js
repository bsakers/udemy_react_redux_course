//This is our reducers file. Here we define our reducers, which are functions that
//take in an action being displaced, and return a new state (our store).

import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action)=> {
  let {text, dueDate} = action;
  return{
    id: Math.random(),
    text: text,
    dueDate: dueDate
  }
}

const removeById = (state = [], id)=> {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders)
  return reminders;
}

//This is a reducer. Note that it takes in the state and the action as argument
//The switch function then determines the type of action, and returns an appropritate
//state.
//The overall purpose of this is to change our overall store, so that we can access
//all of the reminders from any component.
const reminders = (state= [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      // ... is a spread operator. This lets us copy the contents of one array into another
      bake_cookie('reminders', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    case CLEAR_REMINDERS:
      reminders= [];
      bake_cookie('reminders', reminders);
      return reminders
    default:
      return state;
  }
}

export default reminders;
