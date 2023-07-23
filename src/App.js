import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SortTransactions from './components/SortTransactions';
import DeleteTransaction from './components/DeleteTransaction';
import TransactionList from "./components/TransactionList";
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/transactions`)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setIsFetching(false);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredResults = transactions.filter(transaction =>
      transaction.description.includes(searchTerm)
    );
    setFilteredTransactions(filteredResults);
  }

  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleFormInputChange = (newFormInput) => {
    setTransactions([...transactions, newFormInput])
  }

  const handleDeleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <h2>Flatiron Bank</h2>
      <SearchBar onSearch={handleSearch} onSearchTermChange={handleSearchTermChange} />
      <SortTransactions />
      {/* <DeleteTransaction /> */}
      <div className='transaction-details'>
        <TransactionList transactions={filteredTransactions.length === 0 && searchTerm === '' ? transactions : filteredTransactions} isFetching={isFetching} onDeleteTransaction={handleDeleteTransaction} />
        <TransactionForm transactions={transactions} onFormInputChange={handleFormInputChange} />
      </div>
    </div>
  );
}

export default App;
