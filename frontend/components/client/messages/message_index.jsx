import React from 'react';
import MessageIndexItem from './message_index_item';
import CreateMessageFormContainer from "./create_message_form_container"
import CommentIndexContainer from "./comment_index_container"

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], commenting: false };
    this.bottom = React.createRef();
    this.openComments = this.openComments.bind(this);
    this.closeComments = this.closeComments.bind(this);
  }

  componentDidMount() {
    this.props.requestMessages();

    // if I factor this into a different file, I need to write a function that takes arguments of the actions I want to use. they shouldn't need to be bound.
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "comment":
              this.props.receiveComment(data.comment);
              break;
            case "message":
              this.props.receiveMessage(data.message);
              break;
            case "deleteMessage":
              this.props.removeMessage(data.messageId);
            break;
            case "deleteComment":
              this.props.removeComment(data.commentId);
          }
        },
        create: function (data) { return this.perform("create", data) },
        load: function () { return this.perform("load") },
        edit: function (data) { return this.perform("edit", data) },
        destroy: function (data) { return this.perform("destroy", data) }
      }
    );
  }

  componentDidUpdate() {
    if (this.bottom.current != null) {
      this.bottom.current.scrollIntoView();
    }
  }

  openComments(topId) {
    if (this.state.commenting) {
      this.setState({
        commenting: false
      })
    }
    this.setState({
      commenting: topId
    })
  }

  closeComments() {
    return this.setState({
      commenting: false
    })
  }

  render() {
    const messagesList = Object.values(this.props.messages);
    const messagesIndex = messagesList.map((message) => {
      return (
        <MessageIndexItem
          openComments={this.openComments}
          key={message.id}
          message={message}
          liKey={`li${message.id}`}
          refForDiv={this.bottom}
          currentUser={this.props.currentUser}
        />
      );
    })

    return (
      <div className="message-index-container">
        <div className="message-index-and-create">
          <div className="message-index">{messagesIndex}</div>

          <CreateMessageFormContainer />
        </div>
          
        
        {(this.state.commenting) ? <CommentIndexContainer key={`top-id-${this.state.commenting}`} topId={this.state.commenting} closeComments={this.closeComments} /> : null}
        
      </div>
    );
  }
}

export default MessageIndex;