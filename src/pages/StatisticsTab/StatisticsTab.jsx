import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatisticsDashboard from './StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import { fetchTransactionSummaryControllerThunk } from '../../redux/transactions/operations';
import { selectTransactionSummary } from '../../redux/transactions/transactionsSlice';
import s from './StatisticsTab.module.css';

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const transactionsSummaryList = useSelector(selectTransactionSummary);

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    dispatch(fetchTransactionSummaryControllerThunk({ month: selectedMonth, year: selectedYear }));
  }, [selectedMonth, selectedYear, dispatch]);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <section className={s.statisticsContainer}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>Statistics</h2>
      </div>
      <div className={s.contentContainer}>
        <div className={s.chartContainer}>
          {/* <Chart transactions={transactionsList} /> */}
        </div>
        <div className={s.tableContainer}>
          <StatisticsDashboard onMonthChange={handleMonthChange} onYearChange={handleYearChange} />
          <StatisticsTable transactionsSummary={transactionsSummaryList} />
        </div>
      </div>
    </section>
  );
};

export default StatisticsTab;
