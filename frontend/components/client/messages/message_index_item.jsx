import React from 'react';
import { Link } from 'react-router-dom';
import EditMessageFormContainer from "./edit_message_form_container"


class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }
  }

  renderDeleteButton(){
    if (this.props.currentUser != this.props.message.authorId) {
      return null;
    }
    return (
      <button onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
    );
  }

  openEditForm() {
    this.setState({
      editing: true
    })
  }

  renderEditButton(){
    if (this.props.currentUser != this.props.message.authorId) {
      return null;
    }
    return (
      <button onClick={() => this.openEditForm()}>Edit</button>
    );
  }

  render() {
    return (
      <li>
        { 
          this.props.editing ? <EditMessageFormContainer /> : this.props.message.content
        }
        {this.renderEditButton()}
        {this.renderDeleteButton()}
      </li>
    );
  }
}

export default MessageIndexItem;