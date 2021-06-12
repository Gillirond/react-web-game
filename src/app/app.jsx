import ReactDOM from 'react-dom';
import React from 'react';

import {Provider} from "react-redux";
import store from "./store";

import AppView from './views/AppView';
import './app.scss';



ReactDOM.render(
    <Provider store={store}>
        <AppView/>
    </Provider>,
    document.getElementById("root")
)