import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LogOut} from "../redux/auth-reducer";

const Header = (props)=> {
    const dispatch = useDispatch();
    const LogOutDel =()=> {
        dispatch(LogOut())
    }
    return (
       <div className={s.header}>
           <img src = 'https://e7.pngegg.com/pngimages/660/974/png-clipart-logo-others-miscellaneous-3d-computer-graphics.png'/>
           <div className={s.loginBlock}>
               {props.isAuth
                   ? <div> {props.login} - <button onClick={LogOutDel}>Log out</button> </div>
                   : <NavLink  to={'/login'}>Login</NavLink>}
           </div>
       </div>
    )
}

export default Header;