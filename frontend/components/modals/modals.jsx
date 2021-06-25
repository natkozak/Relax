import React from 'react';
import CreateChannelModalContainer from './create_channel_modal';
import ChannelModalContainer from './channel_modal';

class Modals extends React.Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
  }

  renderModal(){
    switch (this.props.modal) {
      case "CreateChannel":
        return <CreateChannelModalContainer/>
      case "ChannelModal":
        return <ChannelModalContainer />
      default:
        return null;
    }
  }

  render() {

    return (
      <div>
        {this.renderModal()}
      </div>
    );
  }
}

export default Modals;