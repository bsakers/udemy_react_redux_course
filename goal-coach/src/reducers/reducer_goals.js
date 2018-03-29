import { SET_GOALS } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_GOALS:
      const { goals } = action;
      //goals = action.goals
      return goals;
    default:
      return state;
  }
}
