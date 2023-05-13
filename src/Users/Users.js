import React from "react";
import s from "./Users.module.css";
import userPhoto from "../assets/images/UserPhoto.jpeg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let totalPages = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i <= 50) {
            pages.push(i);
        }
    }
    return (
        <div>
            all users: {props.totalUserCount}
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && s.selectedPage}> {p} </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={`/profile/${u.id}`}>
                            <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        </NavLink>
                        <div>{u.name}</div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => { props.unfollow(u.id)
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress
                                    .some(id => id === u.id)}
                                          onClick={() => { props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;