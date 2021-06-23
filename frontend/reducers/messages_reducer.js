import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE,
  REMOVE_MESSAGES_FROM_CHANNEL
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
    case REMOVE_MESSAGES_FROM_CHANNEL:
      // todo: finish (traverse messages in state; delete channelId matches)
      delete newState[action.channelId];
      return newState;
    default:
      return state;
  }
}

export default MessagesReducer;