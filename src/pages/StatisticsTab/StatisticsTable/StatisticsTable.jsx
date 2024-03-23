// StatisticsTable.jsx
import React from 'react';
import s from './StatisticsTable.module.css'

const StatisticsTable = ({ transactionsSummary }) => {
  const categoriesSummary = transactionsSummary?.categoriesSummary || [];
  const incomeSummary = transactionsSummary?.incomeSummary || 0;
  const expenseSummary = transactionsSummary?.expenseSummary || 0;

  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead className={s.tableHeader}>
          <tr>
            <th className={s.tableCell}>Category</th>
            <th className={s.tableCell}>Sum</th>
          </tr>
        </thead>
        <tbody>
          {categoriesSummary.map((category, index) => (
            <tr key={index} className={s.tableRow}>
              <td className={s.tableCell}>{category.name}</td>
              <td className={s.tableCell}>{category.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.paragraphContainer}>
        <p className={s.paragraph}>Income: {incomeSummary}</p>
        <p className={s.paragraph}>Expenses: {expenseSummary}</p>
      </div>
    </div>
  );
};

export default StatisticsTable;