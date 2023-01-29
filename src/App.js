import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import React from "react";

const App = (props) => {

    return (
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
                <Route path='/dialogs' element={<Dialogs state = {props.state.dialogPage}/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
          </div>
        </div>
)
}


export default App;
