import React from 'react';
import useState from 'react-usestateref';
import styled from 'styled-components';

const FormControls = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
`;
const FormControl = styled.div`
    & label {
      font-weight: bold;
      margin-bottom: 0.5rem;
      display: block;
      color : ${props=> (props.invalid ? 'red' : 'black')};
      }

    & input {
      font: inherit;
      padding: 0.5rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 100%;
      border-color : ${props => (props.invalid ? 'red' : '#ccc')};
      background : ${props => (props.invalid ? 'pink' : '#ccc')};
    }
`;

const NewExpenseActions = styled.div`
    text-align: right;
`;
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
        <FormControls>
            <FormControl invalid={!isTitleValid}>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </FormControl>
            <FormControl invalid={!isAmountValid}>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
            </FormControl>
            <FormControl invalid={!isDateValid}>
                <label>Date</label>
                <input type='date' min='2019-01-01' max = '2022-12-31' value={enteredDate} onChange = {dateChangeHandler}></input>
            </FormControl>
        </FormControls>
        <NewExpenseActions>
            <button type='button' onClick = {props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </NewExpenseActions>
    </form>
    );
};

export default ExpenseForm;