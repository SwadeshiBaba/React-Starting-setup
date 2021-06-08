
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [{ id:'e1', title: 'Toilet Papier', amount: 94.12, date: new Date(2020, 7, 14)},
                        { id:'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
                        { id:'e3', title: 'TV', amount: 300.64, date: new Date(2021, 1, 25)},
                        { id:'e4', title: 'New Desk Wooden', amount: 500.67, date: new Date(2021, 4, 30)}
                      ];
const App = () => {
        const [expenses,setExpenses]  = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

  return (

        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses items = {expenses}></Expenses>
        </div>
  );
}

export default App;
