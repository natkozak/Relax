import React from 'react';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { messages: [] };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.props.requestMessages();

    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              // setting state to an object that contains many messages
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
              break;
            case "messages":
              this.setState({ messages: data.messages });
              break;
          }
        },
        speak: function (data) { return this.perform("speak", data) },
        load: function () { return this.perform("load") }
      }
    );
  }

  loadChat(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  }

  componentDidUpdate() {
    if (this.bottom.current != null) {
      this.bottom.current.scrollIntoView();
    }
    
  }

  render() {
    const messages = this.props.messages;
    this.messagesArray = Object.values(messages)
    const messagesIndex = this.messagesArray.map((message) =>
      <MessageIndexItem
        message={message}
        key={message.id}
        updateMessage={this.props.updateMessage}
        deleteMessage={this.props.deleteMessage}
        currentUser={this.props.currentUser}
        liKey={`li${message.id}`}
        refForDiv={this.bottom}
      />
    )

    return (
      <div>
          <div className="message-list">{messagesIndex}</div>
      </div>
    );
  }
}

export default MessageIndex;