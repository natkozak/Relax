import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Relax makes it <b>downright pleasant</b> to work together</h1>
        <Link to='/createnew'>try for free</Link>
      </div>
    );
  }
}
        

export default Splash;