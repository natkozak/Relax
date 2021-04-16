import React from 'react';

class CreateCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].create({
      contentCreate: this.state.content,
      authorCreate: this.props.authorId,
      topCreate: this.props.topId
      // refactor to include channelId later
    });
    this.setState({ content: "" });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
      <div className="create-comment-div">
        <form onSubmit={this.handleSubmit} className="create-comment-form" >
          <input className="create-comment-input"
            type='text'
            value={this.state.content}
            placeholder={"Reply ..."}
            onChange={this.update('content')} />

          <button type='submit' className="create-message-submit-button"><i className="fas fa-paper-plane fa-2x"></i></button>
        </form>
      </div>
    );
  }
}

export default CreateCommentForm;