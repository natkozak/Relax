import React from "react";
import SearchBarContainer from "./search_bar/search_bar_container";
import MessageIndexContainer from "./messages/message_index_container"
import CreateMessageFormContainer from "./messages/create_message_form_container"

import { Route, Switch } from 'react-router-dom';

class Client extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="client-div">
        <div className="required-components">
          <SearchBarContainer />
          <MessageIndexContainer />
          <CreateMessageFormContainer />
        </div>
        <div className="optional-components">
          
        </div>
      </div>

        
    );
  }
}

export default Client;