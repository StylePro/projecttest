import React from 'react';
import Preloader from "../../components/common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status}/>
        </div>
    )
}
export default ProfileInfo;