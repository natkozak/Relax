import {
  RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT
} from '../actions/message_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, action.comments)
    case RECEIVE_COMMENT:
      return Object.assign({}, state, action.comment)
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
}

export default CommentsReducer;