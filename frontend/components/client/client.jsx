import React from "react";
import SearchBarContainer from "./search_bar/search_bar_container";
import MessageIndexContainer from "./messages/message_index_container"
import CreateMessageFormContainer from "./messages/create_message_form_container"

class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    this.props.requestMessages();
  }

  render() {
    return (
      <div className="client-div">
        <SearchBarContainer />
        <MessageIndexContainer />
        <CreateMessageFormContainer />
      </div>
        
    );
  }
}

export default Client;