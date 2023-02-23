import React from 'react';
import s from './Profile.module.css'
import Post from "./Post/Post";
import MyPostsContainer from "./MyPost/MyPostsContainer";

const Profile = (props) => {
    let state = props.store.getState()
    const postElements = state.profilePage.profile.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postInfo}>
            <div className={s.profile}>
                <img
                    src="https://w-dog.ru/wallpapers/9/17/322057789001671/zakat-nebo-solnce-luchi-oblaka-tuchi-pole-kolosya-zelenye-trava.jpg"/>
            </div>
            <div>
                <MyPostsContainer store={props.store}/>
            </div>
            <div className={s.textPost}>
                {postElements}
            </div>
        </div>
    )
}

export default Profile;