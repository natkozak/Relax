import React from 'react';
import { connect } from 'react-redux';
import { requestMessage, updateMessage } from '/frontend/actions/message_actions';
import EditMessageForm from './edit_message_form';



const mapDTP = dispatch => ({
  updateMessage: message => dispatch(updateMessage(message))
});

export default connect(null, mapDTP)(EditMessageForm);