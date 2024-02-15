import { createContext, useReducer, useState } from 'react'

export const ExpenseContext = createContext({
    items: [],
    onSaveExpenseData: () => { },
});

function expenseReducer(state, action) {
    const updatedExpenses = [...state]

    if(action.type === 'ADD_EXPENSE') {
        const expenseData = {
            ...action.payload,
            id: Math.random().toString()
          };
        updatedExpenses.push(expenseData)
    }

    if(action.type === 'REMOVE_EXPENSE') {
        // logic to remove expense
    }
    return updatedExpenses;
}

export default function ExpenseContextProvider({ children }) {

    const DUMP_EXPENSES = [
        { id: 'e1', title: 'News Paper', amount: 94.12, date: new Date(2020, 7, 14) },
        { id: 'e2', title: 'New TV', amount: 799.12, date: new Date(2021, 7, 14) },
        { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 7, 28) },
        { id: 'e4', title: 'New Desk(Wooden)', amount: 450, date: new Date(2022, 5, 12) },
    ];

    const [expenses, dispatch] = useReducer(expenseReducer, DUMP_EXPENSES);

    //const [expenses, setExpenses] = useState(DUMP_EXPENSES);

    const addExpenseHandler = expense => {
        dispatch(
            {
                type: 'ADD_EXPENSE',
                payload: expense
            }
        );
    }

    const contextValue = {
        items: expenses,
        onSaveExpenseData: addExpenseHandler
      };


      return <ExpenseContext.Provider value={contextValue}>
            {children}
      </ExpenseContext.Provider>
}