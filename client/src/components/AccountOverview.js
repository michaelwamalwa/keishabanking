import React, { useEffect, useState } from 'react';
import './AccountOverview.css';

const AccountSummary = () => {
  const [accounts, setAccounts] = useState([]);
  const [sortOption, setSortOption] = useState('balance');
  const [filterOption, setFilterOption] = useState('all');
  const [newAccount, setNewAccount] = useState({
    id: '',
    type: '',
    balance: '',
    accountNumber: '',
    rewardsPoints: '',
  });

  useEffect(() => {
    // Simulating an asynchronous API call to fetch account data
    fetchAccounts()
      .then((data) => {
        setAccounts(data);
      })
      .catch((error) => {
        console.error('Error fetching accounts:', error);
      });
  }, []);

  const fetchAccounts = () => {
    // Simulating an asynchronous API call
    return new Promise((resolve, reject) => {
      // Dummy data for illustration purposes
      const dummyAccounts = [
        { id: 1, type: 'Savings', balance: 5000, accountNumber: '1234567890', rewardsPoints: 100 },
        { id: 2, type: 'Checking', balance: 2500, accountNumber: '0987654321', rewardsPoints: 50 },
        // Add more accounts as needed
      ];

      // Simulating API delay
      setTimeout(() => {
        resolve(dummyAccounts);
      }, 1000);
    });
  };

  const accountTypes = {
    Savings: { icon: 'piggy-bank', color: 'green' },
    Checking: { icon: 'wallet', color: 'blue' },
    // Add more account types and their corresponding icons and colors
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleAddAccount = () => {
    // Generate a unique ID for the new account
    const newAccountId = accounts.length + 1;

    // Create a new dummy account
    const newAccountData = {
      id: newAccountId,
      ...newAccount,
    };

    // Update the accounts state with the new account
    setAccounts([...accounts, newAccountData]);

    // Clear the new account form inputs
    setNewAccount({
      id: '',
      type: '',
      balance: '',
      accountNumber: '',
      rewardsPoints: '',
    });
  };

  const handleDeleteAccount = (accountId) => {
    // Remove the account with the specified ID from the accounts state
    const updatedAccounts = accounts.filter((account) => account.id !== accountId);
    setAccounts(updatedAccounts);
  };

  const sortedAccounts = accounts.sort((a, b) => {
    if (sortOption === 'balance') {
      return b.balance - a.balance;
    } else if (sortOption === 'type') {
      return a.type.localeCompare(b.type);
    } else {
      return a.id - b.id;
    }
  });

  return (
    <div className="account-summary">
      <h2>Account Summary</h2>
      <div className="options">
        <label htmlFor="sortOption">Sort By:</label>
        <select id="sortOption" value={sortOption} onChange={handleSortOptionChange}>
          <option value="balance">Balance</option>
          <option value="type">Account Type</option>
          <option value="id">Account ID</option>
        </select>

        <label htmlFor="filterOption">Filter By:</label>
        <select id="filterOption" value={filterOption} onChange={handleFilterOptionChange}>
          <option value="all">All Accounts</option>
          <option value="Savings">Savings</option>
          <option value="Checking">Checking</option>
        </select>
      </div>
      <div className="account-cards">
        {sortedAccounts.map((account) => (
          <div className={`account-card ${accountTypes[account.type].color}`} key={account.id}>
            <div className="account-type">
              <i className={`fas fa-${accountTypes[account.type].icon}`} /> {account.type}
            </div>
            <div className="account-balance">${account.balance}</div>
            <div className="account-number">Account Number: {account.accountNumber}</div>
            <div className="rewards-points">Rewards Points: {account.rewardsPoints}</div>
            {/* Additional details and dynamic rendering */}
            <button onClick={() => handleDeleteAccount(account.id)}>Delete Account</button>
          </div>
        ))}
      </div>
      <div className="add-account-form">
        <h3>Add Account</h3>
        <form>
          <div>
            <label htmlFor="accountId">Account ID:</label>
            <input
              type="text"
              id="accountId"
              value={newAccount.id}
              onChange={(e) => setNewAccount({ ...newAccount, id: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="accountType">Account Type:</label>
            <input
              type="text"
              id="accountType"
              value={newAccount.type}
              onChange={(e) => setNewAccount({ ...newAccount, type: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="accountBalance">Account Balance:</label>
            <input
              type="text"
              id="accountBalance"
              value={newAccount.balance}
              onChange={(e) => setNewAccount({ ...newAccount, balance: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="text"
              id="accountNumber"
              value={newAccount.accountNumber}
              onChange={(e) => setNewAccount({ ...newAccount, accountNumber: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="rewardsPoints">Rewards Points:</label>
            <input
              type="text"
              id="rewardsPoints"
              value={newAccount.rewardsPoints}
              onChange={(e) => setNewAccount({ ...newAccount, rewardsPoints: e.target.value })}
            />
          </div>
          <button type="button" onClick={handleAddAccount}>Add Account</button>
        </form>
      </div>
    </div>
  );
};

export default AccountSummary;
