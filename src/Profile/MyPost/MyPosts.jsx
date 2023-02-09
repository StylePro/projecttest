import React from "react";
import s from './MyPosts.module.css'
const MyPosts =(props)=> {
    return (
        <div className={s.myPosts}>
            <div>
                ava+content
            </div>
            <div>
                <textarea placeholder='Inter your post' value={props.newPostText}></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
    )
}

export default MyPosts;
