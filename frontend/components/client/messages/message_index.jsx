import React from 'react';
import { receiveMessage, receiveMessages } from '../../../actions/message_actions';
import MessageIndexItemContainer from './message_index_item_container';
import CreateMessageFormContainer from "./create_message_form_container"

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], loaded: false, rendered: false };
    this.bottom = React.createRef();
    // this.getName = this.getName.bind(this);
  }

  componentDidMount() {
    this.props.requestMessages();
    console.log("MessageIndex#componentDidMount#this.props: ", this.props);

    // if I factor this into a different file, I need to write a function that takes arguments of the actions I want to use. they shouldn't need to be bound.
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              // this.setState({
              //   messages: Object.assign(this.state.messages, data.message)
              // });
              this.props.receiveMessage(data.message); //doesn't work
              console.log("created message", data.message)
              break;
            case "messages":
              // don't need this function because I use requestMessages to get messages into props via AJAX
              // this.setState({messages: data.messages});
              // this.props.receiveMessages(data); // doesn't work
            break;
            case "deleteMessage":
              this.props.removeMessage(data.messageId)
            break;
          }
        },
        create: function (data) { return this.perform("create", data) },
        load: function () { return this.perform("load") },
        edit: function (data) { return this.perform("edit", data) },
        destroy: function (data) { return this.perform("destroy", data) }
      }
    );

    if (!this.state.loaded) {
      this.state.loaded = App.cable.subscriptions.subscriptions[0].load();
    }

    console.log("MessageIndex#componentDidMount#this.props: ", this.props)
  }

  componentDidUpdate() {
    console.log("MessageIndexItem#componentDidUpdate#this.state", this.state);
    console.log("MessageIndexItem#componentDidUpdate#this.props", this.props);
    if (!this.state.loaded) {
      this.state.loaded = App.cable.subscriptions.subscriptions[0].load();
    }
    if (this.bottom.current != null) {
      this.bottom.current.scrollIntoView();
    }
  }

  getName(id){
    if (this.state.loaded) {
      console.log("this.props (loaded): ", this.props.messages[id].fullName)
      // this.fullName =  this.props.messages[message.id].fullName
      return this.props.messages[id].fullName;
    } else {
      return null
    }

    // return this.fullName = `nameFromIndex${id}`

    // if (this.state.loaded) {
    //   return this.state.messages[id].fullName;
    // //   // this.fullName =  this.props.messages[message.id].fullName
    // //   return this.props.messages[id].fullName;
    // } else {
    //   return null
    // }
  }


  render() {
    // if (this.state.loaded && !this.state.rendered) {
    //   this.state.loaded = App.cable.subscriptions.subscriptions[0].load();
    //   this.state.rendered = true;
    // }
    console.log("MessageIndex#render#this.state", this.state);
    console.log("MessageIndex#render#this.props", this.props);
    // debugger
    // const messagesList = Object.values(this.state.messages);
    const messagesList = Object.values(this.props.messages);
    const messagesIndex = messagesList.map((message, idx) => {
      return (
        <MessageIndexItemContainer
          // fullName={this.getName(message.id)}
          key={message.id}
          message={message}
          liKey={`li${message.id}`}
          refForDiv={this.bottom}
          currentUser={this.props.currentUser}
        />
      );
    })

    return (
      <div className="message-index-container">
          <div className="message-index"> 
            {messagesIndex}
          </div>
        <CreateMessageFormContainer />
      </div>
    );
  }
}

export default MessageIndex;