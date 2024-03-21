// StatisticsDashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransactionSummaryControllerThunk } from '../../../redux/transactions/operations';

const StatisticsDashboard = ({ selectedMonth, selectedYear, onMonthChange, onYearChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionSummaryControllerThunk());
  }, [dispatch]);

  const handleMonthChange = (e) => {
    onMonthChange(e);
  };

  const handleYearChange = (e) => {
    onYearChange(e);
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const years = Array.from({ length: currentYear - 2019 }, (_, i) => currentYear - i).reverse();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div>
      <select value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option key={index + 1} value={index + 1}>{month}</option>
        ))}
      </select>
      <select value={selectedYear} onChange={handleYearChange}>
        {years.map(year => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default StatisticsDashboard;
