import React from "react";

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>{u.fullName}</div>
                        <div>
                            {u.followed
                                ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;