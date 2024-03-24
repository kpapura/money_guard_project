// Chart.jsx
import React from 'react';

import { Doughnut } from 'react-chartjs-2';
import s from './Chart.module.css';
import Chart from 'chart.js/auto'; 

const DoughnutChart = ({ transactions, colors, period }) => {
   if (!transactions || !colors) {
    return <div>No data available</div>;
  }

  const formattedPeriod = period.toFixed(2);

  const data = {
    datasets: [{
      data: transactions?.map(transaction => transaction.total),
      backgroundColor: transactions?.map(transaction => colors[transaction.name]),
      hoverBackgroundColor: transactions?.map(transaction => colors[transaction.name]),
      cutout: 95
      
    }]
  };

  return (
    <div className={s.chartContainer}>
      <div className={s.chartWrapper}>
        <Doughnut data={data} />
        <p className={s.periodText}> ₴ {formattedPeriod}</p> 
      </div>
    </div>
  );
};

export default DoughnutChart;



  