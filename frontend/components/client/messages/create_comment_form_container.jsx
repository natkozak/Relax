import { connect } from 'react-redux';
import { createMessage } from '/frontend/actions/message_actions';
import CreateCommentForm from './create_comment_form';


const mapSTP = (state) => ({
  authorId: state.session.id
  // should get the channelId from props at some point
});

export default connect(mapSTP, null)(CreateCommentForm);