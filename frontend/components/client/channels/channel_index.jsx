import React from 'react';
import ChannelIndexItem from './channel_index_item'

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  componentDidMount() {
    this.props.requestChannels(this.props.currentUser);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.openModal("CreateChannel");
  }

  render() {
    const channelsList = Object.values(this.props.channels)

    const channelIndex = channelsList.map((channel) => {
      return (
        <ChannelIndexItem
          key={channel.id}
          channel={channel}
          liKey={`li${channel.id}`}
          openMessages={this.props.openMessages}
        />
      );
    })
    return (
      <div className="channel-index">
        <div className='channel-header'>
          <div className="channel-header-channels">Channels</div>
          <button className="create-channel-modal-button" onClick={this.handleSubmit}>+</button>
        </div>
        {channelIndex}
      </div>

    );
  }
}

export default ChannelIndex;