
import React from "react";
import "./NewExpenses.css";
import NewExp from "./NewExpe";
const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpenses(expenseData);
  };

  return (
    <div className="new-expense">
     <NewExp onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
  
};
export default NewExpenses;
