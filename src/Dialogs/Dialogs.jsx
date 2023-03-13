import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)
    const messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} key={m.id}/>)

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onUpdateMessageText = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
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
                    <textarea onChange={onUpdateMessageText} placeholder='Enter your message '
                              value={props.dialogPage.newMessageBody}/>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;