import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapSTP = state => ({
  loggedIn: Boolean(state.session.id)
});

const Auth = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props => (
      loggedIn ? <Redirect to="/client" /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mapSTP)(Protected));