// StatisticsTab.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatisticsDashboard from './StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from './StatisticsTable/StatisticsTable';
// import Chart from './Chart/Chart';
import { fetchTransactionSummaryControllerThunk } from '../../redux/transactions/operations';
import s from './StatisticsTab.module.css'

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(state => state.transactions.transactionsList);

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    dispatch(fetchTransactionSummaryControllerThunk());
  }, [dispatch, selectedMonth, selectedYear]);

  return (
    <section className={s.statisticsContainer}>
      <h2 className={s.title}>Statistics</h2>
      <div className={s.Container}>
        {/* <Chart transactions={transactionsList} /> */}
      </div>
      <div className={s.tableContainer}>
        <StatisticsDashboard setSelectedMonth={setSelectedMonth} setSelectedYear={setSelectedYear} />
        <StatisticsTable selectedMonth={selectedMonth} selectedYear={selectedYear} />
      </div>
    </section>
  );
};

export default StatisticsTab;
