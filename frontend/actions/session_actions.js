import { createUser, deleteSession, createSession } from '../utils/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; 
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


export const createNewUser = formUser => dispatch => (
  createUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = formUser => dispatch => (
  createSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  deleteSession()
  .then(() => dispatch(logoutCurrentUser()))
);

