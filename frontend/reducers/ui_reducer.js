import { combineReducers } from 'redux';

import ModalsReducer from './modals_reducer';

const UIReducer = combineReducers({
  modal: ModalsReducer
});

export default UIReducer;