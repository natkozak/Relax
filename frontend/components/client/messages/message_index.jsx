import React from 'react';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], loaded: false };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
              break;
            case "messages":
              this.setState({ messages: data.messages });
              break;
            case "editMessage":
              this.setState({
                messages: data.messages
              });
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
  }

  componentDidUpdate() {
    if (!this.state.loaded) {
      this.state.loaded = App.cable.subscriptions.subscriptions[0].load();
    }
    if (this.bottom.current != null) {
      this.bottom.current.scrollIntoView();
    }
  }


  render() {
    const messagesIndex = this.state.messages.map((message, idx) => {
      return (
        <MessageIndexItem
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
      </div>
    );
  }
}

export default MessageIndex;