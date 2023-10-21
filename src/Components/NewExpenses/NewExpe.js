import { useState } from "react";
import React from "react";
import "./NewExp.css";
const NewExp = (props) => {
  const [entredTitle, setEntredTitle] = useState("");
  const [entredAmount, setEntredAmount] = useState("");
  const [entreDate, setEntredDate] = useState("");
  const [form, setForm] = useState(false);

  const titleHandle = (event) => {
    setEntredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEntredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEntredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entredTitle,
      amount: entredAmount,
      date: new Date(entreDate),
    };
    props.onSaveExpenseData(expenseData);
    setEntredTitle("");
    setEntredAmount("");
    setEntredDate("");
  };
 

  const newExpenseHandler = () => {
    setForm(true);
  };
  const cancelHandler = () => {
    setForm(false);
  };

  let content;

  if (form) {
    content = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={entredTitle} onChange={titleHandle} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={entredAmount}
              onChange={amountHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={entreDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__action">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }  else {
    content = <button onClick={newExpenseHandler}>Add New Expense</button>;
  }

  return <div>{content}</div>;
};
export default NewExp;
