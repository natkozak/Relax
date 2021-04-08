import React from 'react';

class EditMessageForm extends React.Component {

  componentDidMount() {
    this.props.requestMessage(this.props.match.params.messageId);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newMessage = Object.assign({}, this.state);
    this.props.updateMessage(newMessage);
  }

  change(label) {
    return e => this.setState({ [label]: e.currentTarget.value });
  }

  render() {
    const { message} = this.props;

    if (!message) return null;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input 
              type='text' 
              value={this.state.content}
              onChange={this.change('content')} />
          </label>
          
          <button type='submit'><i className="fas fa-pen"></i></button>
        </form>
      </div>
    );
  }
}

export default EditMessageForm;