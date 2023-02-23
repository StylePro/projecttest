import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return (<MyPosts
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        newPostText={state.profilePage.newPostText}
        />)
}

export default MyPostsContainer;
