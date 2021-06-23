import { connect } from 'react-redux';
import MessageIndex from './message_index';
import {
  requestMessages,
} from '../../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapSTP = (state, ownProps) => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
  generalChannel: state.session.generalChannel,
  currentChannel: state.entities.channels.currentChannel,
  hi: ownProps,
  currentChannelFromPath: ownProps.location.pathname.split("/")[3]
});

const mapDTP = dispatch => ({
  requestMessages: (channelId) => dispatch(requestMessages(channelId)),
  // removeMessages: ()
});

export default withRouter(connect(mapSTP, mapDTP)(MessageIndex)); // needed for ownProps
// export default connect(mapSTP, mapDTP)(MessageIndex);