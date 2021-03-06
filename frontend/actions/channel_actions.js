import * as ChannelAPIUtil from '../utils/channel_api_util';


export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CURRENT_CHANNEL = 'RECEIVE_CURRENT_CHANNEL';


export const receiveChannels = (channels) => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
}

export const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
}

export const removeChannel = (channelId) => {
  return {
    type: REMOVE_CHANNEL,
    channelId
  }
}

export const receiveCurrentChannel = channel => ({
  type: RECEIVE_CURRENT_CHANNEL,
  channel
});


export const requestChannels = (userId) => dispatch => (
  ChannelAPIUtil.fetchChannels(userId)
    .then(channels => dispatch(receiveChannels(channels)))
);

export const requestChannel = (channelId) => dispatch => (
  ChannelAPIUtil.fetchChannel(channelId)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = (channel) => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const updateChannel = (channel) => dispatch => (
  ChannelAPIUtil.updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = (channelId) => dispatch => (
  ChannelAPIUtil.deleteChannel(channelId)
    .then(() => dispatch(removeChannel(channelId)))
);

export const requestCurrentChannel = (channelId) => dispatch => (
  ChannelAPIUtil.fetchChannel(channelId)
    .then(channel => dispatch(receiveCurrentChannel(channel)))
);