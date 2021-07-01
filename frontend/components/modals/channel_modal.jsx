import React from 'react';
import ChannelAboutForm from '/frontend/components/client/channels/channel_about_form.jsx';
import ChannelSettingsForm from '/frontend/components/client/channels/channel_settings_form.jsx';
import { connect } from "react-redux";
import { closeModal } from "/frontend/actions/modal_actions";
import { withRouter } from 'react-router-dom';

class ChannelModal extends React.Component {
  constructor(props) {
    super(props);

    this.channel = this.props.channels[this.props.channelId];
    this.state = {tab: "about"};

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
          <div className="channel-modal-name">#{this.channel.name}</div>
          <div className="channel-modal-tab">About</div>
          <ChannelAboutForm closeModal={this.props.closeModal} />
          <div className="channel-modal-tab">Settings</div>
          <ChannelSettingsForm closeModal={this.props.closeModal} />
        </div>
        <div className="modal-background"></div>
      </div>
    );
  }
}

const mapSTP = (state, ownProps) => ({
  channelId: ownProps.location.pathname.split("/")[3],
  channels: state.entities.channels
});

const mapDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})


export default withRouter(connect(mapSTP, mapDTP)(ChannelModal));