// StatisticsDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './StatisticsDashboard.module.css';
import { fetchTransactionSummaryControllerThunk } from '../../../redux/transactions/operations';
import StatisticsTable from '../StatisticsTable/StatisticsTable';

const StatisticsDashboard = () => {
  const dispatch = useDispatch();
  const summaryController = useSelector(state => state.transactions.transactionSummaryController);
  const [selectedMonth, setSelectedMonth] = useState(summaryController?.month || (new Date().getMonth() + 1));
  const [selectedYear, setSelectedYear] = useState(summaryController?.year || new Date().getFullYear());

  useEffect(() => {
    dispatch(fetchTransactionSummaryControllerThunk());
  }, [dispatch]);

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const years = Array.from({ length: currentYear - 2019 }, (_, i) => currentYear - i).reverse();
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className={s.selectContainers}>
      <select className={s.select} value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month, index) => (
          <option className={s.option} key={index + 1} value={index + 1}>{month}</option>
        ))}
      </select>
      <select className={s.select} value={selectedYear} onChange={handleYearChange}>
        {years.map(year => (
          <option className={s.option} key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default StatisticsDashboard;
