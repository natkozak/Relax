import React from 'react';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);

    
  }



  render() {

    return (
      <li key={this.props.liKey} className="channel-index-item-li">
        <button onClick={() => this.props.openMessages(this.props.key)} className="channel-item-link"># {this.props.channel.name}</button>
        
      </li>
    );
  }
}

export default ChannelIndexItem;