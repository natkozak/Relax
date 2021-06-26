import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateChannel } from '/frontend/actions/channel_actions';

class ChannelAboutForm extends React.Component {
  constructor(props) {
    super(props);

    const channelId = this.props.currentChannel;

    this.state = this.props.channels.channelId;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestChannel(this.props.currentChannel);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateChannel(this.state)
    this.setState({ description: "" });
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="channel-about-form">
          <label>Description
            <input className="channel-about-description-input"
              type='text'
              value={this.state.description}
              onChange={this.update('description')}
            />
          </label>

          <button type='submit' className="channel-about-submit-button">Edit</button>
        </form>

      </div>
    );
  }
}



const mapSTP = (state, ownProps) => ({
  authorId: state.session.id,
  currentChannel: ownProps.location.pathname.split("/")[3],
  channels: state.entities.channels
});

const mapDTP = dispatch => ({
  requestChannel: channelId => dispatch(requestChannel(channelId)),
  updateChannel: channelId => dispatch(updateChannel(channelId)) // this component needs the channelId somehow, right?
});

export default withRouter(connect(mapSTP, mapDTP)(ChannelAboutForm));