import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    date: new Date(2023, 4, 5),
    title: "School Fee",
    amount: 250,
  },
  {
    id: "e2",
    date: new Date(2023, 8, 4),
    title: "Books",
    amount: 230,
  },
  {
    id: "e3",
    date: new Date(2023, 7, 14),
    title: "Food",
    amount: 540,
  },
  {
    id: "e4",
    date: new Date(2023, 5, 5),
    title: "Rent",
    amount: 700,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
