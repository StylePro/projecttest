const SEND_MESSAGE = 'SEND-MESSAGE'

let initialStore = {
    dialogs: [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Egor'},
        {id: 4, name: 'Alex'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Who'},
        {id: 4, message: 'Ho Ho Ho'},
    ],
}
const dialogReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: Date.now(), message: action.newMessage.newMessage}],
            }
        default:
            return state;
    }
}

export default dialogReducer;


