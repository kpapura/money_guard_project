// Chart.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import s from './Chart.module.css';

const Chart = ({ transactions, colors }) => {
  const data = {
    labels: transactions.map(transaction => transaction.name),
    datasets: [{
      data: transactions.map(transaction => transaction.total),
      backgroundColor: transactions.map(transaction => colors[transaction.name]),
      hoverBackgroundColor: transactions.map(transaction => colors[transaction.name])
    }]
  };

  return (
    <div className={s.chartContainer}>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;