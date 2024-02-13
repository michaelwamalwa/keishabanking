import React, { useState } from 'react';
import './BillPayments.css';

const BillPayments = () => {
  const [selectedBiller, setSelectedBiller] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [billers, setBillers] = useState([
    { id: '1', name: 'Electricity' },
    { id: '2', name: 'Water' },
    // Add more biller objects as needed
  ]);
  const [billsPaid, setBillsPaid] = useState([]);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Perform validation and process the bill payment
    if (selectedBiller && paymentAmount && dueDate) {
      // Perform validation checks

      // Process the bill payment and update payment records
      const paymentRecord = {
        biller: selectedBiller,
        amount: paymentAmount,
        date: new Date(),
      };
      setBillsPaid((prevBillsPaid) => [...prevBillsPaid, paymentRecord]);

      // Clear form inputs after successful payment
      setSelectedBiller('');
      setPaymentAmount('');
      setDueDate('');
    }
  };

  const handleAddBiller = (e) => {
    e.preventDefault();

    if (selectedBiller.trim() === '') {
      return;
    }

    const newBiller = {
      id: String(Date.now()),
      name: selectedBiller,
    };

    setBillers((prevBillers) => [...prevBillers, newBiller]);
    setSelectedBiller('');
  };

  const handleDeleteBiller = (billerId) => {
    setBillers((prevBillers) => prevBillers.filter((biller) => biller.id !== billerId));
  };

  if (!billers) {
    return null; // Or display a loading state/error message
  }

  return (
    <div className="bill-payments-container">
      <h2>Bill Payments</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div>
          <label htmlFor="selectedBiller">Select Biller:</label>
          <select
            id="selectedBiller"
            value={selectedBiller}
            onChange={(e) => setSelectedBiller(e.target.value)}
          >
            <option value="">Select Biller</option>
            {billers.map((biller) => (
              <option key={biller.id} value={biller.id}>
                {biller.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="paymentAmount">Payment Amount:</label>
          <input
            type="number"
            id="paymentAmount"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <button type="submit">Pay Bill</button>
      </form>

      <div className="billers-list">
        <h3>Billers:</h3>
        <ul>
          {billers.map((biller) => (
            <li key={biller.id}>
              {biller.name}
              <button onClick={() => handleDeleteBiller(biller.id)}>Delete</button>
            </li>
          ))}
        </ul>

        <form onSubmit={handleAddBiller}>
          <input
            type="text"
            placeholder="Enter biller name"
            value={selectedBiller}
            onChange={(e) => setSelectedBiller(e.target.value)}
          />
          <button type="submit">Add Biller</button>
        </form>
      </div>

      <div className="bills-paid-list">
        <h3>Bills Paid:</h3>
        <ul>
          {billsPaid.map((paymentRecord, index) => (
            <li key={index}>
              <div>Biller: {paymentRecord.biller}</div>
              <div>Amount: {paymentRecord.amount}</div>
              <div>Date: {paymentRecord.date.toLocaleDateString()}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BillPayments;
