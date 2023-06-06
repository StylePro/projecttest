import React, {useEffect} from 'react';
import {connect, useSelector} from "react-redux";
import Profile from "./Profile";
import {Navigate, useParams} from "react-router-dom";
import {getStatus, setUserProfile} from "../redux/profile-reducer";
import {getProfile} from "../components/api/api";
import {withAuthRedirect} from "../components/hoc/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2;
    }
    useEffect(() => {
        getProfile.userProfile(userId).then(response => {
            props.setUserProfile(response.data);
        });
        getProfile.getUserStatus(userId).then(responce => {
            props.getStatus(responce.data)
        })
    }, [userId]);

    const isAuth = useSelector(state => state.auth.isAuth)
    if (!isAuth) {
        return <Navigate to='/login'/>
    }
    return (
        <div>
            <Profile profile={props.profile} status={props.status}/>
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {setUserProfile, getStatus}),
    withAuthRedirect
)
(ProfileContainer)

