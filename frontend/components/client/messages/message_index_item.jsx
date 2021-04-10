import React from 'react';
import { Link } from 'react-router-dom';
import EditMessageFormContainer from "./edit_message_form_container"


class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.dismiss = this.dismiss.bind(this);
  }

  renderDeleteButton(){
    if (this.props.currentUser != this.props.message.authorId) {
      return null;
    }
    return (
      <button onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
    );
  }


  renderEditButton(){
    if (this.props.currentUser != this.props.message.authorId) {
      return null;
    } else if (this.state.editing) {
      return null;
    }
    return (
      <button onClick={() => this.openEditForm()}>Edit</button>
    );
  }

  openEditForm() {
    this.setState({
      editing: true
    })
  }

  dismissEditForm() {
    this.setState({
      editing: false
    })
  }

  render() {

    return (
      <li>
        {this.state.editing ? <EditMessageFormContainer 
        message={this.props.message} 
        dismiss={this.dismissEditForm}/> : this.props.message.content}

        {this.renderEditButton()}
        {this.renderDeleteButton()}
      </li>
    );
  }
}

export default MessageIndexItem;