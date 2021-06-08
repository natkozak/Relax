import React from 'react';
import CreateChannelFormContainer from '/frontend/components/client/channels/create_channel_form_container.jsx';

class CreateChannelModal extends React.Component {
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
          <button className="close-modal-button" onClick={this.handleSubmit}>X</button>
          <CreateChannelFormContainer closeModal={this.props.closeModal}/>
        </div>
        <div className="modal-background"></div>
      </div>
    );
  }
}


export default CreateChannelModal;