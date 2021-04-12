import React from 'react';

class CreateMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].create({ 
      contentCreate: this.state.content,
      authorCreate: this.props.author_id
    });
    this.setState({ content: '' });
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type='text' 
            value={this.state.content} 
            placeholder={"Jot something down"}
            onChange={this.update('content')} />
          
          <button type='submit'><i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
    );
  }
}

export default CreateMessageForm;