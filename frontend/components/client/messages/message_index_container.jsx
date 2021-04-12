import { connect } from 'react-redux';
import { requestMessages, requestMessage, updateMessage, deleteMessage } from '/frontend/actions/message_actions';
import MessageIndex from './message_index';

const mapSTP = state => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
});

const mapDTP = dispatch => ({
  requestMessage: (messageId) => dispatch(requestMessage(messageId)),
  requestMessages: () => dispatch(requestMessages()),
  updateMessage: message => dispatch(updateMessage(message)),
  deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
});

export default connect(mapSTP, mapDTP)(MessageIndex);