import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import React from "react";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}


export default App;
