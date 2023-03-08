const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';

let initialStore = {
    dialogs: [
        {id: 1, name: 'Oleg', surname: 'Sergeev'},
        {id: 2, name: 'Viktor', surname: 'Braga'},
        {id: 3, name: 'Egor', surname: 'Dydkin'},
        {id: 4, name: 'Alex', surname: 'Drag'},
    ],
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Who'},
        {id: 4, message: 'Ho Ho Ho'},
    ],
    newMessageBody: '12345',
}
const dialogReducer = (state = initialStore, action) => {
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
        default:
            return state;
    }
    return state;
}

export default dialogReducer;


