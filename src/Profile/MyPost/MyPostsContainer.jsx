import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const updateNewPostText = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }
    return (<MyPosts addPost={addPost} updateNewPostText={updateNewPostText} newPostText={props.newPostText}/>)
}

export default MyPostsContainer;
