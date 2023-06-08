const ADD_POST = 'ADD-POST';
const SET_PROFILE_USER = 'SET_PROFILE_USER';
const GET_STATUS = 'GET_STATUS';
const SET_STATUS = 'SET_STATUS';

let initialStore = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 89},
        {id: 2, message: 'What do you do', likesCount: 34},
        {id: 3, message: 'What is your name', likesCount: 23},
        {id: 4, message: 'All good', likesCount: 45},
        {id: 5, message: 'Ogogo', likesCount: 43},
    ],
    profile: null,
    status: 'none'
}
const profileReducer = (state = initialStore, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: Date.now(), message: action.sendPost.textPost, likesCount: 0}],
            }
        case SET_PROFILE_USER:
            return {
                ...state, profile: action.profile
            }
        case GET_STATUS:
            return {
                ...state, status: action.status
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}
export const setUserProfile = (profile) => ({type: SET_PROFILE_USER, profile});
export const getStatus = (status) => ({type: GET_STATUS, status});
export const setStatus = (status) => ({type: SET_STATUS, status});

export default profileReducer;