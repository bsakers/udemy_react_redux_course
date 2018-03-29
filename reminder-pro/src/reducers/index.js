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

// this is a reducer. Note that it takes in the state and the action as argument
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
