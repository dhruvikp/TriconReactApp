import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit'

const DUMP_EXPENSES = [
    { id: 'e1', title: 'News Paper', amount: 94.12, date: new Date(2020, 7, 14) },
    { id: 'e2', title: 'New TV', amount: 799.12, date: new Date(2021, 7, 14) },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 7, 28) },
    { id: 'e4', title: 'New Desk(Wooden)', amount: 450, date: new Date(2022, 5, 12) },
];

const initialState = { items: DUMP_EXPENSES }

const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialState,
    reducers: {
        addExpense(state, action) {
            const expenseData = {
                ...action.payload,
                id: Math.random().toString()
            };
            state.items.push(expenseData);
        },

        removeExpense(state, action) { }
    }
});

export const sendExpenseData = (expenseData) => {

    return async (dispatch) => {

        const sendRequest = async () => {
            const response = await  fetch('https://triconinfotech-2d0d3-default-rtdb.firebaseio.com/expense.json', {
                method: 'PUT',
                body: JSON.stringify(expenseData),
              });

              if(!response.ok) {
                throw new Error("Sending expense data failed!");
              }
        };

        try {
            await sendRequest();
        }catch (error) {
            console.log(error);
        }
    };
}


const expenseStore = configureStore({
    reducer: expenseSlice.reducer
});

export default expenseStore;
export const expenseActions = expenseSlice.actions;