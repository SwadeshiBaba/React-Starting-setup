import React, { useState } from 'react';
import './ExpenseItem.css'
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear)=>{
        console.log('I am in expenses.js..!');
        console.log(selectedYear);
        setFilteredYear(selectedYear);

    };

    return(
    <div>
        <Card className='expense'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpenseItem title = {props.expenses[0].title} amount = {props.expenses[0].amount} date = {props.expenses[0].date}></ExpenseItem>
          <ExpenseItem title = {props.expenses[1].title} amount = {props.expenses[1].amount} date = {props.expenses[1].date}></ExpenseItem>
          <ExpenseItem title = {props.expenses[2].title} amount = {props.expenses[2].amount} date = {props.expenses[2].date}></ExpenseItem>
          <ExpenseItem title = {props.expenses[3].title} amount = {props.expenses[3].amount} date = {props.expenses[3].date}></ExpenseItem>
        </Card>
    </div>
    );
}

export default Expenses;