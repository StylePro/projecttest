import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/state";
import MyPosts from "./MyPosts";
import StoreContext from "../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                const updateNewPostText = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (<MyPosts
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    state={state.profilePage}

                />)
            }
            }
        </StoreContext.Consumer>)
}

export default MyPostsContainer;
