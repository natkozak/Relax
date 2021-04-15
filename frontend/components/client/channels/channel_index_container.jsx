import { connect } from 'react-redux';
import { requestChannels } from '/frontend/actions/channel_actions';
import ChannelIndex from './channel_index'


const mapSTP = (state) => ({
  channels: state.entities.channels
});

const mapDTP = dispatch => ({
  requestChannels: () => dispatch(requestChannels()),
});

export default connect(mapSTP, mapDTP)(ChannelIndex);