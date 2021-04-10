import React from 'react';
import EditMessageFormContainer from "./edit_message_form_container"


class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.dismissEditForm = this.dismissEditForm.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteMessage(this.props.message.id).then(
      App.cable.subscriptions.subscriptions[0].speak({
        message: ""
      })
    );
  }

  renderDeleteButton(){
    if (this.props.currentUser != this.props.message.authorId) {
      return null;
    }
    return (
      <button onClick={this.handleDelete.bind(this)}>Delete</button>
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
      <li key={this.props.liKey}>
        {this.state.editing ? <EditMessageFormContainer 
        message={this.props.message} 
        dismiss={this.dismissEditForm}/> : this.props.message.content}
        <div ref={this.props.refForDiv} />
        {this.renderEditButton()}
        {this.renderDeleteButton()}
      </li>
    );
  }
}

export default MessageIndexItem;