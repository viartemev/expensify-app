import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Rent',
    amount: 1000,
    note: 'Rent for apartment',
    createdAt: 120
}));
store.dispatch(addExpense({
    description: 'Coffee',
    amount: 300,
    note: 'Starbucks',
    createdAt: 400
}));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));