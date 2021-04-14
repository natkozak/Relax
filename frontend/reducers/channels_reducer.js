import {
  RECEIVE_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
} from '../actions/channel_actions';

const ChannelsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return Object.assign({}, state, action.channels)
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, action.channel)
    case REMOVE_CHANNEL:
      delete newState[action.channelId]
      return newState;
    default:
      return state;
  }
}

export default ChannelsReducer;