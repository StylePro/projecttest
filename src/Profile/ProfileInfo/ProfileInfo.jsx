import React from 'react';
import Preloader from "../../components/common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
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