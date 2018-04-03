//This is our user reducer. This allows us to set the current user within our store.

import { SIGNED_IN } from '../constants';

let user = {
  email: null
}

export default (state = user, action) => {
  switch(action.type) {
    case SIGNED_IN:
      const { email } = action;
      //const email = action.email
      user = {
        email: email
      }
      return user;
    default:
      return state
  }
}
