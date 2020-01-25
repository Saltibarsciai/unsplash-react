import React from 'react';
import ReactDOM from 'react-dom';
import './global-styles/index.scss';
import App from './containers/App/App';
import {createStore, applyMiddleware} from "redux";
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import allReducers from './store/reducers'
import {Provider} from 'react-redux'

const store = createStore(
    allReducers,
    applyMiddleware(loadingBarMiddleware())
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

