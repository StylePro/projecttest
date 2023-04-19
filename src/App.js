import './App.css';
import Navbar from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderComponent from "./Header/HeaderComponent";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderComponent/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path = '/profile/:userId?' element ={<ProfileContainer />} />
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}


export default App;
