import './ExpenseItem.css'
import './Expense.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
const Expense = (props) => {

    return(
    <div>
        <h2> Let's get Started !!! </h2>
        <Card className='expense'>
          <ExpenseItem title = {props.expenses[0].title} amount = {props.expenses[0].amount} date = {props.expenses[0].date}></ExpenseItem>
          <ExpenseItem title = {props.expenses[1].title} amount = {props.expenses[1].amount} date = {props.expenses[1].date}></ExpenseItem>
          <ExpenseItem title = {props.expenses[2].title} amount = {props.expenses[2].amount} date = {props.expenses[2].date}></ExpenseItem>
          <ExpenseItem title = {props.expenses[3].title} amount = {props.expenses[3].amount} date = {props.expenses[3].date}></ExpenseItem>
        </Card>
    </div>
    );
}

export default Expense;