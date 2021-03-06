import * as MessageAPIUtil from '../utils/message_api_util';


export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const REMOVE_MESSAGES_FROM_CHANNEL = 'REMOVE_MESSAGES_FROM_CHANNEL';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

// todo: move comment actions into their own file
export const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}

export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  }
}

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

export const removeMessage = (messageId) => {
  return {
    type: REMOVE_MESSAGE,
    messageId
  }
}

export const removeMessagesFromChannel = (channelId) => {
  return {
    type: REMOVE_MESSAGES_FROM_CHANNEL,
    channelId
  }
}

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

export const requestComments = (channelId, topId) => dispatch => (
  MessageAPIUtil.fetchComments(topId)
    .then(comments => dispatch(receiveComments(comments)))
);

export const requestMessages = (channelId) => dispatch => (
  MessageAPIUtil.fetchMessages(channelId)
    .then(messages => dispatch(receiveMessages(messages)))
); 

export const requestMessage = (channelId, messageId) => dispatch => (
  MessageAPIUtil.fetchMessage(messageId)
    .then(message => dispatch(receiveMessage(message)))
);

