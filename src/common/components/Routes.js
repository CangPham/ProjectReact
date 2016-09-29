import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import DashboardLayout from './DashboardLayout';
import LoginPage from '../../pages/login/LoginPage';
import HomePage from '../../pages/home/HomePage';


export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={LoginPage}/>
            <Route name="dashboard" path="/dashboard" component={DashboardLayout}>
                <Route name="home" path="/home" component={HomePage}/>
            </Route>
            <Route name="login" path="login" component={LoginPage}/>
        </Route>
    </Router>
);
