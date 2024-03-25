import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDashboard } from '../../hooks/useDashboard';

import {
  selectUsdRate,
  selectEurRate,
  selectLastFetchTime,
} from '../../redux/currencyRate/currencyRateSlice';
import { fetchCurrencyRate } from '../../redux/currencyRate/operations';
import s from './CurrenceRate.module.css';

function CurrencyRates() {
  const dispatch = useDispatch();
  const usdRate = useSelector(selectUsdRate);
  const eurRate = useSelector(selectEurRate);
  const savedTime = useSelector(selectLastFetchTime);

  const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isRetina } =
    useDashboard();

  let imageSrc = '';
  let secondImageSrc = '';

  if (isRetina) {
    if (isBigScreen) {
      imageSrc = '../../img/images/currency_desk@2x.webp';
      secondImageSrc = '../../img/images/line_desc_2x.webp';
    } else if (isTabletOrMobile) {
      imageSrc = '../../img/images/currency_tablet@2x.webp';
      secondImageSrc = '../../img/images/line_desc_tab_2x.webp';
    } else {
      imageSrc = '../../img/images/currency_mobile@2x.webp';
      secondImageSrc = '../../img/images/line_desc_mob_2x.webp';
    }
  } else {
    if (isBigScreen) {
      imageSrc = '../../img/images/currency_desk.webp';
      secondImageSrc = '../../img/images/line_desc_1x.webp';
    } else if (isTabletOrMobile) {
      imageSrc = '../../img/images/currency_tablet.webp';
      secondImageSrc = '../../img/images/line_desc_tab_1x.webp';
    } else {
      imageSrc = '../../img/images/currency_mobile.webp';
      secondImageSrc = '../../img/images/line_desc_mob_1x.webp';
    }
  }

  useEffect(() => {
    const currentTime = new Date().getTime();
    const timeDifference = (currentTime - savedTime) / (1000 * 60 * 60);

    if (timeDifference > 1) {
      dispatch(fetchCurrencyRate());
    }
  }, [dispatch, savedTime]);

  return (
    <div className={s.wrapper}>
      {/* <div className={s.secondwrapper}> */}
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
      {isBigScreen && (
        <>
          <p className={s.smallnumeur}> {eurRate.rateBuy}</p>
          <p className={s.smallnumusd}> {usdRate.rateBuy}</p>
        </>
      )}
      <img className={s.image} src={imageSrc} alt="Currency rate" />
      <img className={s.secondimage} src={secondImageSrc} alt="Currency rate" />
    </div>
  );
}

export default CurrencyRates;
