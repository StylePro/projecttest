import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,  /*Размер страницы*/
        totalUsersCount: state.usersPage.totalUsersCount /*Всего страниц*/
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=> {
            dispatch(followAC(userId))
        },
        unfollow: (userId)=> {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
