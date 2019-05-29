import React from "react"
import ReactDom from "react-dom"
import {createStore} from "redux";
import {Provider} from "react-redux";

import "./style.scss"
import allReducers from "./reducers";
import App from "./containers/App"

const store = createStore(allReducers);

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("root")
);