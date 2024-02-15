import {createStore} from 'redux';

const DUMP_EXPENSES = [
    { id: 'e1', title: 'News Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.12, date: new Date(2021, 7, 14) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 7, 28) },
    { id: 'e4', title: 'New Desk(Wooden)', amount: 450, date: new Date(2022, 5, 12) },
];

const expenseReducer = (state= {items: DUMP_EXPENSES}, action) => {
    const updatedExpenses = [...state.items]

    if(action.type === 'ADD_EXPENSE') {
        const expenseData = {
            ...action.payload,
            id: Math.random().toString()
          };
        updatedExpenses.push(expenseData)
        return {items:  updatedExpenses}
    }

    if(action.type === 'REMOVE_EXPENSE') {
        // logic to remove expense
    }
    return state;
}

const expenseStore = createStore(expenseReducer);

export default expenseStore;