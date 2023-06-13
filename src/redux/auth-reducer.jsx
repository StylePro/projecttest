import {authApi} from "../components/api/api";

const SET_USER_DATA = 'SET_USER_DATA'



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}});

export const getAuthUserData = ()=> {
    return (dispatch) => {
        authApi.me().then(responce => {
            if (responce.data.resultCode === 0) {
                let {id, login, email} = responce.data.data;
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
    }
}

export const LoginIn = (email, password, rememberMe)=> {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then(responce => {
            if (responce.data.resultCode === 0) {
               dispatch(getAuthUserData())
            }
        })
    }
}

export const LogOut = ()=> {
    return (dispatch) => {
        authApi.logOut().then(responce => {
            if (responce.data.resultCode === 0) {
               dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer;