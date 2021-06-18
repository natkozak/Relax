import React from 'react';

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
        <button onClick={this.sendMessages} className="channel-item-link"># {this.props.channel.name}</button>
        
      </li>
    );
  }
}

export default ChannelIndexItem;