import React, { useState } from 'react';
import styles from './TransactionSwitcher.module.css';

const TransactionSwitcher = ({ onChange }) => {
  const [isExpense, setIsExpense] = useState(false);

  const handleSwitch = () => {
    setIsExpense(!isExpense);
    onChange(!isExpense);
  };

  return (
    <div className={styles['transaction-switcher']}>
      <span className={styles.labelIncome}>Income</span>

      <label
        className={`${styles.switch} ${
          isExpense ? styles.expense : styles.income
        }`}
      >
        <input type="checkbox" onChange={handleSwitch} checked={!isExpense} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      <span className={styles.labelExpense}>Expense</span>
    </div>
  );
};

export default TransactionSwitcher;
