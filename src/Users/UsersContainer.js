import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setIsFetching, setTotalUsersCount, setUsers, unfollow} from "../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from '../assets/images/preloader.gif'
import s from './Users.module.css'
import Preloader from "../components/common/preloader/Preloader";


class UsersApiComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`).then(responce => {
            this.props.setIsFetching(true)
            this.props.setUsers(responce.data.items)
            this.props.setTotalUsersCount(responce.data.totalCount)
            this.props.setIsFetching(false)})

    }
    onPageChanged = (pageNumber)=> {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setIsFetching(false)})

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

export default connect (mapStateToProps, {follow,unfollow,setUsers, setCurrentPage, setTotalUsersCount, setIsFetching})(UsersApiComponent)


