import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errors from './errors_reducer';

const RootReducer =  combineReducers({
  session: sessionReducer,
  errors
});

export default RootReducer;