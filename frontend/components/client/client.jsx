import React from "react";
import SearchBarContainer from "../search_bar/search_bar_container";

class Client extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <SearchBarContainer />
        </div>
    );
  }
}

export default Client;