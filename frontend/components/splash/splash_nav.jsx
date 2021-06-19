import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class SplashNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-nav-div">
        <Link className="logo-header" to='/'><i className="far fa-sun"></i><b>Relax</b></Link>
        <a className="header-link" href="https://github.com/natkozak/Relax">Project</a>
        <a className="header-link" href="https://github.com/natkozak">Github</a>
        <a className="header-link" href="https://www.linkedin.com/in/nat-kozak-23179049/">LinkedIn</a>
        <Link className="header-link" to='/signin' className="header-link">Sign in</Link>
        <Link to='/createnew' className='splash-try-button'>TRY FOR FREE</Link>
      </div>
    );
  }
}


export default SplashNav;