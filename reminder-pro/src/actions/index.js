import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';


//this whole const function is my action creator
export const addReminder = (text, dueDate) => {
  //but the specific const below (action) is my actual action!
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate: dueDate
  }
  console.log('action in addReminder', action);
  return action;
}


export const deleteReminder = (id)=> {
  const action = {
    type: DELETE_REMINDER,
    id: id
  }
  console.log('deleting in actions', action);
  return action
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}
