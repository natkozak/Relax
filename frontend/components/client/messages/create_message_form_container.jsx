import { connect } from 'react-redux';
import { createMessage } from '/frontend/actions/message_actions';
import CreateMessageForm from './create_message_form';


const mapSTP = (state) => ({
  message: {
    content: '',
    author_id: state.session.id
  },
  formType: 'Create Message'
});

const mapDTP = dispatch => ({
  submitMessage: message => dispatch(createMessage(message))
});

export default connect(mapSTP, mapDTP)(CreateMessageForm);