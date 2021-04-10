import React from 'react';
import { connect } from 'react-redux';
import { requestMessage, updateMessage } from '/frontend/actions/message_actions';
import CreateMessageForm from './create_message_form';
import EditMessageForm from './edit_message_form';



const mapDTP = dispatch => ({
  requestMessage: messageId => dispatch(requestMessage(messageId)),
  updateMessage: message => dispatch(updateMessage(message))
});

export default connect(null, mapDTP)(EditMessageForm);