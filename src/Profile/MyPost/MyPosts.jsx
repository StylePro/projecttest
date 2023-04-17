import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post/Post";


const MyPosts = (props) => {
    const postElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
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
                          value={props.profilePage.newPostText}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
