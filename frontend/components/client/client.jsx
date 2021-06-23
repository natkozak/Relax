import React from "react";
import SearchBarContainer from "./search_bar/search_bar_container";
import MessageIndexContainer from "./messages/message_index_container"
import ChannelIndexContainer from './channels/channel_index_container'; 

class Client extends React.Component { // todo: make func during hooks refactor
  constructor(props) {
    super(props);

    this.state = {channelId: 1};
    this.openMessages = this.openMessages.bind(this);
  }

  componentDidMount() {

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
              break;
          }
        },
        create: function (data) { return this.perform("create", data) },
        load: function () { return this.perform("load") },
        edit: function (data) { return this.perform("edit", data) },
        destroy: function (data) { return this.perform("destroy", data) }
      }
    );
  }

  openMessages(channelId) {
    this.setState({channelId})
    this.props.receiveCurrentChannel(this.state.channelId);
  }

  render() {
    return (
      <div className="client-div">
        <SearchBarContainer />
        <div className="client-channels-messages">
          <div className="channel-sidebar">
            <ChannelIndexContainer
              openMessages={this.openMessages}
              
            />
          </div>
          <MessageIndexContainer 
          />
        </div>
      </div>
        
    );
  }
}

export default Client;