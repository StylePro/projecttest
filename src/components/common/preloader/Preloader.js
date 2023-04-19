import React from "react";
import preloader from "../../../assets/images/preloader.gif";
import s from "../../../Users/Users.module.css";

let Preloader = () => {
    return (
        <div style = {{backgroundColor: 'white'}}> <img src={preloader} className={s.preloader}/></div>
    )

}

export default Preloader;