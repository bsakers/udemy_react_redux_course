import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completeGoals from './reducer_complete_goals';

export default combineReducers({
  user: user,
  goals: goals,
  completeGoals: completeGoals
})
//in order to combine reducers (above), we need to first create an object with both
