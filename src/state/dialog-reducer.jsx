const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: Date.now(),
                message: state.newMessageBody
            }
            state.message.push(newMessage);
            state.newMessageBody = '';
            break;
        case UPDATE_MESSAGE_BODY:
            state.newMessageBody = action.messageText;
            break;
    }
    return state;
}

export default dialogReducer;


