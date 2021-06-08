import React, { useState } from 'react';
import './ExpenseItem.css'
import './Expenses.css'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear)=>{
        console.log('I am in expenses.js..!');
        console.log(selectedYear);
        setFilteredYear(selectedYear);

    };

    const filteredExpenses = props.items.filter(expense => { return expense.date.getFullYear().toString() === filteredYear});

    return(
    <li>
        <Card className='expense'>
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpensesList items = {filteredExpenses}/>
          {/*<ExpenseItem title = {props.items[0].title} amount = {props.items[0].amount} date = {props.items[0].date}></ExpenseItem>
          <ExpenseItem title = {props.items[1].title} amount = {props.items[1].amount} date = {props.items[1].date}></ExpenseItem>
          <ExpenseItem title = {props.items[2].title} amount = {props.items[2].amount} date = {props.items[2].date}></ExpenseItem>
          <ExpenseItem title = {props.items[3].title} amount = {props.items[3].amount} date = {props.items[3].date}></ExpenseItem>*/}
        </Card>
    </li>
    );
}

export default Expenses;