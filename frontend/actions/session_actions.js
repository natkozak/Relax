import { createUser, deleteSession, createSession } from '../utils/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; 

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// thunk action creator
export const createNewUser = formUser => dispatch => createUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => createSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));