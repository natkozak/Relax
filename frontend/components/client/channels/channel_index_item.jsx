import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.sendMessages = this.sendMessages.bind(this);
  }

  sendMessages(){
    this.props.openMessages(this.props.channel.id);
  }

  render() {

    return (
      <li key={this.props.liKey} className="channel-index-item-li">
        {/* <button onClick={this.sendMessages} className="channel-item-link"># {this.props.channel.name}</button> */}
        <Link 
        // onClick={this.sendMessages} 
        to={`/client/channels/${this.props.channel.id}/messages`} 
        className="channel-item-link"># {this.props.channel.name}
        </Link>
      </li>
    );
  }
}

export default ChannelIndexItem;