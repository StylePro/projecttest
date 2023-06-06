import React from "react";
import s from './MyPosts.module.css'
import Post from "../Post/Post";
import {useSelector} from "react-redux";
import PostForm from "./PostForm";


const MyPosts = () => {
    const posts = useSelector(store=> store.profilePage.posts)
    const postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    return (
        <div className={s.myPosts}>
           <div>
               <PostForm/>
           </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;
