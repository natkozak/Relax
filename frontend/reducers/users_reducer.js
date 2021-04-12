import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_MESSAGES } from '../actions/message_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    // case RECEIVE_MESSAGES:
      // add users to the users slice of state
    default:
      return state;
  }
};

export default UsersReducer;