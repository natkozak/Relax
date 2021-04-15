import {
  RECEIVE_COMMENTS, RECEIVE_COMMENT
} from '../actions/message_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, action.comments)
    case RECEIVE_COMMENT:
      return Object.assign({}, state, action.comment)
    default:
      return state;
  }
}

export default CommentsReducer;