import React from 'react';
import CommentIndexItem from './comment_index_item';
import CreateCommentFormContainer from "./create_comment_form_container"

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topMessage: {}, comments: [] };
    this.bottom = React.createRef();
    this.renderTopMessage = this.renderTopMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestComments(this.props.topId);
    // this.props.requestMessage(this.props.topId);

    const comments = Object.values(this.props.comments);
    // this.setState({
    //   comments: comments
    // });
    // console.log(this.state);
    this.topMessage = this.props.messages[this.props.topId];
    // this.setState({
    //   topMessage: this.props.messages[this.props.topId]
    // })

  }

  componentDidUpdate() {
    // this.topMessage = this.props.messages[this.props.topId];
    if (this.bottom.current != null) {
      this.bottom.current.scrollIntoView();
    }
  }

  componentWillUnmount() {
    this.topMessage = null;
    return this.state = { comments: [] };
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.closeComments();
    this.state = { comments: [] };
  }

  renderTopMessage() {
    if (this.topMessage) {
      return (
        <div className="render-top-message">
          <div><b>{this.topMessage.fullName}</b></div>

          <div>{this.topMessage.content}</div>
        </div>
      )
    } else {
      return null;
    }

  }


  render() {
    // console.log("this.state: ", this.state);
    // console.log("this.props: ", this.props);
    // (this.props.topId) ? this.topId = this.props.topId : this.topId = null;
    // // const commentsIndex = "hi!";
    // console.log("this.topMessage: ", this.topMessage);

    // console.log("this.props.comments: ", this.props.comments);

    const commentsAll = Object.values(this.props.comments);
    const commentsList = commentsAll.filter((comment) => {return comment.topId === this.props.topId});

    const commentsIndex = commentsList.map((comment) => {
      return (
        <CommentIndexItem
          key={comment.id}
          comment={comment}
          liKey={`li${comment.id}`}
          refForDiv={this.bottom}
          currentUser={this.props.currentUser}
        />
      );
    })

    return (
      <div className="comment-index-container">
        <button className="close-comments-button" onClick={this.handleSubmit}>X</button>
        <div>{this.renderTopMessage()}</div>
        <div className="comment-index">
          {commentsIndex}
        </div>
        <CreateCommentFormContainer topId={this.props.topId} />
      </div>
    );
  }
}

export default CommentIndex;