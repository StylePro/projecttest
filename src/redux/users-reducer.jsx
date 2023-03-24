const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


let initialState = {
    users: [
        {
            id: 1,
            logoUrl: 'https://ru-static.z-dn.net/files/d49/4e14a49654a619ae0b35890facd537ec.jpeg',
            fullName: 'Oleg',
            status: 'I love you',
            followed: true,
            location: {country: 'Russia', city: 'Voronezh'}
        },
        {
            id: 2,
            logoUrl: 'https://ru-static.z-dn.net/files/d49/4e14a49654a619ae0b35890facd537ec.jpeg',
            fullName: 'Olga',
            status: 'I love you2',
            followed: false,
            location: {country: 'Russia', city: 'Belgorod'}
        },
        {
            id: 3,
            logoUrl: 'https://ru-static.z-dn.net/files/d49/4e14a49654a619ae0b35890facd537ec.jpeg',
            fullName: 'Elena',
            status: 'I love you3',
            followed: true,
            location: {country: 'Russia', city: 'Irkutsk'}
        }
    ]
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u=> {
                    if(u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
               ...state,
               users: state.users.map(u=> {
                   if (u.id === action.userId) {
                       return {
                           ...u, followed: false
                       }
                   }
                   return u;
               })
            }
        default:
            return state
    }
}


export const followAC = (userId)=> ({type: FOLLOW, userId});
export const unfollowAC = (userId)=> ({type: UNFOLLOW, userId});


export default usersReducer;