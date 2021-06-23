import {
  RECEIVE_MESSAGES,
  RECEIVE_COMMENTS,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE
} from '../actions/message_actions';

const MessagesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, action.messages)
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.message)
    case REMOVE_MESSAGE:
      delete newState[action.messageId];
      return newState;
    // case REMOVE_MESSAGES_FROM_CHANNEL:
    //   return newState;
    default:
      return state;
  }
}

export default MessagesReducer;