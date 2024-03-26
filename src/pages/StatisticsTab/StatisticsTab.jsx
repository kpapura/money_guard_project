import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StatisticsDashboard from './StatisticsDashboard/StatisticsDashboard';
import StatisticsTable from './StatisticsTable/StatisticsTable';

import { fetchTransactionSummaryControllerThunk } from '../../redux/transactions/operations';
import {
  selectCategoriesSummary,
  selectExpenseSummary,
  selectIncomeSummary,
  selectPeriodTotal,
  selectMonth,
  selectYear,
} from '../../redux/transactions/transactionsSlice';

import s from './StatisticsTab.module.css';
import DoughnutChart from './Chart/Chart';

const StatisticsTab = () => {
  const dispatch = useDispatch();
  const transactionsSummaryList = useSelector(selectCategoriesSummary);
  const incomeTotal = useSelector(selectIncomeSummary);
  const expenceTotal = useSelector(selectExpenseSummary);
  const periodTotal = useSelector(selectPeriodTotal);
  const selectedMonth = useSelector(selectMonth);
  const selectedYear = useSelector(selectYear);

  const [colors, setColors] = useState({});

  useEffect(() => {
    dispatch(
      fetchTransactionSummaryControllerThunk({
        month: selectedMonth,
        year: selectedYear,
      })
    );
  }, [selectedMonth, selectedYear, dispatch]);

  const generateColors = () => {
    const generatedColors = {};
    transactionsSummaryList?.forEach(({ name, index }) => {
      generatedColors[name] = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
    });
    setColors(generatedColors);
  };
  useEffect(() => {
    generateColors();
  }, [transactionsSummaryList]);

  const handleMonthChange = month => {
    dispatch(
      fetchTransactionSummaryControllerThunk({ month, year: selectedYear })
    );
  };

  const handleYearChange = year => {
    dispatch(
      fetchTransactionSummaryControllerThunk({ month: selectedMonth, year })
    );
  };

  return (
    <section className={s.statisticsContainer}>
      <h2 className={s.title}>Statistics</h2>

      <div className={s.contentContainer}>
        <DoughnutChart
          transactions={transactionsSummaryList}
          period={periodTotal}
          colors={colors}
        />

        <div className={s.tableContainer}>
          <StatisticsDashboard
            onMonthChange={handleMonthChange}
            onYearChange={handleYearChange}
          />
          <StatisticsTable
            transactionsSummary={transactionsSummaryList}
            colors={colors}
            incomeSummary={incomeTotal}
            expenseSummary={expenceTotal}
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsTab;
