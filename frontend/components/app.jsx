import React from 'react';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import SignupContainer from './session/signup_container';

export default () => (
  <div>
    <AuthRoute path="/createnew" component={SignupContainer} />
  </div>
);
