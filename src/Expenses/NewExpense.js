import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = ({children}) => {
 return (
    <div className="new-expense">
        {children}
    </div>
 );   
}

export default NewExpense;