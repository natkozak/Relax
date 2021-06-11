import { connect } from 'react-redux';
import MessageIndex from './message_index';

const mapSTP = state => ({
  messages: state.entities.messages,
  currentUser: state.session.id,
});

export default connect(mapSTP, null)(MessageIndex);