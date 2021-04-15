import React from 'react';
import CreateChannelModalContainer from './create_channel_modal_container';
import CreateChannelFormContainer from '/frontend/components/client/channels/create_channel_form_container.jsx';

class Modals extends React.Component {
  constructor(props) {
    super(props);

    this.renderModal = this.renderModal.bind(this);
  }

  renderModal(){
    switch (this.props.modal) {
      case "CreateChannelFormContainer":
        return <CreateChannelModalContainer />
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