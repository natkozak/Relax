import { connect } from 'react-redux';
import MessageIndex from './message_index';
import {
  requestMessages,
} from '../../../actions/message_actions';
const mapSTP = state => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
});

const mapDTP = dispatch => ({
  requestMessages: () => dispatch(requestMessages())
});

export default connect(mapSTP, mapDTP)(MessageIndex);