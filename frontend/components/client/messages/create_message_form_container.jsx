import { connect } from 'react-redux';
import CreateMessageForm from './create_message_form';


const mapSTP = (state) => ({
    authorId: state.session.id
});

export default connect(mapSTP, null)(CreateMessageForm);