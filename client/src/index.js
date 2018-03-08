import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import updateUser from './redux/reducers/user_reducers';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

let store = createStore(updateUser);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Routes store={store} />
        </BrowserRouter>
    </Provider>
),
    document.getElementById('root'));
