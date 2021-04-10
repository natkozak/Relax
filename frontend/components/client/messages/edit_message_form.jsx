import React from 'react';

class EditMessageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = this.props.message;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.requestMessage(this.props.message.id);
  }

  dismiss() {
    this.props.dismiss();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateMessage(this.state)
      .then(() => this.dismiss());
  }

  changeContent() {
    return e => this.setState({ content: e.currentTarget.value });
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
              onChange={this.changeContent()} />
          </label>
          
          <button type='submit'><i className="fas fa-pen"></i></button>
        </form>
      </div>
    );
  }
}

export default EditMessageForm;