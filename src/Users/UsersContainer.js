import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow} from "../redux/users-reducer";
import Users from "./Users";
import Preloader from "../components/common/preloader/Preloader";
import {usersApi} from "../components/api/api";


class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersApi.getUsers().then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setIsFetching(false)
        })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        usersApi.getUsers2().then(data => {
            this.props.setUsers(data.items)
            this.props.setIsFetching(false)
        })

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersApiComponent)


