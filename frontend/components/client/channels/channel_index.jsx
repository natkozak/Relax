import React from 'react';
import ChannelIndexItem from './channel_index_item'
import CreateChannelFormContainer from '/frontend/components/client/channels/create_channel_form_container.jsx'

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestChannels();
  }

  render() {
    const channelsList = Object.values(this.props.channels)
    const channelIndex = channelsList.map((channel) => {
      return (
        <ChannelIndexItem
          key={channel.id}
          channel={channel}
          liKey={`li${channel.id}`}
        />
      );
    })
    return (
      <div className="channel-index">
        {channelIndex}
        <CreateChannelFormContainer />
      </div>

    );
  }
}

export default ChannelIndex;