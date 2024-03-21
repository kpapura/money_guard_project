import React from 'react';
import { useSelector } from 'react-redux';

import s from './CurrenceRate.module.css'

function CurrencyRates() {
  const currencyRate = useSelector(state => state.currency.currencyRate);

  if (!currencyRate) {
    return <p>Loading...</p>;
  }

  const usdRate = currencyRate.find(rate => rate.currencyCodeA === 840 && rate.currencyCodeB === 980);
  const eurRate = currencyRate.find(rate => rate.currencyCodeA === 978 && rate.currencyCodeB === 980);

  return (
    <div className={s.wrapper}>
      <table>
        <thead className={s.title}>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {usdRate && (
            <tr>
              <td>USD</td>
              <td>{usdRate.rateBuy}</td>
              <td>{usdRate.rateSell}</td>
            </tr>
          )}
          {eurRate && (
            <tr>
              <td>EUR</td>
              <td>{eurRate.rateBuy}</td>
              <td>{eurRate.rateSell}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyRates;