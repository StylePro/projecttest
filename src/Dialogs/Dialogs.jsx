import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map( d => <DialogItem id = {d.id} name = {d.name}/>)
    const messagesElements = props.state.message.map( m => <Message message = {m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messageItem}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;