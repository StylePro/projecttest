import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messagesElements = props.state.message.map(m => <Message message={m.message}/>)

    const sendMessage = () => {
        props.sendMessage();
    }

    const updateMessageText = (e) => {
        let text = e.target.value;
        props.updateMessageBody(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messageItem}>
                    {messagesElements}
                </div>
                <div>
                    <textarea onChange={updateMessageText} placeholder='Enter your message '
                              value={props.state.newMessageBody}/>
                </div>
                <div>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;