import React from 'react';

import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import s from './Chart.module.css';

const DoughnutChart = ({ transactions, colors, period }) => {
  if (!transactions.length || !colors) {
    return <div>No data available</div>;
  }
  const formattedPeriod = period.toFixed(2);

  const data = {
    datasets: [
      {
        data: transactions?.map(transaction => transaction.total),
        backgroundColor: transactions?.map(
          transaction => colors[transaction.name]
        ),
        hoverBackgroundColor: transactions?.map(
          transaction => colors[transaction.name]
        ),
        cutout: '75%',
        borderWidth: 0,
        hoverOffset: 1,
      },
    ],
  };

  return (
    <div className={s.chartContainer}>
      <div className={s.chartWrapper}>
        <Doughnut data={data} className={s.doughnut} />
        <p className={s.periodText}> ₴ {formattedPeriod}</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
