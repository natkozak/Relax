import { connect } from 'react-redux';
import MessageIndex from './message_index';
import {
  requestMessages,
} from '../../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '/frontend/actions/modal_actions';

const mapSTP = (state, ownProps) => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
  generalChannel: state.session.generalChannel,
  currentChannelFromPath: ownProps.location.pathname.split("/")[3],
  channels: state.entities.channels
});

const mapDTP = dispatch => ({
  requestMessages: (channelId) => dispatch(requestMessages(channelId)),
  openModal: (component) => dispatch(openModal(component))
  // removeMessages: (channelId) => dispatch(removeMessages(channelId)) // todo: implement to avoid leaks
});

export default withRouter(connect(mapSTP, mapDTP)(MessageIndex));