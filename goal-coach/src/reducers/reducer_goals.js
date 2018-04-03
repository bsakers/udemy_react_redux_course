//This is our goals reducer. This allows us to change the state of goals within
//our store.

import { SET_GOALS } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_GOALS:
      const { goals } = action;
      return goals;
    default:
      return state;
  }
}
