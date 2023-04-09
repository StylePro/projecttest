import React from "react";
import axios from "axios";
import s from './Users.module.css'
import userPhoto from '../assets/images/UserPhoto.jpeg'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setTotalUsersCount(responce.data.totalCount)})
    }
    onPageChanged = (pageNumber)=> {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)})

    }
    render() {
        let totalPages = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={(e)=> {this.onPageChanged(p)}} className={this.props.currentPage === p && s.selectedPage}> {p} </span>
                    })}

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>{u.name}</div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    </div>)
                }
            </div>
        )
    }

}

export default Users;