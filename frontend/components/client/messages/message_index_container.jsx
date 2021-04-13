import { connect } from 'react-redux';
import { requestMessages, requestMessage, receiveMessages, receiveMessage, removeMessage } from '/frontend/actions/message_actions';
import MessageIndex from './message_index';

const mapSTP = state => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
});

const mapDTP = dispatch => ({
  requestMessage: (messageId) => dispatch(requestMessage(messageId)),
  requestMessages: () => dispatch(requestMessages()),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  receiveMessages: (messages) => dispatch(receiveMessages(messages)),
  removeMessage: (messageId) => dispatch(removeMessage(messageId))
});

export default connect(mapSTP, mapDTP)(MessageIndex);