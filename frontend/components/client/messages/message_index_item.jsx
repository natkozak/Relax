import React from 'react';
import { Link } from 'react-router-dom';


class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li>
        {this.props.message.content}
        <Link to={`/messages/${this.props.message.id}/edit`}>Edit</Link>
        <button onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
      </li>
    );
  }
}

export default MessageIndexItem;