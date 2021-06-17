import React from 'react';
import MessageIndexItem from './message_index_item';
import CreateMessageFormContainer from "./create_message_form_container"
import CommentIndexContainer from "./comment_index_container"

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { commenting: false };
    this.bottom = React.createRef();
    this.openComments = this.openComments.bind(this);
    this.closeComments = this.closeComments.bind(this);
  }

  componentDidMount() {
    let channel;
    this.props.currentChannel ? channel = this.props.currentChannel : channel = this.props.generalChannel;

    this.props.requestMessages(channel);
      
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