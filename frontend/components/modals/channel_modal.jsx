import React from 'react';
import ChannelAboutForm from '/frontend/components/client/channels/channel_about_form.jsx';
import ChannelSettingsForm from '/frontend/components/client/channels/channel_settings_form.jsx';
import { connect } from "react-redux";
import { closeModal } from "/frontend/actions/modal_actions";

class ChannelModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.closeModal();
  }

  render() {

    return (
      <div>
        <div className="modal-child">
          <button className="close-modal-button" onClick={this.handleSubmit}>X</button>
          About
          <ChannelAboutForm closeModal={this.props.closeModal} />
          Settings
          <ChannelSettingsForm closeModal={this.props.closeModal} />
        </div>
        <div className="modal-background"></div>
      </div>
    );
  }
}

const mapDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})


export default connect(null, mapDTP)(ChannelModal);