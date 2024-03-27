import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectUsdRate,
  selectEurRate,
  selectLastFetchTime,
} from '../../redux/currencyRate/currencyRateSlice';

import { fetchCurrencyRate } from '../../redux/currencyRate/operations';
import currencyImages from './CurrencyImages';
import { useDashboard } from '../../hooks/useDashboard';

import s from './CurrenceRate.module.css';

function CurrencyRates() {
  const dispatch = useDispatch();
  const usdRate = useSelector(selectUsdRate);
  const eurRate = useSelector(selectEurRate);
  const savedTime = useSelector(selectLastFetchTime);

  const { isBigScreen, isTabletOrMobile, isRetina } = useDashboard();
  const { imageSrc, secondImageSrc } = currencyImages(
    isRetina,
    isBigScreen,
    isTabletOrMobile
  );

  useEffect(() => {
    const currentTime = new Date().getTime();
    const timeDifference = (currentTime - savedTime) / (1000 * 60 * 60);

    if (timeDifference > 1) {
      dispatch(fetchCurrencyRate());
    }
  }, [dispatch, savedTime]);

  return (
    <div className={s.wrapper}>
      <div className={s.secondwrapper}>
        <table className={s.table}>
          <thead className={s.head}>
            <tr className={s.titleRow}>
              <th className={s.titleItem}>Currency</th>
              <th className={s.titleItem}>Purchase</th>
              <th className={s.titleItem}>Sale</th>
            </tr>
          </thead>
          <tbody className={s.tableBody}>
            {usdRate && (
              <tr className={s.row}>
                <td className={s.rowItem}>USD</td>
                <td className={s.rowItem}>{usdRate?.rateBuy}</td>
                <td className={s.rowItem}>{usdRate?.rateSell}</td>
              </tr>
            )}
            {eurRate && (
              <tr className={s.row}>
                <td className={s.rowItem}>EUR</td>
                <td className={s.rowItem}>{eurRate?.rateBuy}</td>
                <td className={s.rowItem}>{eurRate?.rateSell}</td>
              </tr>
            )}
          </tbody>
        </table>
        {isBigScreen && (
          <>
            <p className={s.smallnumeur}> {eurRate?.rateBuy}</p>
            <p className={s.smallnumusd}> {usdRate?.rateBuy}</p>
          </>
        )}
        <div className={s.imgBox}>
          <img className={s.image} src={imageSrc} alt="Currency rate" />
          <img
            className={s.secondimage}
            src={secondImageSrc}
            alt="Currency rate"
          />
        </div>
      </div>
    </div>
  );
}
export default CurrencyRates;
