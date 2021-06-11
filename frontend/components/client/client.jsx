import React from "react";
import SearchBarContainer from "./search_bar/search_bar_container";
import MessageIndexContainer from "./messages/message_index_container"
import ChannelSidebar from "./channels/channel_sidebar";

class Client extends React.Component { // todo: make func during hooks refactor
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div className="client-div">
        <SearchBarContainer />
        <div className="client-channels-messages">
          <ChannelSidebar />
          <MessageIndexContainer />
        </div>
      </div>
        
    );
  }
}

export default Client;