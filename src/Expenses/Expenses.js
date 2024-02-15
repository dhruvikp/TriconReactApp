import { useState, useContext } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import { ExpenseContext } from "./expense-context";
import { useSelector } from "react-redux";

const Expenses = (props) => {

    // const expenseCtx = useContext(ExpenseContext);
    // THIS FUCNTION WILL BE EXECUTED BY REACT REDUX WHEN YOU USE useSELECTOR
    // ReactREdux will automatically sets subscription for this component.
    const items = useSelector(state => state.items);

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}
export default Expenses;