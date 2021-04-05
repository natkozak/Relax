import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';


export default () => (
  <div>
    <AuthRoute path='/signin' component={SigninContainer} />
    <AuthRoute path="/createnew" component={SignupContainer} />
  </div>
);
