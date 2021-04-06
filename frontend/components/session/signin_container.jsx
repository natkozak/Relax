import { connect } from 'react-redux';
import React from 'react'; 
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import Signin from './signin';

const mapSTP = ({ errors }) => {
  return {
    errors: errors.session,
    signupLink: <Link to="/createnew">Create an account</Link>,
  };
};

const mapDTP = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  demoUser: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(Signin);