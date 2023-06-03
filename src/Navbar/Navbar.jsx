import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div>
                <NavLink to  = '/profile'> Profile </NavLink>
            </div>
            <div>
                <NavLink to  = '/dialogs'> Messages </NavLink>
            </div>
            <div>
                <NavLink to  = '/users'> Users </NavLink>
            </div>
            <div>
                <NavLink to  = '/login'> Login </NavLink>
            </div>
        </div>

    )
}

export default Navbar;