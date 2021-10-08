import React from 'react';
import CreateChannelFormContainer from '/frontend/components/client/channels/create_channel_form_container.jsx';
import { connect } from "react-redux";
import { closeModal } from "/frontend/actions/modal_actions";

class CreateChannel extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault;
    this.props.closeModal();
  }

  render() {

    return (
      <div>
        <div className="modal-child">
          <button className="close-modal-button" onClick={this.handleSubmit}><i class="fas fa-times"></i></button>
          <CreateChannelFormContainer closeModal={this.props.closeModal}/>
        </div>
        <div className="modal-background"></div>
      </div>
    );
  }
}

const mapDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})


export default connect(null, mapDTP)(CreateChannel);