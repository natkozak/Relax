import { combineReducers } from 'redux';

import UsersReducer from './users_reducer';
import MessagesReducer from './messages_reducer'
import ChannelsReducer from './channels_reducer'
import CommentsReducer from './comments_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  messages: MessagesReducer,
  comments: CommentsReducer,
  channels: ChannelsReducer,
});

export default EntitiesReducer;