import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SortTransactions from './components/SortTransactions';
import DeleteTransaction from './components/DeleteTransaction';
import TransactionList from "./components/TransactionList";
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/transactions`)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar />
      <SortTransactions />
      <DeleteTransaction />
      <TransactionList />
      <TransactionForm />
    </div>
  );
}

export default App;
