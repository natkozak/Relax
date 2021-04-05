import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapSTP = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/createnew" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mapSTP)(Protected));