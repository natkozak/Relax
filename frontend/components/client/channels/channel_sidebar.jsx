import React from 'react';
import ChannelIndexContainer from './channel_index_container';

const ChannelSidebar = () => {
  return (
    <div className="channel-sidebar">
      <ChannelIndexContainer 
        // openMessages={this.props.openMessages}
      />
    </div>
  );
}

export default ChannelSidebar;