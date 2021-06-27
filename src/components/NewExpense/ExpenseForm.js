import React from 'react';
import useState from 'react-usestateref';
import styles from './ExpenseForm.module.css';


const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle,enteredTitleRef] = useState('');
    const [enteredAmount, setEnteredAmount,enteredAmountRef] = useState('');
    const [enteredDate, setEnteredDate,enteredDateRef] = useState('');

    const [isTitleValid, setIsTitleValid, isTitleValidRef] = useState(true);
    const [isAmountValid, setIsAmountValid, isAmountValidRef] = useState(true);
    const [isDateValid, setIsDateValid, isDateValidRef] = useState(true);

    const titleChangeHandler = (event)=> {
        setEnteredTitle(event.target.value);
        if(enteredTitleRef.current.trim().length > 0){
            setIsTitleValid(true);
        }
    };

    const amountChangeHandler = (event)=> {
        setEnteredAmount(event.target.value);
        if(enteredAmountRef.current.trim().length > 0){
            setIsAmountValid(true);
        }
    };

    const dateChangeHandler = (event)=> {
        setEnteredDate(event.target.value);
        if(enteredDateRef.current.trim().length > 0){
            setIsDateValid(true);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredTitle.trim().length ===0){
            setIsTitleValid(false);
        }

        if(enteredAmount.trim().length === 0){
            setIsAmountValid(false);
        }

        if(enteredDate.trim().length ===0){
            setIsDateValid(false);
        }

        if(isTitleValidRef.current && isAmountValidRef.current && isDateValidRef.current){
            const expenseData = {
                title : enteredTitle,
                amount: +enteredAmount,
                date: new Date(enteredDate)
            };
            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        }else{
            return;
        }
    };

return (
    <form onSubmit = {submitHandler}>
        <div className = {styles['new-expense__controls']}>
            <div className = {`${styles['new-expense__control']} ${!isTitleValid && styles.invalid}`}>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className = {`${styles['new-expense__control']} ${!isAmountValid && styles.invalid}`}>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className = {`${styles['new-expense__control']} ${!isDateValid && styles.invalid}`}>
                <label>Date</label>
                <input type='date' min='2019-01-01' max = '2022-12-31' value={enteredDate} onChange = {dateChangeHandler}></input>
            </div>
        </div>
        <div>
            <button type='button' onClick = {props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;