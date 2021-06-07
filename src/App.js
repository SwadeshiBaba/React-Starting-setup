
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

    const expenses = [
        { id:'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
        { id:'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        { id:'e3', title: 'TV', amount: 300.64, date: new Date(2021, 1, 25)},
        { id:'e4', title: 'New Desk Wooden', amount: 500.67, date: new Date(2021, 4, 30)}
    ];
    const addExpenseHandler = expense => {
        console.log('In App.js');
        console.log(expense);

    };

  return (

        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses expenses = {expenses}></Expenses>
        </div>
  );
}

export default App;
