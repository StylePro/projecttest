import React from "react";
import s from './MyPosts.module.css'


const MyPosts =(props)=> {
    const addPost = ()=> {
        props.addPost();
    }
    const updateNewPostText =(e)=> {
        let text = e.target.value;
        props.updatePostText(text)
    }
    return (
        <div className={s.myPosts}>
            <div>
                ava+content
            </div>
            <div>
                <textarea onChange={updateNewPostText} placeholder='Inter your post' value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
        </div>
    )
}

export default MyPosts;
