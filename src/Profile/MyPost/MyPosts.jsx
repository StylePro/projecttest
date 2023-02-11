import React from "react";
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../state/state";


const MyPosts = (props) => {
    const addPost = () => {
        debugger;
        props.dispatch(addPostActionCreator());
    }
    const updateNewPostText = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (
        <div className={s.myPosts}>
            <div>
                ava+content
            </div>
            <div>
                <textarea onChange={updateNewPostText} placeholder='Enter your post'
                          value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
    )
}

export default MyPosts;
