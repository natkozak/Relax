import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SplashContainer from './splash/splash_container'
import ClientContainer from './client/client_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';




const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/signin' component={SigninContainer} />
      <AuthRoute exact path="/createnew" component={SignupContainer} />
      <ProtectedRoute path="/client" component={ClientContainer} />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
