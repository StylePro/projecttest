import React from "react";
import s from './MyPosts.module.css'


const MyPosts = (props) => {
    console.log(props)
    const onAddPost = () => {
        props.addPost();
    }
    const updateNewPostText = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
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
                <button onClick={onAddPost}>Add Post</button>
            </div>
        </div>
    )
}

export default MyPosts;
