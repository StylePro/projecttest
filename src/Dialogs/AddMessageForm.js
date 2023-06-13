import {useFormik} from "formik";
import {useDispatch} from "react-redux";

export const AddMessageForm = (props)=> {
    const dispatch = useDispatch()
    const sendMessage = (newMessage)=> {
        dispatch({type: 'SEND-MESSAGE', newMessage})
    }
    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            newMessage: ''
        },
        onSubmit: (values)=> {
            sendMessage(values)
        }
    })
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newMessage"></label>
            <input
                placeholder='input message'
                id='newMessage'
                type="newMessage"
                onChange={handleChange}
                value={values.newMessage}
            />
            <br/>
            <button
                disabled={!values.newMessage}
                type="submit">Send</button>
        </form>
    )
}



/*
<div>
    <div>
                    <textarea onChange={onUpdateMessageText} placeholder='Enter your message '
                              value={props.dialogPage.newMessageBody}/>
    </div>
    <div>
        <button onClick={onSendMessage}>Send message</button>
    </div>
</div>*/
