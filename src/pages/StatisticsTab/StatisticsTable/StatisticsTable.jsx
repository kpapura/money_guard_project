// StatisticsTable.jsx

import React from 'react';
import s from './StatisticsTable.module.css';

const StatisticsTable = ({ transactionsSummary, colors, incomeSummary, expenseSummary }) => {
  

  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead className={s.tableHeader}>
          <tr>
            <th className={s.tableCell}></th>
            <th className={s.tableCell}>Category</th>
            <th className={s.tableCell}>Sum</th>
          </tr>
        </thead>
        <tbody>
          {transactionsSummary.map((category, index) => (
            <tr key={index} className={s.tableRow}>
              <td className={s.tableCell} style={{ backgroundColor: colors[category.name] }}></td>
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
