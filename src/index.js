import React from "react"
import ReactDom from "react-dom"
import {createStore} from "redux";
import {Provider} from "react-redux";

import "./style.scss"

import allReducers from "./reducers";
import App from "./containers/App"

require("bootstrap/dist/js/bootstrap");
require("bootstrap/dist/css/bootstrap.css");
require("../public/scripts/scripts")
require("../public/scripts/jquery")

import $ from 'jquery';

const store = createStore(allReducers);
window.jQuery = $;
window.$ = $;

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("root")
);