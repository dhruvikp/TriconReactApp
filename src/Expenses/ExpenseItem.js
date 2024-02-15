import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
    //let title = props.title;
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log('clicked..');
        setTitle('Changed..!');
    }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className="expense-item_description">
                    <h2>{title}</h2>
                    <div className="expense-item_price">${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}
export default ExpenseItem;