import React from "react"
import ReactDom from "react-dom"
import {Provider} from "react-redux";

import "./style.scss"
import "../public/styles/fm.revealator.jquery.css"

import allReducers from "./reducers";
import App from "./containers/App"

import configureStore from './store/configureStore'

require("bootstrap/dist/js/bootstrap");
require("bootstrap/dist/css/bootstrap.css");
require("../public/scripts/scripts")
require("../public/scripts/jquery")

import $ from 'jquery';

const store = configureStore()

window.jQuery = $;
window.$ = $;

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("root")
);