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
