import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';


const mapSTP = (state) => ({
  authorId: state.session.id
});

export default connect(mapSTP, null)(CreateCommentForm);