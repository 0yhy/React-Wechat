import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import Main from "./containers/main/main";
import Login from "./containers/login/login";
import Register from "./containers/register/register";
import {Provider} from "react-redux";
import store from "./redux/store";

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                {/* Main是默认组件，只要和前面的path没有匹配，就必然会到默认组件 */}
                <Route component={Main}></Route>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById("root"));
