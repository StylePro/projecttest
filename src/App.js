import './App.css';
import Navbar from "./Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderComponent from "./Header/HeaderComponent";
import Login from "./components/Login/Login";
import Dialogs from "./Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderComponent/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                    <Route path = '/profile/:userId?' element ={<ProfileContainer />} />
                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </div>
    )
}


export default App;
