import React from 'react';
import { connect } from 'react-redux';
import { requestMessage, updateMessage } from '/frontend/actions/message_actions';
import CreateMessageForm from './create_message_form';


class EditMessageForm extends React.Component {

  componentDidMount() {
    this.props.requestMessage(this.props.match.params.messageId);
  }

  render() {
    const { message, formType, submitMessage } = this.props;

    if (!message) return null;
    return (
      <CreateMessageForm
        message={message}
        formType={formType}
        submitMessage={submitMessage} />
    );
  }
}


const mapSTP = (state, ownProps) => ({
  message: state.entities.messages[ownProps.match.params.messageId],
  formType: 'Update Message'
});

const mapDTP = dispatch => ({
  requestMessage: messageId => dispatch(requestMessage(messageId)),
  submitMessage: message => dispatch(updateMessage(message))
});

export default connect(mapSTP, mapDTP)(EditMessageForm)