import { connect } from 'react-redux';
import MessageIndex from './message_index';
import {
  requestMessages,
} from '../../../actions/message_actions';
// import {
//   receiveCurrentChannel
// } from '../../../actions/session_actions';
const mapSTP = state => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
  generalChannel: state.session.generalChannel,
  currentChannel: state.session.currentChannel
});

const mapDTP = dispatch => ({
  requestMessages: (channelId) => dispatch(requestMessages(channelId))
  // receiveCurrentChannel: (channel) => dispatch(receiveCurrentChannel(channel)),
});

export default connect(mapSTP, mapDTP)(MessageIndex);