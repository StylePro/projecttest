import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.postInfo}>
            <div className={s.profile}>
                <ProfileInfo/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile;