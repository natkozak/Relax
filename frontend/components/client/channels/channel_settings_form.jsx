import React from 'react';
import { connect } from 'react-redux';
import { requestChannel, deleteChannel } from '/frontend/actions/channel_actions';
import { withRouter } from 'react-router-dom';

class ChannelSettingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.channelId = this.props.currentChannel;
    this.state = this.props.channels[this.channelId];
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestChannel(this.channelId);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.deleteChannel(this.channelId)
      .then(res => this.props.history.push(`/client/channels/1/messages`));
    this.props.closeModal();
  }

  render() {
    if (this.channelId !== "1") {
      return (
        <div>
          <button onClick={this.handleSubmit} className="channel-settings-delete-button">Delete Channel</button>
        </div>
      )
    } else {
      return (
        <div>
          This channel cannot be deleted.
        </div>
      );
    }
  }
}

const mapSTP = (state, ownProps) => ({
  currentChannel: ownProps.location.pathname.split("/")[3],
  channels: state.entities.channels
});

const mapDTP = dispatch => ({
  requestChannel: channelId => dispatch(requestChannel(channelId)),
  deleteChannel: channelId => dispatch(deleteChannel(channelId)) // this component needs the channelId somehow, right?
});

export default withRouter(connect(mapSTP, mapDTP)(ChannelSettingsForm));