// StatisticsTable.jsx

import React from 'react';
import s from './StatisticsTable.module.css';

const StatisticsTable = ({ transactionsSummary, colors, incomeSummary, expenseSummary }) => {
  

  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead className={s.tableHeader}>
          <tr className={s.tableRow}>
            <th className={s.tableHeadCell}>Category</th>
            <th className={s.tableHeadCellRight}>Sum</th>
          </tr>
        </thead>
        <tbody>
          {transactionsSummary.map((category, index) => (
            <tr key={index} className={s.tableRow}>
              <td className={s.tableCellBox} style={{ backgroundColor: colors[category.name] }}></td>
              <td className={s.tableCell}>{category.name}</td>
              <td className={s.tableCellRight}>{category.total}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <div className={s.paragraphContainer}>
        <p className={s.paragraph}>Income:
          <span className={s.income}>{incomeSummary}</span></p>
        <p className={s.paragraph}>Expenses:
          <span className={s.expense}>{expenseSummary.toString().replace('-', '')}</span></p>
      </div>
    </div>
  );
};

export default StatisticsTable;
