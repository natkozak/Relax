import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SplashContainer from './splash/splash_container'
import ClientContainer from './client/client_container';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import ModalsContainer from './modals/modals_container';



const App = () => (
  <div>
    <ModalsContainer />

    <Switch>
      <AuthRoute exact path='/' component={SplashContainer} />
      <AuthRoute exact path='/signin' component={SigninContainer} />
      <AuthRoute exact path="/createnew" component={SignupContainer} />
      <ProtectedRoute path="/client" component={ClientContainer} />

      {/* doesn't appear to work -- gives a cryptic lifecycle error */}
      {/* <ProtectedRoute path="/client/channels/1/messages" component={ClientContainer} /> */}
      {/* <ProtectedRoute path="/client/channels/:channelId/messages" component={ClientContainer} /> */}
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
