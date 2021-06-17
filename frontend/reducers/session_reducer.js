import { 
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER, 
  // RECEIVE_CURRENT_CHANNEL 
} from "../actions/session_actions";

const _nullSession = {
  id: null,
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.user.id })
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    // case RECEIVE_CURRENT_CHANNEL:
    //   return Object.assign({}, { currentChannel: action.channel.id })
    default:
      return state;
  }
};

export default SessionReducer;