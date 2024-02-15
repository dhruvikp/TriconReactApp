import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Expenses/ExpenseItem';
import Expenses from './Expenses/Expenses';
import NewExpense from './Expenses/NewExpense';
import { useState } from 'react';
import ExpenseForm from './Expenses/ExpenseForm';
import { ExpenseContext } from './Expenses/expense-context';
import ExpenseContextProvider from './Expenses/expense-context';


const App = () => {

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
