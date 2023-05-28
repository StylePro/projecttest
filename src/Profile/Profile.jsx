import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPost/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.postInfo}>
            <div>
                <ProfileInfo profile = {props.profile} status={props.status}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}
export default Profile;