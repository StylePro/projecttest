import React from 'react';
import Preloader from "../../components/common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {useSelector} from "react-redux";



const ProfileInfo = (props) => {
    const profile = useSelector(state => state.profilePage.profile)
    const status = useSelector(state => state.profilePage.status)

    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            {profile.photos.large
            ? <img src={profile.photos.large}/>
            : "NO PHOTO"}

            <ProfileStatus status={status}/>
        </div>
    )
}
export default ProfileInfo;