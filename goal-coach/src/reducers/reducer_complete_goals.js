//This is our complete goals reducer. This allows us to change the state of
//completed goals within our store.

import { SET_COMPLETED } from '../constants';

export default (state=[], action) => {
  switch(action.type){
    case SET_COMPLETED:
      const { completeGoals } = action;
      return completeGoals;
    default:
      return state
  }
}
