// StatisticsTable.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import s from './StatisticsTable.module.css';

const StatisticsTable = () => {
  const transactionSummaryController = useSelector(state => state.transactions.transactionSummaryController);
  const categoriesSummary = transactionSummaryController?.categoriesSummary || [];
  const incomeSummary = transactionSummaryController?.incomeSummary || 0;
  const expenseSummary = transactionSummaryController?.expenseSummary || 0;

  return (
    <div>
      <h2>Statistics Table</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {categoriesSummary.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td>{category.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Income: {incomeSummary}</p>
        <p>Expenses: {expenseSummary}</p>
      </div>
    </div>
  );
};

export default StatisticsTable;
