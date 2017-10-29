import {combineReducers, createStore} from 'redux';

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: 10000,
    note: 'Rent for apartment',
    createdAt: -21000
}));
const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee',
    amount: 30000,
    note: 'Starbucks',
    createdAt: -100000
}));



const demoState = {
    expenses: [{
        id: 'qwerty',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sort: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
