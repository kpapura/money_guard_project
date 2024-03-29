import React from 'react';

import s from './StatisticsTable.module.css';

const StatisticsTable = ({
  transactionsSummary,
  colors,
  incomeSummary,
  expenseSummary,
}) => {
  const formattedIncome = incomeSummary.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedExpense = expenseSummary.toLocaleString('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div className={s.tableParagraphContainer}>
      <div className={s.tableContainer}>
        <table className={s.table}>
          <thead>
            <tr className={s.tableHeader}>
              <th style={{ textAlign: 'left' }} className={s.tableCellHead}>
                Category
              </th>
              <th style={{ textAlign: 'right' }} className={s.tableCellHead}>
                Sum
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionsSummary.map((category, index) => (
              <tr key={index} className={s.tableRow}>
                <td className={s.tableCell}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      className={s.colorSquare}
                      style={{
                        marginRight: '16px',
                        width: '24px',
                        height: '24px',
                        backgroundColor: colors[category.name],
                      }}
                    ></div>
                    {category.name}
                  </div>
                </td>
                <td style={{ textAlign: 'right' }} className={s.tableCell}>
                  {category.total
                    .toLocaleString('ru-RU', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                    .replace('-', '')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={s.paragraphContainer}>
        <p className={s.paragraph}>
          Income:
          <span className={s.income}>{formattedIncome}</span>
        </p>
        <p className={s.paragraph}>
          Expenses:
          <span className={s.expense}>
            {formattedExpense.toString().replace('-', '')}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StatisticsTable;
