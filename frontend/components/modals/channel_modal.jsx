import React from 'react';
import ChannelAboutForm from '/frontend/components/client/channels/channel_about_form.jsx';
import ChannelSettingsForm from '/frontend/components/client/channels/channel_settings_form.jsx';
import { connect } from "react-redux";
import { closeModal } from "/frontend/actions/modal_actions";
import { withRouter } from 'react-router-dom';

class ChannelModal extends React.Component {
  constructor(props) {
    super(props);

    this.channel = this.props.channels[this.props.channelId] || 1;
    this.state = {tab: "about"};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showSettings = this.showSettings.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  showAbout(e){
    e.preventDefault();
    this.setState({tab: "about"});
  }

  showSettings(e) {
    console.log("hi");
    e.preventDefault();
    this.setState({tab: "settings"});
  }

  render() {

    return (
      <div>
        <div className="channel-modal-child">
          <button className="channel-close-modal-button" onClick={this.handleSubmit}><i class="fas fa-times"></i></button>
          <div className="channel-modal-name">#{this.channel.name || "general"}</div>
          <div className="channel-modal-tab">
            <div onClick={this.showAbout} className="channel-modal-tab-about">Edit</div>
            <div onClick={this.showSettings} className="channel-modal-tab-settings">Delete</div>
          </div>
          
          {(this.state.tab === "about") ? <ChannelAboutForm closeModal={this.props.closeModal} /> : null}
          {(this.state.tab === "settings") ? <ChannelSettingsForm closeModal={this.props.closeModal} /> : null}
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