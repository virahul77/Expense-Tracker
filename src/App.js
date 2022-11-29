import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
let storedExp = localStorage.getItem('expenseTracker');
if(storedExp) {
  storedExp = JSON.parse(storedExp);
  storedExp.forEach(exp => exp.date = new Date(exp.date));
}
else storedExp = DUMMY_EXPENSES;
const App = () => {

  const [expenses, setExpenses] = useState(storedExp);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const removeHandler = (id)=> {
    setExpenses(expenses.filter(exp => exp.id !== id));
  }

  localStorage.setItem('expenseTracker',JSON.stringify(expenses));

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} removeItem = {removeHandler}/>
    </div>
  );
};

export default App;
