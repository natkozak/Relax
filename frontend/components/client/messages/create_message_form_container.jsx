import { connect } from 'react-redux';
import CreateMessageForm from './create_message_form';


const mapSTP = (state) => ({
    authorId: state.session.id
    // should get the channelId from props at some point
});

export default connect(mapSTP, null)(CreateMessageForm);