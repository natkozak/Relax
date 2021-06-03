import React from "react";
import SearchBarContainer from "./search_bar/search_bar_container";
import MessageIndexContainer from "./messages/message_index_container"
import CreateMessageFormContainer from "./messages/create_message_form_container"
import ChannelSidebar from "./channels/channel_sidebar";

class Client extends React.Component { // todo: does this need to be a class?
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // todo: does this need to be here?
  }

  componentDidMount() {
    this.props.requestMessages();
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