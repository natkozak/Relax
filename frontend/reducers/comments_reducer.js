import {
  RECEIVE_COMMENTS
} from '../actions/message_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, action.comments)
    default:
      return state;
  }
}

export default CommentsReducer;