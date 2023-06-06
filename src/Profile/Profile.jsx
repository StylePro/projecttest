import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPost/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.postInfo}>
            <div>
                <ProfileInfo profile = {props.profile} status={props.status}/>
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile;