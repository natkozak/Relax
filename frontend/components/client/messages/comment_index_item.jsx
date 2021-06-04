import React from 'react';
// import EditCommentForm from './edit_comment_form'

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      content: ""
    }

    this.dismissEditForm = this.dismissEditForm.bind(this);
    this.authorId = this.props.comment.authorId;
    this.renderNameComment = this.renderNameComment.bind(this);
  }

  openEditForm() {
    return this.setState({
      editing: true
    })
  }

  dismissEditForm() {
    this.setState({
      editing: false
    })
  }

  handleDelete(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].destroy({
      commentId: this.props.comment.id
    });
  }

  // 2021-04-12T02:25:35.121Z
  formatTime() {
    let datetime = this.props.comment.createdAt;
    let [date, timezone] = datetime.split("T");
    let [time, zone] = timezone.split(".");
    return time;
  }

  renderNameComment() {
    return (
      <div className="render-name-comment">
        <div><b>{this.props.comment.fullName}</b></div>

        <div>{this.props.comment.content}</div>
      </div>
    )
  }

  render() {
    const editCheck = (this.props.currentUser === this.authorId) && (!this.state.editing);
    const deleteCheck = this.props.currentUser === this.authorId;

    // todo: put this.formatTime() into the render string

    return (
      <li key={this.props.liKey} className="comment-index-item-li">
        {this.state.editing ? <EditCommentForm
          comment={this.props.comment}
          dismiss={this.dismissEditForm} /> : this.renderNameComment()}
        <div ref={this.props.refForDiv} />
        <div className="change-buttons">
          {editCheck ? <button className="edit-comment-button" onClick={this.openEditForm.bind(this)}>Edit</button> : null}
          {deleteCheck ? <button className="delete-comment-button" onClick={this.handleDelete.bind(this)}>Delete</button> : null}
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;