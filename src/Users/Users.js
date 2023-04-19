import React from "react";
import s from "./Users.module.css";
import userPhoto from "../assets/images/UserPhoto.jpeg";

let Users = (props)=> {
    let totalPages = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i); }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e)=> {props.onPageChanged(p)}} className={props.currentPage === p && s.selectedPage}> {p} </span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>{u.name}</div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;