// StatisticsTab.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchTransactionSummaryControllerThunk } from '../../../redux/transactions/operations';
// import Chart from './Chart'; // Імпорт компонента Chart
import StatisticsDashboard from './StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from './StatisticsTable/StatisticsTable';
import { fetchTransactionSummaryControllerThunk } from '../../redux/transactions/operations';
import Chart from './Chart/Chart';

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const transactionsList = useSelector(state => state.transactions.transactionsList);
  const incomeSummary = useSelector(state => state.transactions.transactionSummaryController?.incomeSummary);
  const expenseSummary = useSelector(state => state.transactions.transactionSummaryController?.expenseSummary);

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    dispatch(fetchTransactionSummaryControllerThunk());
  }, [dispatch, selectedMonth, selectedYear]);

  return (
    <section>
      <StatisticsTable selectedMonth={selectedMonth} selectedYear={selectedYear} />
      <Chart transactions={transactionsList} />
      <StatisticsDashboard setSelectedMonth={setSelectedMonth} setSelectedYear={setSelectedYear} />
    </section>
  );
};

export default StatisticsTab;
