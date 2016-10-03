/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

// Routes
import Routes from './common/components/Routes';
import {loadCategories} from './actions/categoryActions';
// Base styling
import './common/base.css';
import "./common/styles/app.less";


// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';
const store = configureStore();
store.dispatch(loadCategories());
// Render the router
ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            {Routes}
        </Router>
    </Provider>
), document.getElementById(DOM_APP_EL_ID));

