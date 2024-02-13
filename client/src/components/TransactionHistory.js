import React, { useState } from 'react';
import './TransactionHistory.css';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2023-07-01', description: 'Grocery Shopping', amount: '$50.00', type: 'Expense' },
    { id: 2, date: '2023-06-28', description: 'Salary Deposit', amount: '$1,000.00', type: 'Income' },
    { id: 3, date: '2023-06-27', description: 'Bill Payment', amount: '$80.00', type: 'Expense' },
    // Add more initial transactions as needed
  ]);

  const itemsPerPage = 10; // Number of transactions per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  // State variable to track expanded transaction details
  const [expandedTransactionId, setExpandedTransactionId] = useState(null);

  // Function to handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setExpandedTransactionId(null); // Reset expanded transaction details on page change
  };

  // Function to toggle display of transaction details
  const toggleTransactionDetails = (transactionId) => {
    setExpandedTransactionId((prevTransactionId) => (prevTransactionId === transactionId ? null : transactionId));
  };

  // Function to add a new transaction
  const addTransaction = (date, description, amount, type) => {
    const newTransaction = {
      id: Date.now(),
      date,
      description,
      amount,
      type,
    };
    setTransactions([...transactions, newTransaction]);
  };

  // Function to delete a transaction
  const deleteTransaction = (transactionId) => {
    setTransactions((prevTransactions) => prevTransactions.filter((transaction) => transaction.id !== transactionId));
  };

  // Get the current page's transactions
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  return (
    <div className="transaction-history-container">
      <h2>Transaction History</h2>
      <ul>
        {currentTransactions.map((transaction) => (
          <li key={transaction.id}>
            <div>Date: {transaction.date}</div>
            <div>Description: {transaction.description}</div>
            <div>Amount: {transaction.amount}</div>
            <div>Type: {transaction.type}</div>
            <button onClick={() => toggleTransactionDetails(transaction.id)}>
              {expandedTransactionId === transaction.id ? 'Hide Details' : 'View Details'}
            </button>
            {expandedTransactionId === transaction.id && (
              <div>
                Transaction Details: {transaction.id} {/* Implement your own logic to display transaction details */}
              </div>
            )}
            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      <div className="add-transaction-form">
        <h3>Add Transaction</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const date = e.target.elements.date.value;
            const description = e.target.elements.description.value;
            const amount = e.target.elements.amount.value;
            const type = e.target.elements.type.value;
            addTransaction(date, description, amount, type);
            e.target.reset();
          }}
        >
          <div>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" required />
          </div>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input type="text" id="amount" required />
          </div>
          <div>
            <label htmlFor="type">Type:</label>
            <select id="type" required>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionHistory;
