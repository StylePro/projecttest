const store = {

    _rerenderEntireTree() {
        console.log('state new')
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
    addPost() {
        const newPost = {
            id: Date.now(),
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.profile.push(newPost);
        this._state.profilePage.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    updatePostText(text) {
        this._state.profilePage.newPostText = text;
        this._rerenderEntireTree(this._state);
    },
    sendMessage () {
        let newMessage = {
            id: Date.now(),
            message: this._state.dialogPage.newMessageBody
        }
        this._state.dialogPage.message.push(newMessage);
        this._state.dialogPage.newMessageBody = '';
        this._rerenderEntireTree(this._state);
    },
    updateMessageBody(messageText) {
        this._state.dialogPage.newMessageBody = messageText;
        this._rerenderEntireTree(this._state);
    },
    subscriber(observer) {
        this._rerenderEntireTree = observer;
}
}
export default store;