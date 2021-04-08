import React from 'react';
import { connect } from 'react-redux';
import { requestMessage, updateMessage } from '/frontend/actions/message_actions';
import CreateMessageForm from './create_message_form';
import EditMessageForm from './edit_message_form';


const mapSTP = (state, ownProps) => ({
  message: state.entities.messages[ownProps.match.params.messageId],
});

const mapDTP = dispatch => ({
  requestMessage: messageId => dispatch(requestMessage(messageId)),
  updateMessage: message => dispatch(updateMessage(message))
});

export default connect(mapSTP, mapDTP)(EditMessageForm);