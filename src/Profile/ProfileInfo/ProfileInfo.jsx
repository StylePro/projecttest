import React from 'react';
import Preloader from "../../components/common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {useSelector} from "react-redux";



const ProfileInfo = (props) => {
    const profile = useSelector(state => state.profilePage.profile)
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {props.profile.photos.large
            ? <img src={props.profile.photos.large}/>
            : "NO PHOTO"}


            <ProfileStatus status={props.status}/>
        </div>
    )
}
export default ProfileInfo;