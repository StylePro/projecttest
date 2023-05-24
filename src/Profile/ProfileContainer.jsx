import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {Navigate, useParams} from "react-router-dom";
import {setUserProfile} from "../redux/profile-reducer";
import {getProfile} from "../components/api/api";
import {withAuthRedirect} from "../components/hoc/withAuthRedirect";
import {compose} from "redux";



function ProfileContainer(props) {
    let { userId } = useParams();
    if (!userId) {
        userId = 2;
    }

    useEffect(() => {
        getProfile.userProfile(userId).then(response => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    if (!props.isAuth) {return <Navigate to='/login'/>}
    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
})

export default compose(
    connect (mapStateToProps, {setUserProfile}),
    withAuthRedirect
)
(ProfileContainer)

