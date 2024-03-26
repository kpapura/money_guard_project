import React, { useState } from 'react';
import Select from 'react-select';
import s from './StatisticsDashboard.module.css';
import './select.css'

const StatisticsDashboard = ({ onMonthChange, onYearChange }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleMonthChange = selectedOption => {
    setSelectedMonth(selectedOption.value);
    onMonthChange(selectedOption.value);
  };

  const handleYearChange = selectedOption => {
    setSelectedYear(selectedOption.value);
    onYearChange(selectedOption.value);
  };

  const years = Array.from({ length: currentYear - 2019 }, (_, i) => currentYear - i).reverse();
  const months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];

  const yearOptions = years.map(year => ({ value: year, label: year }));

  return (
    <div className={s.selectContainers}>
      <Select
  className="react_select_container_special"
  classNamePrefix="react_select"
  value={months.find(month => month.value === selectedMonth)}
  options={months}
  onChange={handleMonthChange}
/>
      <Select
        className= 'react_select_container'
        classNamePrefix= 'react_select'
        value={yearOptions.find(option => option.value === selectedYear)}
        options={yearOptions}
        onChange={handleYearChange}
      />
    </div>
  );
};

export default StatisticsDashboard;
