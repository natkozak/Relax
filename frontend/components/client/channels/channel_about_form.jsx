import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestChannel, updateChannel } from '/frontend/actions/channel_actions';

class ChannelAboutForm extends React.Component {
  constructor(props) {
    super(props);

    this.channelId = this.props.currentChannel || 1;
    this.state = { ...this.props.channels[this.channelId], description: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.requestChannel(this.channelId);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateChannel(this.state);
    this.setState({ description: "" });
    this.props.closeModal();
  }
  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  
  render() {
    let description;
    this.state ? description = this.state.description : null;

    return (
      <div className="channel-about">
        <form onSubmit={this.handleSubmit} className="channel-about-form">
            <input className="channel-about-description-input"
              type='text'
            placeholder="Change description"
              value={description}
              onChange={this.update('description')}
            />
          <button type='submit' className="channel-about-submit-button">Save</button>
        </form>
        

      </div>
    );
  }
}



const mapSTP = (state, ownProps) => ({
  currentChannel: ownProps.location.pathname.split("/")[3],
  channels: state.entities.channels
});

const mapDTP = dispatch => ({
  requestChannel: channelId => dispatch(requestChannel(channelId)),
  updateChannel: channel => dispatch(updateChannel(channel))
});

export default withRouter(connect(mapSTP, mapDTP)(ChannelAboutForm));