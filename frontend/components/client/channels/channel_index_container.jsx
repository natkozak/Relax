import { connect } from 'react-redux';
import { requestChannels } from '/frontend/actions/channel_actions';
import { openModal } from '/frontend/actions/modal_actions';
import ChannelIndex from './channel_index'


const mapSTP = (state) => ({
  channels: state.entities.channels
});

const mapDTP = dispatch => ({
  requestChannels: () => dispatch(requestChannels()),
  openModal: (component) => dispatch(openModal(component))
  // openMessages: (channel) => dispatch(receiveCurrentChannel(channel))
});

export default connect(mapSTP, mapDTP)(ChannelIndex);