import { connect } from 'react-redux';
import { updateMessage } from '/frontend/actions/message_actions';
import EditMessageForm from './edit_message_form';



const mapDTP = dispatch => ({
  updateMessage: message => dispatch(updateMessage(message)) // todo: edit message form does not need any actions
});

export default connect(null, mapDTP)(EditMessageForm);