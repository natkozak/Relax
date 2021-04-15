import { OPEN_MODAL, CLOSE_MODAL } from '/frontend/actions/modal_actions';

const ModalReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_MODAL:
      return action.component;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

export default ModalReducer;