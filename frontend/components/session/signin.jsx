import React from 'react';

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
      <ul>
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
      <div className="signin-form">
        <h1>Sign in to Relax</h1>
        <h3>We suggest using <b>the email address you use at work.</b></h3>
        
        <div>New to Relax? {this.props.signupLink}</div>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Sign In</button>
          <button onClick={this.demoUser}>Demo User</button>
        </form>
      </div>
    );
  }
};

export default Signin;