import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({
      [type]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    return (
      <div className="signup-form">
        <h1>Enter an email and password</h1>
        <h3>We suggest using <b>the email address you use at work.</b></h3>
        <div>{this.renderErrors()}</div>
        <form onSubmit={this.handleSubmit}>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>
    );
  }
};

export default Signup;