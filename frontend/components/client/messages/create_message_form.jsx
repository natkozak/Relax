import React from 'react';

class CreateMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.message;
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const newMessage = Object.assign({}, this.state);
    this.props.submitMessage(newMessage).then(
      App.cable.subscriptions.subscriptions[0].speak({ message: this.state.content })
    )
    this.setState({content: ''});
  }

  change(label) {
    return e => this.setState({ [label]: e.currentTarget.value });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input 
            type='text' 
            value={this.state.content} 
            placeholder={"Jot something down"}
            onChange={this.change('content')} />
          
          <button type='submit'><i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
    );
  }
}

export default CreateMessageForm;