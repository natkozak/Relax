import { connect } from 'react-redux';
import { createChannel } from '/frontend/actions/channel_actions';
import CreateChannelForm from './create_channel_form';


const mapSTP = (state) => ({
  signedInUserId: state.session.id
});

const mapDTP = dispatch => ({
  submitChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapSTP, mapDTP)(CreateChannelForm);