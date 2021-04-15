import { connect } from 'react-redux';
import { requestComments, requestMessage } from '/frontend/actions/message_actions';
import CommentIndex from './comment_index';

const mapSTP = (state, ownProps) => ({
  messages: state.entities.messages,
  comments: state.entities.comments,
  currentUser: state.session.id,
});

const mapDTP = dispatch => ({
  requestComments: (topId) => dispatch(requestComments(topId)),
  requestMessage: (messageId) => dispatch(requestMessage(messageId))
});

export default connect(mapSTP, mapDTP)(CommentIndex);