import React from 'react';

class CreateMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].create({ 
      contentCreate: this.state.content,
      authorCreate: this.props.authorId
      // refactor to include channelId later
    });
    this.setState({ content: "" });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
      <div className="create-message-div">
        <form onSubmit={this.handleSubmit} className="create-message-form" >
          <input className="create-message-input"
            type='text' 
            value={this.state.content} 
            placeholder={"Jot something down"}
            onChange={this.update('content')} />
          
          <button type='submit' className="create-message-submit-button"><i className="fas fa-paper-plane fa-2x"></i></button>
        </form>
      </div>
    );
  }
}

export default CreateMessageForm;