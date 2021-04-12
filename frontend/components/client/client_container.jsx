import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestMessage, requestMessages } from '../../actions/message_actions'
import Client from './client';

const mapSTP = state => ({
  //channels go here
  //sidebar stuff goes here
  //searchbar stuff for actually searching goes here
  messages: state.entities.messages
});

const mapDTP = dispatch => ({
    requestMessage: (messageId) => dispatch(requestMessage(messageId)),
    requestMessages: () => dispatch(requestMessages()),
    logout: () => dispatch(logout()),

});

export default connect(mapSTP, mapDTP)(Client);