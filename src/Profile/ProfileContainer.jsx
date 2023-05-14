import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import {setUserProfile} from "../redux/profile-reducer";
import {getProfile} from "../components/api/api";



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

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile
})


export default connect (mapStateToProps, {setUserProfile})(ProfileContainer)

