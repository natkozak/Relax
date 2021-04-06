import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import { Route } from 'react-router-dom';



const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <AuthRoute path='/signin' component={SigninContainer} />
    <AuthRoute path="/createnew" component={SignupContainer} />
  </div>
);

export default App;
