import React from 'react';
import styles from './Transaction.module.css';
let color = false;

function Transaction({ type, amount, currency }) {
  color = color ? false : true;
  return (
    <tr className={color ? styles.white : styles.gray}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default Transaction;
