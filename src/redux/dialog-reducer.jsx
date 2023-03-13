const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';

let initialStore = {
    dialogs: [
        {id: 1, name: 'Oleg', surname: 'Sergeev'},
        {id: 2, name: 'Viktor', surname: 'Braga'},
        {id: 3, name: 'Egor', surname: 'Dydkin'},
        {id: 4, name: 'Alex', surname: 'Drag'},
    ],
    messages: [
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
            return {
                ...state,
                messages: [...state.messages, {id: Date.now(), message: state.newMessageBody}],
                newMessageBody: ''
            }
        case UPDATE_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.messageText
            }
        default:
            return state;
    }
}

export default dialogReducer;


