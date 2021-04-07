import React from 'react';


class CreateMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.message;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.submitMessage(this.state);
  }

  change(label) {
    return e => this.setState({ [label]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type='text' value={this.state.content} onChange={this.change('content')} />
          </label>
          <button type='submit'>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default CreateMessageForm;