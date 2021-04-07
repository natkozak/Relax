import React from 'react';
import MessageIndexItem from './message_index_item';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestMessages();
  }

  render() {
    const messages = this.props.messages;
    if (messages) {
      this.messagesArray = Object.values(messages)
      return (
        <div>
          <ul>
            {
              this.messagesArray.map((message) =>
                <MessageIndexItem
                  message={message}
                  deleteMessage={this.props.deleteMessage}
                />
              )
            }
          </ul>
        </div>
      );
    } else {
      return (<div>"no messages"</div>);
    }
  }
}

export default MessageIndex;