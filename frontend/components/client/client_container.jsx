import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestMessage, requestMessages } from '../../actions/message_actions'
import Client from './client';

const mapSTP = state => ({
  //channels go here
  //sidebar stuff goes here
  //searchbar stuff for actually searching goes here
  messages: state.entities.messages,
  currentUser: state.session.id,
});

const mapDTP = dispatch => ({
  logout: () => dispatch(logout()),
  requestMessages: () => dispatch(requestMessages()),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  removeMessage: (messageId) => dispatch(removeMessage(messageId)),
  receiveComment: (comment) => dispatch(receiveComment(comment)),
  removeComment: (commentId) => dispatch(removeComment(commentId)),

});

export default connect(mapSTP, mapDTP)(Client);