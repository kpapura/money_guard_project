

import React from 'react';
import { useSelector } from 'react-redux';

// import image from '../img/currency_mobile.webp';
import {
  selectUsdRate,
  selectEurRate,
  selectLastFetchTime,
} from '../../redux/currencyRate/currencyRateSlice';
import s from './CurrenceRate.module.css';

function CurrencyRates() {
  const usdRate = useSelector(selectUsdRate);
  const eurRate = useSelector(selectEurRate);

  return (
    <div className={s.wrapper}>
      <ul className={s.title}>
        <li className={s.titleItem}>Currency</li>
        <li className={s.titleItem}>Purchase</li>
        <li className={s.titleItem}>Sale</li>
      </ul>
      {usdRate && (
        <ul className={s.row}>
          <li className={s.rowItem}>USD</li>
          <li className={s.rowItem}>{usdRate.rateBuy}</li>
          <li className={s.rowItem}>{usdRate.rateSell}</li>
        </ul>
      )}
      {eurRate && (
        <ul className={s.row}>
          <li className={s.rowItem}>EUR</li>
          <li className={s.rowItem}>{eurRate.rateBuy}</li>
          <li className={s.rowItem}>{eurRate.rateSell}</li>
        </ul>
      )}
      {/* <img src={image} alt="" /> */}

      {/* <img src="../img/currency_mobile.webp" alt="картинка відсутня" /> */}
    </div>
  );
}

export default CurrencyRates;
