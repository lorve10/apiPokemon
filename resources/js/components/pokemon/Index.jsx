import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Switch,
} from "react-router-dom";
///reducer
import { store } from "../reducer/store";
import { Provider } from "react-redux";
///
import Card from "./Card";
const Index = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/">
                        {" "}
                        <Card />{" "}
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
};

export default Index;
if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}
