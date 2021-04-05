import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Signin from './signin';


const mapDTP = dispatch => ({
  login: formUser => dispatch(login(formUser)),
});

export default connect(null, mapDTP)(Signin);