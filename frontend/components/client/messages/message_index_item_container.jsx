import { connect } from 'react-redux';
import MessageIndexItem from './message_index_item';

const mapSTP = (state, ownProps) => ({
  users: state.entities.users,
  currentUser: state.session.id,
});

const mapDTP = dispatch => ({
});

export default connect(mapSTP, mapDTP)(MessageIndexItem);