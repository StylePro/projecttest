const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialStore = {
    profile: [
        {id: 1, message: 'Hello', likesCount: 89},
        {id: 2, message: 'What do you do', likesCount: 34},
        {id: 3, message: 'What is your name', likesCount: 23},
        {id: 4, message: 'All good', likesCount: 45},
        {id: 5, message: 'Ogogo', likesCount: 43},
    ],
    newPostText: '123',
}
const profileReducer = (state = initialStore, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                profile: [...state.profile, {id: Date.now(), message: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state;
    }
}

export default profileReducer;