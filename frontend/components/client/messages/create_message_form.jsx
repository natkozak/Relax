import React from 'react';

class CreateMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.message;

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    
    const newMessage = Object.assign({}, this.state);
    this.props.submitMessage(newMessage);
  }

  change(label) {
    return e => this.setState({ [label]: e.currentTarget.value });
  }

  render() {
    let placeholder = "Jot something down";

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
              type='text' 
              value={this.state.content} 
              placeholder={placeholder}
              onChange={this.change('content')} />
          </label>
          
          <button type='submit'><i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
    );
  }
}

export default CreateMessageForm;