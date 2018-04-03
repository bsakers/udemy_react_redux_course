//This is our actions files. Here we define our action creators, which return
//our actions, thus allowing us to alter the store when dispatched to a reducer.

import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

export const logUser = (email) => {
  const action = {
    type: SIGNED_IN,
    email: email
  }
  console.log('action in logUser', action);
  return action;
}

export const setGoals = (goals) => {
  const action = {
    type: SET_GOALS,
    goals: goals
  }
  console.log('action in setGoals', action);
  return action;
}

export const setCompleted = (completeGoals) => {
  const action = {
    type: SET_COMPLETED,
    completeGoals: completeGoals
  }
  console.log('action ins setCompleted', action);
  return action;
}
