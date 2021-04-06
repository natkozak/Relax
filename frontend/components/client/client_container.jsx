import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Client from './client';

const mapSTP = state => ({
  //channels go here
  //sidebar stuff goes here
  //searchbar stuff for actually searching goes here
});

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapSTP, mapDTP)(Client);