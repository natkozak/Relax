import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { createNewUser, clearErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapSTP = ({ errors }) => {
  return {
    errors: errors.session,
    signinLink: <Link to="/signin">Sign in instead</Link>,
  };
};

const mapDTP = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(Signup);