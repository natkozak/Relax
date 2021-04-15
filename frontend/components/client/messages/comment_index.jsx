import React from 'react';
import CommentIndexItem from './comment_index_item';
import CreateCommentFormContainer from "./create_comment_form_container"

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    this.bottom = React.createRef();
    this.renderTopMessage = this.renderTopMessage.bind(this);
    
  }

  componentDidMount() {
    this.props.requestComments(this.props.topId);
    this.topMessage = this.props.messages[this.props.topId];
  }

  componentDidUpdate() {
    if (this.bottom.current != null) {
      this.bottom.current.scrollIntoView();
    }
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
    console.log("this.topMessage: ", this.topMessage);
    // console.log("this.props: ", this.props);
    // const commentsIndex = "hi!";

    const commentsList = Object.values(this.props.comments);
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