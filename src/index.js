import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles/index.scss';
import App from './containers/App/App';
import fetch from 'node-fetch';
import {createStore} from "redux";
import allReducers from './store/reducers'
import {Provider} from 'react-redux'

global.fetch = fetch;
const store = createStore(
    allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

