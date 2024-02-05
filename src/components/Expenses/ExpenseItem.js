import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle(newTitle);
  // };
  // const [newTitle, setnewTitle] = useState("");
  // const changeHandler = (e) => {
  //   setnewTitle(e.target.value);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h1>{title}</h1> */}
        <h1>{props.title}</h1>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
