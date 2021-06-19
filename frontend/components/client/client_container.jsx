import { connect } from 'react-redux';
import { logout} from '../../actions/session_actions';
import { receiveCurrentChannel, requestCurrentChannel } from '../../actions/channel_actions';
import {
  receiveMessage,
  removeMessage,
  receiveComment,
  removeComment
} from '../../actions/message_actions';
import Client from './client';

const mapSTP = state => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
  currentChannel: state.entities.channels.currentChannel
});

const mapDTP = dispatch => ({
  logout: () => dispatch(logout()),
  receiveMessage: (message) => dispatch(receiveMessage(message)),
  removeMessage: (messageId) => dispatch(removeMessage(messageId)),
  receiveComment: (comment) => dispatch(receiveComment(comment)),
  removeComment: (commentId) => dispatch(removeComment(commentId)),
  receiveCurrentChannel: (channel) => dispatch(receiveCurrentChannel(channel)),
  requestCurrentChannel: (channel) => dispatch(requestCurrentChannel(channel)),

});

export default connect(mapSTP, mapDTP)(Client);