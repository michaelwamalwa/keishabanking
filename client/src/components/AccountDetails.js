import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AccountDetails = () => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const { accountId } = useParams();

  useEffect(() => {
    // Fetch account details from the database using an API
    fetch(`/api/accounts/${accountId}`)
      .then(response => response.json())
      .then(data => setSelectedAccount(data))
      .catch(error => {
        console.error('Error fetching account details:', error);
        setSelectedAccount(null);
      });
  }, [accountId]);

  const renderAccountDetails = () => {
    if (!selectedAccount) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Account Details</h2>
        <div>Account Number: {selectedAccount.accountNumber}</div>
        <div>Interest Rate: {selectedAccount.interestRate}</div>
        <div>Associated Cards: {selectedAccount.associatedCards.join(', ')}</div>
        <div>Linked Services: {selectedAccount.linkedServices.join(', ')}</div>
      </div>
    );
  };

  return (
    <div>
      {renderAccountDetails()}
    </div>
  );
};

export default AccountDetails;
