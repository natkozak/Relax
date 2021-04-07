import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashNav from './splash_nav'

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='splash-div'>
        <SplashNav />
        <h1 className='splash-header-text'>Relax makes it <b className='splash-bold'>downright pleasant</b> to work together</h1>
        <Link to='/createnew' className='splash-try-button'>TRY FOR FREE</Link>
      </div>
    );
  }
}
        

export default Splash;