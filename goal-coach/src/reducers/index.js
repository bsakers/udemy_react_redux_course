//This is our index for reducers. In essence, this allows us to combine all of our
//three of our reducers so they can all access our store.
//Our store can now have three points of data: user, goals, and completed goals.

import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completeGoals from './reducer_complete_goals';

export default combineReducers({
  user: user,
  goals: goals,
  completeGoals: completeGoals
})
//in order to combine reducers (above), we need to first create an object with all three.
