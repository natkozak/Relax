import React from "react";
import SearchBarContainer from "./search_bar/search_bar_container";
import MessageIndexContainer from "./messages/message_index_container"

class Client extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <SearchBarContainer />
          <MessageIndexContainer />
        </div>
    );
  }
}

export default Client;