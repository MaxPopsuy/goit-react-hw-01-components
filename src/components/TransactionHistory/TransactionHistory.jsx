import React from 'react';
import styles from './transaction.module.css'; // P.S. Стили писал два часа :D
const TransactionHistory = props => {
  return (
    <table className={styles.transactions__history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.transactions.map(elem => (
          <tr key={elem.id}>
            <td>{elem.type}</td>
            <td>{elem.amount}</td>
            <td>{elem.currency}</td>
          </tr>
        ))}
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionHistory;