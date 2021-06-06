import React from 'react';

class EditCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].edit({
      commentId: this.state.id,
      contentUpdate: this.state.content
    });
    this.setState({ content: "" });
    this.dismiss();
  }

  dismiss() {
    this.props.dismiss();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { comment } = this.props;

    if (!comment) return null;
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type='text'
            value={this.state.content}
            onChange={this.update('content')} />

          <button type='submit'><i className="fas fa-pen"></i></button>
        </form>
      </div>
    );
  }
}

export default EditCommentForm;