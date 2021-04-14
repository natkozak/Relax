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
    this.authorId = this.props.message.authorId;
    this.renderNameMessage = this.renderNameMessage.bind(this);
  }

  openEditForm() {
    return this.setState({
      editing: true
    })
  }

  dismissEditForm() {
    this.setState({
      editing: false
    })
  }

  handleDelete(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].destroy({
      messageId: this.props.message.id
    });
  }

  // 2021-04-12T02:25:35.121Z
  formatTime(){
    let datetime = this.props.message.createdAt;
    let [date, timezone] = datetime.split("T");
    let [time, zone] = timezone.split(".");
    return time;
  }

  renderNameMessage(){
    return (
      <p className="render-name-message">
        <div><b>{this.props.message.fullName}</b></div>
        
        <div>{this.props.message.content}</div>
      </p>
    )
  }

  render() {
    // console.log("MessageIndexItem#render#this.state", this.state);
    // console.log("MessageIndexItem#render#this.props", this.props);
    const editCheck = (this.props.currentUser === this.authorId) && (!this.state.editing);
    const deleteCheck = this.props.currentUser === this.authorId;

    // todo: put this.formatTime() into the render string

    // todo: factor out this.props.fullName into a method call

    return (
      <li key={this.props.liKey} className="message-index-item-li">
        {this.state.editing ? <EditMessageForm 
        message={this.props.message} 
          dismiss={this.dismissEditForm} /> : this.renderNameMessage()}
        <div ref={this.props.refForDiv} />
        <div className="message-buttons">
        {editCheck ? <button className="edit-message-button" onClick={this.openEditForm.bind(this)}>Edit</button> : null }
        {deleteCheck ? <button className="delete-message-button" onClick={this.handleDelete.bind(this)}>Delete</button> : null}
        </div>
      </li>
    );
  }
}

export default MessageIndexItem;