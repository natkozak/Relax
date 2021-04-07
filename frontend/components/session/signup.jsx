import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

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
    const user = Object.assign({}, this.state);
    this.props.createNewUser(user);
  }

  renderErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    this.props.clearErrors();
  }


  render() {
    return (
      <div className="signup-form-div">
        <Link className="logo-black" to='/'><i class="far fa-sun"></i><b>Relax</b></Link>
        <h1 className="signup-header-text">Enter an email and password</h1>
        <h3 className="use-work">We suggest using <b>the email address you use at work.</b></h3>
        
        
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label className="email-label">Email:
            <input className="email-input" type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label className="password-label">Password:
            <input className="password-input" type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          {this.renderErrors()}
          <button className="signup-button" onClick={this.handleSubmit}>Sign Up</button>
          <div>Already using Relax? {this.props.signinLink}</div>
        </form>
      </div>
    );
  }
};

export default Signup;