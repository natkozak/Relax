import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li key={this.props.liKey} className="channel-index-item-li">
        <Link to={`/client/channels/${this.props.channel.id}`} className="channel-item-link"># {this.props.channel.name}</Link>
      </li>
    );
  }
}

export default ChannelIndexItem;