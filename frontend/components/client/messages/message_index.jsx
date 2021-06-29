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
    this.getChannel = this.getChannel.bind(this);
    this.openChannelModal = this.openChannelModal.bind(this);
  }

  componentDidMount() {
    this.props.requestMessages(this.getChannel());
  }

  componentDidUpdate(prevProps) {
    if (this.bottom.current != null) {
      this.bottom.current.scrollIntoView();
    }

    if (prevProps.currentChannelFromPath !== this.props.currentChannelFromPath) {
      this.props.requestMessages(this.getChannel());
    }
  }

  getChannel() {
    return parseInt(this.props.currentChannelFromPath) || 1;
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

  openChannelModal(e) {
    e.preventDefault();
    this.props.openModal("ChannelModal");
  }

  render() {
    const channelId = this.getChannel();
    const channelProp = this.props.channels[channelId];

    const messagesList = Object.values(this.props.messages).filter((message) => message.channelId === this.getChannel());
    const messagesIndex = messagesList.map((message) => {
      return (
        <MessageIndexItem
          openComments={this.openComments}
          key={message.id}
          message={message}
          liKey={`li${message.id}`}
          refForDiv={this.bottom}
          currentUser={this.props.currentUser}
          channelId={channelId}
        />
      );
    })

    return (
      <div className="message-index-container">
        <div className="message-index-and-create">
          <div className="message-index-channel-name">
            <button onClick={this.openChannelModal}> 
            #{(channelProp) ? channelProp.name : null}
            </button>
          </div>
          <div className="message-index-channel-description">
            {(channelProp) ? channelProp.description : null}
          </div>
          <div className="message-index">{messagesIndex}</div>

          <CreateMessageFormContainer
          channelId={channelId}
          />
        </div>
          
        
        {(this.state.commenting) ? <CommentIndexContainer key={`top-id-${this.state.commenting}`} topId={this.state.commenting} closeComments={this.closeComments} /> : null}
        
      </div>
    );
  }
}

export default MessageIndex;