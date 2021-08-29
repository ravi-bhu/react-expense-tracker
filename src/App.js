import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 1, title: 'Apple', date: new Date(2021, 7, 10), amount: '9.22' },
  { id: 2, title: 'Fuel', date: new Date(2021, 5, 13), amount: '20.00' },
  { id: 3, title: 'Recharge', date: new Date(2021, 5, 10), amount: '1.99' },
  { id: 4, title: 'Movie', date: new Date(2021, 1, 1), amount: '5.49' },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
