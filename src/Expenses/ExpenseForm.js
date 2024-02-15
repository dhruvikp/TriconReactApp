import { useState } from 'react';
import './ExpenseForm.css'

import { useContext } from 'react';
import { ExpenseContext } from './expense-context';
import { useDispatch } from 'react-redux';

const ExpenseForm = (props) => {

   // const { onSaveExpenseData } = useContext(ExpenseContext);
   const dispatch = useDispatch();

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        //console.log(expenseData);
        // props.onSaveExpenseData(expenseData);
        //onSaveExpenseData(expenseData);
        dispatch({type:"ADD_EXPENSE", payload: expenseData});

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>


                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-12-31" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>

            <div className="new-expense__controls">
                <button type="submit" > Add Expense </button>
            </div>
        </form>
    );
}

export default ExpenseForm;