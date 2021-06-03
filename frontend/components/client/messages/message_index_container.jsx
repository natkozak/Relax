import { connect } from 'react-redux';
import { 
  requestMessages, 
  receiveMessage, 
  removeMessage, 
  receiveComment,
  removeComment 
} from '/frontend/actions/message_actions';
import MessageIndex from './message_index';

const mapSTP = state => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
});

const mapDTP = dispatch => ({
  requestMessages: () => dispatch(requestMessages()),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  removeMessage: (messageId) => dispatch(removeMessage(messageId)),
  receiveComment: (comment) => dispatch(receiveComment(comment)),
  removeComment: (commentId) => dispatch(removeComment(commentId)),
});

export default connect(mapSTP, mapDTP)(MessageIndex);