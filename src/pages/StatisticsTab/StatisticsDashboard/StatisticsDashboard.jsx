// StatisticsDashboard.jsx
import React, { useState } from 'react';
import s from './StatisticsDashboard.module.css';

const StatisticsDashboard = ({ onMonthChange, onYearChange }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleMonthChange = e => {
    setSelectedMonth(parseInt(e.target.value));
    onMonthChange(parseInt(e.target.value));
  };

  const handleYearChange = e => {
    setSelectedYear(parseInt(e.target.value));
    onYearChange(parseInt(e.target.value));
  };

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
