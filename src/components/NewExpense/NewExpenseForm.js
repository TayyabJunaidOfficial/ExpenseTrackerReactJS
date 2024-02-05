import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      date: new Date(enteredDate),
      title: enteredTitle,
      amount: enteredAmount,
    };
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);

    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            placeholder="Enter Amount"
            onChange={amountChangeHandler}
            value={enteredAmount}
            min="0.01"
            step="0.01"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
