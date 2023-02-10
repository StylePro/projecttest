import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./state/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state)=> {
    root.render(<React.StrictMode>
        <BrowserRouter>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updatePostText={store.updatePostText.bind(store)}
                 sendMessage={store.sendMessage.bind(store)}
                 updateMessageBody={store.updateMessageBody.bind(store)}/>
        </BrowserRouter>
    </React.StrictMode>);
}

rerenderEntireTree(store.getState());
store.subscriber(rerenderEntireTree);
