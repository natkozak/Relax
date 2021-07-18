import { connect } from 'react-redux';
import { requestChannels } from '/frontend/actions/channel_actions';
import { openModal } from '/frontend/actions/modal_actions';
import ChannelIndex from './channel_index'


const mapSTP = (state) => ({
  channels: state.entities.channels,
  currentUser: state.session.id,
});

const mapDTP = dispatch => ({
  requestChannels: (userId) => dispatch(requestChannels(userId)),
  openModal: (component) => dispatch(openModal(component))
});

export default connect(mapSTP, mapDTP)(ChannelIndex);