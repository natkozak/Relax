import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='splash-div'>
        <h1 className='splash-header-text'>Relax makes it <b className='splash-bold'>downright pleasant</b> to work together</h1>
        <Link to='/createnew' className='splash-button'>try for free</Link>
      </div>
    );
  }
}
        

export default Splash;