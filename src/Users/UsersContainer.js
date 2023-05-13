import React from "react";
import {connect} from "react-redux";
import {
    followSuccess, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess
} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../components/common/preloader/Preloader";


class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollowSuccess={this.props.unfollowSuccess}
                   followSuccess={this.props.followSuccess}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,

    }
}

export default connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersApiComponent)


