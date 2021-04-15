import { connect } from "react-redux";
import Modals from './modals';

const mapSTP = state => {
  return ({
    modal: state.ui.modal
  })
};

export default connect(mapSTP, null)(Modals);