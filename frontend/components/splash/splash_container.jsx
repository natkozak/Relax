import { connect } from 'react-redux';
import Splash from './splash';

const mapSTP = state => ({
  currentUser: state.session.id // do I need this?
});

export default connect(mapSTP, null)(Splash);