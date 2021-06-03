
import Expense from './components/Expenses/Expense';

const App = () => {

    const expenses = [
        { id:'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
        { id:'e2', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
        { id:'e3', title: 'TV', amount: 300.64, date: new Date(2021, 1, 25)},
        { id:'e4', title: 'New Desk Wooden', amount: 500.67, date: new Date(2021, 4, 30)}
    ];


  return (
        <Expense expenses = {expenses}></Expense>
  );
}

export default App;
