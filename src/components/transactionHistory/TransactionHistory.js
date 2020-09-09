import React from 'react';
// import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import Transaction from './Transaction';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
