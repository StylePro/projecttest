import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, sendMessage, subscriber, updateMessageBody, updatePostText} from "./state/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state)=> {
    root.render(<React.StrictMode>
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updatePostText={updatePostText}
                 sendMessage={sendMessage}
                 updateMessageBody={updateMessageBody}/>
        </BrowserRouter>
    </React.StrictMode>);
}

rerenderEntireTree(state);
subscriber(rerenderEntireTree);
