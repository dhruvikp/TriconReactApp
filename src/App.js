import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Expenses/ExpenseItem';
import Expenses from './Expenses/Expenses';
import NewExpense from './Expenses/NewExpense';
import { useEffect, useState } from 'react';
import ExpenseForm from './Expenses/ExpenseForm';
import { ExpenseContext } from './Expenses/expense-context';
import ExpenseContextProvider from './Expenses/expense-context';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { sendExpenseData } from './Store';

const App = () => {

  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(sendExpenseData(items))
    },
    [items, dispatch]
  );

  return (
    <ExpenseContextProvider >
      <div>
        <NewExpense>
          <ExpenseForm />
        </NewExpense>
        <Expenses />
      </div>
    </ExpenseContextProvider>
  );
}
export default App;
