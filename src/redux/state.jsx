import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

const store = {
    _rerenderEntireTree() {
        console.log('redux new')
    },
    _state: {
        profilePage: {
            profile: [
                {id: 1, message: 'Hello', likesCount: 89},
                {id: 2, message: 'What do you do', likesCount: 34},
                {id: 3, message: 'What is your name', likesCount: 23},
                {id: 4, message: 'All good', likesCount: 45},
                {id: 5, message: 'Ogogo', likesCount: 43},
            ],
            newPostText: '',
        },
        dialogPage: {
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
            newMessageBody: '',
        },
    },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);

        this._rerenderEntireTree(this._state);
    },
}

export const sendMessageActionCreator = () => ({type: 'SEND-MESSAGE'});
export const updateMessageTextActionCreator = (text) => ({type: 'UPDATE-MESSAGE-BODY', messageText: text});
export default store;

