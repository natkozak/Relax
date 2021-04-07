import { connect } from 'react-redux';
import { requestMessages, deleteMessage } from '/frontend/actions/message_actions';
import MessageIndex from './message_index';

const mapSTP = state => ({
  messages: state.entities.messages
});

const mapDTP = dispatch => ({
  requestMessages: () => dispatch(requestMessages()),
  deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
});

export default connect(mapSTP, mapDTP)(MessageIndex);