import React from 'react';
import EditMessageForm from './edit_message_form'


class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      content: ""
    }

    this.dismissEditForm = this.dismissEditForm.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].destroy({
      messageId: this.props.message.id
    });
  }

  openEditForm() {
    return this.setState({
      editing: true
    })
  }

  // openEditForm() {
  //   this.setState({
  //     editing: true
  //   })
  // }

  dismissEditForm() {
    this.setState({
      editing: false
    })
  }

  render() {
    const editCheck = (this.props.currentUser === this.props.message.author_id) && (!this.state.editing);
    const deleteCheck = this.props.currentUser === this.props.message.author_id;

    return (
      <li key={this.props.liKey}>
        {this.state.editing ? <EditMessageForm 
        message={this.props.message} 
        dismiss={this.dismissEditForm}/> : this.props.message.content}
        <div ref={this.props.refForDiv} />
        {editCheck ? <button onClick={() => this.openEditForm.bind(this)}>Edit</button> : null }
        {deleteCheck ? <button onClick={() => this.handleDelete.bind(this)}>Delete</button> : null}
      </li>
    );
  }
}

export default MessageIndexItem;