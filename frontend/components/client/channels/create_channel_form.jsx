import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      description: "",
      is_private: false,
      is_direct: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitChannel(this.state);
    this.setState({ name: "" });
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
      <div className="create-channel-div">
        <form onSubmit={this.handleSubmit} className="create-channel-form" >
          <label>Name {}
            <input className="create-channel-name-input"
              type='text'
              value={this.state.name}
              placeholder={"e.g. plan-budget"}
              onChange={this.update('name')} />
          </label>
          <label>Description (optional)
            <input className="create-channel-description-input"
              type='text'
              value={this.state.description}
              onChange={this.update('description')}
            />
          </label>
          <label>Make Private
          {/* make the following text change conditionally depending on whether the checkbox is toggled */}
            <div className="private-text">When a channel is set to private, it can only be viewed or joined by invitation</div>
            <input className="create-channel-isPrivate-input"
              type='checkbox'
              onChange={this.update('is_private')}
          />
          </label>

          <button type='submit' className="create-channel-submit-button">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateChannelForm;