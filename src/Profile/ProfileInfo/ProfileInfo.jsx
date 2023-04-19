import React from 'react';
import Preloader from "../../components/common/preloader/Preloader";
import s from '../Profile.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.profile}>
                <img src="https://w-dog.ru/wallpapers/9/17/322057789001671/zakat-nebo-solnce-luchi-oblaka-tuchi-pole-kolosya-zelenye-trava.jpg"/>
            </div>
            <img src={props.profile.photos.large}/>
        </div>
    )
}
export default ProfileInfo;