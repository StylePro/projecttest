const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: Date.now(),
                message: state.newPostText,
                likesCount: 0,
            }
            state.profile.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_POST_TEXT:
            state.newPostText = action.text;
            break;
        default:
            return state;
    }
    return state;
}

export default profileReducer;