import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  handleInput(type) {
    return (e) => this.setState({ 
      [type]: e.currentTarget.value 
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  demoUser(e) {
    e.preventDefault();
    this.props.demoUser({ email: 'demo@demo.com', password: '123456' })
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
      <div className="signin-form-background">
        <div className="signin-form-div">
          <Link className="logo-black" to='/'><i class="far fa-sun"></i><b>Relax</b></Link>
          <h1 className="signin-header-text">Sign in to Relax</h1>
          <h3 className="use-work">We suggest using <b>the email address you use at work.</b></h3>


          <form onSubmit={this.handleSubmit} className="signin-form">

            <label className="email-label">Email:
            <input className="email-input" type="text" value={this.state.email} onChange={this.handleInput('email')} />
            </label>
            <label className="password-label">Password:
            <input className="password-input" type="password" value={this.state.password} onChange={this.handleInput('password')} />
            </label>
            {this.renderErrors()}
            <button onClick={this.handleSubmit} className="signin-button">Sign In</button>
            <button onClick={this.demoUser} className="demo-user">Demo User</button>
            <div>New to Relax? {this.props.signupLink}</div>
          </form>
        </div>
      </div>
    );
  }
};

export default Signin;