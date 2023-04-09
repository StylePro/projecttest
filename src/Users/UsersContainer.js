import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount
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
        },
        setCurrentPage: (pageNumber)=> {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUserCount)=> {
            dispatch(setTotalUsersCountAC(totalUserCount))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
