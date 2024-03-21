// StatisticsTable.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionSummaryControllerThunk } from '../../../redux/transactions/operations';

const StatisticsTable = ({ selectedMonth, selectedYear }) => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(state => state.transactions.transactionsList);
  const incomeSummary = useSelector(state => state.transactions.transactionSummaryController?.incomeSummary);
  const expenseSummary = useSelector(state => state.transactions.transactionSummaryController?.expenseSummary);

  useEffect(() => {
    dispatch(fetchTransactionSummaryControllerThunk());
  }, [dispatch, selectedMonth, selectedYear]);

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const generateColorsForCategories = () => {
    return transactionsList.map(transaction => ({
      type: transaction.type,
      color: generateRandomColor()
    }));
  };

  const colorsForCategories = generateColorsForCategories();

  const getColorForCategory = (category) => {
    const colorObj = colorsForCategories.find(colorObj => colorObj.type === category);
    return colorObj ? colorObj.color : '#000';
  };

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
          {transactionsList.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div>
                  <div style={{ width: '10px', height: '10px', backgroundColor: getColorForCategory(transaction.type) }}></div>
                  {transaction.type}
                </div>
              </td>
              <td>{transaction.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Expenses: {expenseSummary}</p>
        <p>Income: {incomeSummary}</p>
      </div>
    </div>
  );
};

export default StatisticsTable;
