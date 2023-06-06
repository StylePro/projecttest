import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {AddMessageForm} from "./AddMessageForm";
import {useSelector} from "react-redux";

const Dialogs = () => {
    const dialogs = useSelector((store) => store.dialogPage.dialogs)
    const messages = useSelector((store) => store.dialogPage.messages)
    const isAuth = useSelector((store) => store.auth.isAuth)
    const dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)
    const messagesElements = messages.map(m => <Message message={m.message} key={m.id}/>)
    if (!isAuth) {
        return <Navigate to='/login'/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messageItem}>
                    {messagesElements}
                    <AddMessageForm/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;