import React from 'react';

class ChannelSettingsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({ name: "" });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteChannel();
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="channel-settings-form">
          <label>Description
            <input className="channel-settings-description-input"
              type='text'
              value={this.state.description}
              onChange={this.update('description')}
            />
          </label>

          <button type='submit' className="channel-settings-submit-button">Edit</button>
        </form>

      </div>
    );
  }
}

export default ChannelSettingsForm;