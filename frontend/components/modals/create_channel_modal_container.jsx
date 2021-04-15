import { connect } from "react-redux";
import { closeModal } from "/frontend/actions/modal_actions";
import CreateChannelModal from './create_channel_modal';

const mapDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})


export default connect(null, mapDTP)(CreateChannelModal);