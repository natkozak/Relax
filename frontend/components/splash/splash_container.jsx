import { connect } from 'react-redux';
import Splash from './splash';

const mapSTP = state => ({
  currentUser: state.session.id
});

export default connect(mapSTP, null)(Splash);