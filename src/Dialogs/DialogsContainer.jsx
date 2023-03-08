import React from 'react';
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../redux/state";
import Dialogs from "./Dialogs";
import StoreContext from "../StoreContext";


const DialogsContainer = () => {
    return (<StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();
                const sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                const updateMessageText = (text) => {
                    store.dispatch(updateMessageTextActionCreator(text));
                }
                return (<Dialogs sendMessage={sendMessage}
                                 updateMessageText={updateMessageText}
                                 state={state.dialogPage}/>)
            }
        }
    </StoreContext.Consumer>)
}
export default DialogsContainer;