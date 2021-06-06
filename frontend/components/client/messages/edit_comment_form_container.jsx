import { connect } from 'react-redux';
import { updateComment } from '/frontend/actions/message_actions';
import EditCommentForm from './edit_comment_form';



const mapDTP = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)) // todo: edit comment form does not need any actions
});

export default connect(null, mapDTP)(EditCommentForm);