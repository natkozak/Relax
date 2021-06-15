import * as MessageAPIUtil from '../utils/message_api_util';


export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


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

export const removeComment = (commentId) => {
  return {
    type: REMOVE_COMMENT,
    commentId
  }
}

export const requestComments = (topId) => dispatch => (
  MessageAPIUtil.fetchComments(topId)
    .then(comments => dispatch(receiveComments(comments)))
);

export const requestMessages = () => dispatch => (
  MessageAPIUtil.fetchMessages()
  .then(messages => dispatch(receiveMessages(messages)))
);

// export const requestMessage = (messageId) => dispatch => (
//   MessageAPIUtil.fetchMessage(messageId)
//     .then(message => dispatch(receiveMessage(message)))
// );