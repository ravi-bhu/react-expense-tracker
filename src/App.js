import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { title: 'Apple', date: new Date(2021, 7, 10), amount: '9.22' },
    { title: 'Fuel', date: new Date(2021, 5, 13), amount: '20.00' },
    { title: 'Recharge', date: new Date(2021, 5, 10), amount: '1.99' },
    { title: 'Movie', date: new Date(2021, 1, 1), amount: '5.49' },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
