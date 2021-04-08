import React from 'react';
import { Link } from 'react-router-dom';
import EditMessageFormContainer from "./edit_message_form_container"

const ContentOrEditForm = (props) => {
  console.log(props.editing);
  console.log(props.message);
  if (props.editing){
    return <EditMessageFormContainer message={props.message} />;
  } else {
    return props.message.content;
  }
};

class MessageIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }
  }

  renderDeleteButton(){
    if (this.props.currentUser != this.props.message.authorId) {
      return null;
    }
    return (
      <button onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
    );
  }

  openEditForm() {
    this.setState({
      editing: true
    })
    console.log(this.state);
  }

  handleClick(e) {
    e.preventDefault()
    this.setState({
      editing: true
    })
  }

  renderEditButton(){
    if (this.props.currentUser != this.props.message.authorId) {
      return null;
    }
    return (
      <button onClick={() => this.openEditForm()}>Edit</button>
    );
  }

  render() {

    return (
      <li>
        <ContentOrEditForm editing={this.state.editing} message={this.props.message} />
        {this.renderEditButton()}
        {this.renderDeleteButton()}
      </li>
    );
  }
}

export default MessageIndexItem;