// Chart.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Chart = ({ transactions }) => {
  const getColorForCategory = (category) => {
    const transaction = transactions.find(transaction => transaction.type === category);
    if (transaction) {
      return transaction.color;
    } else {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  };

  const data = {
    labels: transactions.map(transaction => transaction.type),
    datasets: [{
      data: transactions.map(transaction => transaction.total),
      backgroundColor: transactions.map(transaction => getColorForCategory(transaction.type)),
      hoverBackgroundColor: transactions.map(transaction => getColorForCategory(transaction.type))
    }]
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
