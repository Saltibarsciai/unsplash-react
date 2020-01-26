import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {createStore} from "redux";
import allReducers from './store/reducers'
import {Provider} from 'react-redux'
import './global-styles/index.scss';

const store = createStore(
    allReducers
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

