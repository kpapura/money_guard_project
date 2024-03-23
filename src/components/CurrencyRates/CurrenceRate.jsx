import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDashboard } from '../../hooks/useDashboard';

import {
  selectUsdRate,
  selectEurRate,
  selectLastFetchTime,
} from '../../redux/currencyRate/currencyRateSlice';
import {fetchCurrencyRate} from '../../redux/currencyRate/operations'
import s from './CurrenceRate.module.css';

function CurrencyRates() {
  const dispatch = useDispatch();
  const usdRate = useSelector(selectUsdRate);
  const eurRate = useSelector(selectEurRate);
  const savedTime = useSelector(selectLastFetchTime);
  
  const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isRetina } = useDashboard();

  let imageSrc = "../../img/images/currency_mobile.webp";
  let secondImageSrc = "../../img/images/line_desc_mob_1x.webp";

  if (window.devicePixelRatio >= 2) {
    if (isDesktopOrLaptop) {
      imageSrc = "../../img/images/currency_desk@2x.webp";
      secondImageSrc = "../../img/images/line_desc_2x.webp";
    } else if (isBigScreen) {
      imageSrc = "../../img/images/currency_desk@2x.webp";
      secondImageSrc = "../../img/images/line_desc_2x.webp";
    } else if (isTabletOrMobile) {
      imageSrc = "../../img/images/currency_tablet@2x.webp";
      secondImageSrc = "../../img/images/line_desc_tab_2x.webp";
    }
  } else {
    if (isDesktopOrLaptop) {
      imageSrc = "../../img/images/currency_desk.webp";
      secondImageSrc = "../../img/images/line_desc_1x.webp";
    } else if (isBigScreen) {
      imageSrc = "../../img/images/currency_desk.webp";
      secondImageSrc = "../../img/images/line_desc_1x.webp";
    } else if (isTabletOrMobile) {
      imageSrc = "../../img/images/currency_tablet.webp";
      secondImageSrc = "../../img/images/line_desc_tab_1x.webp";
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
      <div className={s.secondwrapper}>
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
        {isDesktopOrLaptop && (
          <>
            <p className={s.smallnumeur}> {eurRate.rateBuy}</p>
            <p className={s.smallnumusd}> {usdRate.rateBuy}</p>
          </>
        )}
        <img className={s.image} src={imageSrc} alt="Currency rate" />
        <img className={s.secondimage} src={secondImageSrc} alt="Currency rate" />
        
        </div>
    </div>
  );
}

export default CurrencyRates;


























// працює в хром, але не в іншому браузері

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDashboard } from '../../hooks/useDashboard';

// import {
//   selectUsdRate,
//   selectEurRate,
//   selectLastFetchTime,
// } from '../../redux/currencyRate/currencyRateSlice';
// import {fetchCurrencyRate} from '../../redux/currencyRate/operations'
// import s from './CurrenceRate.module.css';

// function CurrencyRates() {
//   const dispatch = useDispatch();
//   const usdRate = useSelector(selectUsdRate);
//   const eurRate = useSelector(selectEurRate);
//   const savedTime = useSelector(selectLastFetchTime);
  
//   const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isRetina } = useDashboard();

//   let imageSrc = "../../img/images/currency_mobile.webp";
//   let secondImageSrc = "../../img/images/line_desc_mob_1x.webp";

//   if (window.devicePixelRatio >= 2) {
//     if (isDesktopOrLaptop) {
//       imageSrc = "../../img/images/currency_desk@2x.webp";
//       secondImageSrc = "../../img/images/line_desc_2x.webp";
//     } else if (isBigScreen) {
//       imageSrc = "../../img/images/currency_desk@2x.webp";
//       secondImageSrc = "../../img/images/line_desc_2x.webp";
//     } else if (isTabletOrMobile) {
//       imageSrc = "../../img/images/currency_tablet@2x.webp";
//       secondImageSrc = "../../img/images/line_desc_tab_2x.webp";
//     }
//   } else {
//     if (isDesktopOrLaptop) {
//       imageSrc = "../../img/images/currency_desk.webp";
//       secondImageSrc = "../../img/images/line_desc_1x.webp";
//     } else if (isBigScreen) {
//       imageSrc = "../../img/images/currency_desk.webp";
//       secondImageSrc = "../../img/images/line_desc_1x.webp";
//     } else if (isTabletOrMobile) {
//       imageSrc = "../../img/images/currency_tablet.webp";
//       secondImageSrc = "../../img/images/line_desc_tab_1x.webp";
//     }
//   }

//   useEffect(() => {
//     const currentTime = new Date().getTime();
//     const timeDifference = (currentTime - savedTime) / (1000 * 60 * 60);

//     if (timeDifference > 1) {
//       dispatch(fetchCurrencyRate());
//     }
//   }, [dispatch, savedTime]);

//   return (
//     <div className={s.wrapper}>
//       <div className={s.secondwrapper}>
//       <ul className={s.title}>
//         <li className={s.titleItem}>Currency</li>
//         <li className={s.titleItem}>Purchase</li>
//         <li className={s.titleItem}>Sale</li>
//       </ul>
//       {usdRate && (
//         <ul className={s.row}>
//           <li className={s.rowItem}>USD</li>
//           <li className={s.rowItem}>{usdRate.rateBuy}</li>
//           <li className={s.rowItem}>{usdRate.rateSell}</li>
//         </ul>
//       )}
//       {eurRate && (
//         <ul className={s.row}>
//           <li className={s.rowItem}>EUR</li>
//           <li className={s.rowItem}>{eurRate.rateBuy}</li>
//           <li className={s.rowItem}>{eurRate.rateSell}</li>
//         </ul>
//         )}
//         {isDesktopOrLaptop && (
//           <>
//             <p> {eurRate.rateBuy}</p>
//             <p> {usdRate.rateBuy}</p>
//           </>
//         )}
//         <img className={s.image} src={imageSrc} alt="Currency rate" />
//         <img className={s.secondimage} src={secondImageSrc} alt="Currency rate" />
        
//         </div>
//     </div>
//   );
// }

// export default CurrencyRates;



















// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDashboard } from '../../hooks/useDashboard';

// import {
//   selectUsdRate,
//   selectEurRate,
//   selectLastFetchTime,
// } from '../../redux/currencyRate/currencyRateSlice';
// import {fetchCurrencyRate} from '../../redux/currencyRate/operations'
// import s from './CurrenceRate.module.css';

// function CurrencyRates() {
//   const dispatch = useDispatch();
//   const usdRate = useSelector(selectUsdRate);
//   const eurRate = useSelector(selectEurRate);
//   const savedTime = useSelector(selectLastFetchTime);
  
//   const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isRetina } = useDashboard();

//   let imageSrc = "../../img/images/currency_mobile.webp";
//   let secondImageSrc = "../../img/images/line_desc_mob_1x.webp";

//   if (window.devicePixelRatio >= 2) {
//     if (isDesktopOrLaptop) {
//       imageSrc = "../../img/images/currency_desk@2x.webp";
//       secondImageSrc = "../../img/images/line_desc_2x.webp";
//     } else if (isBigScreen) {
//       imageSrc = "../../img/images/currency_desk@2x.webp";
//       secondImageSrc = "../../img/images/line_desc_2x.webp";
//     } else if (isTabletOrMobile) {
//       imageSrc = "../../img/images/currency_tablet@2x.webp";
//       secondImageSrc = "../../img/images/line_desc_tab_2x.webp";
//     }
//   } else {
//     if (isDesktopOrLaptop) {
//       imageSrc = "../../img/images/currency_desk.webp";
//       secondImageSrc = "../../img/images/line_desc_1x.webp";
//     } else if (isBigScreen) {
//       imageSrc = "../../img/images/currency_desk.webp";
//       secondImageSrc = "../../img/images/line_desc_1x.webp";
//     } else if (isTabletOrMobile) {
//       imageSrc = "../../img/images/currency_tablet.webp";
//       secondImageSrc = "../../img/images/line_desc_tab_1x.webp";
//     }
//   }

//   useEffect(() => {
//     const currentTime = new Date().getTime();
//     const timeDifference = (currentTime - savedTime) / (1000 * 60 * 60);

//     if (timeDifference > 1) {
//       dispatch(fetchCurrencyRate());
//     }
//   }, [dispatch, savedTime]);

//   return (
//     <div className={s.wrapper}>
//       <div className={s.secondwrapper}>
//       <ul className={s.title}>
//         <li className={s.titleItem}>Currency</li>
//         <li className={s.titleItem}>Purchase</li>
//         <li className={s.titleItem}>Sale</li>
//       </ul>
//       {usdRate && (
//         <ul className={s.row}>
//           <li className={s.rowItem}>USD</li>
//           <li className={s.rowItem}>{usdRate.rateBuy}</li>
//           <li className={s.rowItem}>{usdRate.rateSell}</li>
//         </ul>
//       )}
//       {eurRate && (
//         <ul className={s.row}>
//           <li className={s.rowItem}>EUR</li>
//           <li className={s.rowItem}>{eurRate.rateBuy}</li>
//           <li className={s.rowItem}>{eurRate.rateSell}</li>
//         </ul>
//       )}
//         <img className={s.image} src={imageSrc} alt="Currency rate" />
//         <img className={s.secondimage} src={secondImageSrc} alt="Currency rate" />
      
      
      
//         </div>
//     </div>
//   );
// }

// export default CurrencyRates;














// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDashboard } from '../../hooks/useDashboard';

// import {
//   selectUsdRate,
//   selectEurRate,
//   selectLastFetchTime,
//   // fetchCurrencyRate,
// } from '../../redux/currencyRate/currencyRateSlice';
// import {fetchCurrencyRate} from '../../redux/currencyRate/operations'
// import s from './CurrenceRate.module.css';

// function CurrencyRates() {
//   const dispatch = useDispatch();
//   const usdRate = useSelector(selectUsdRate);
//   const eurRate = useSelector(selectEurRate);
//   const savedTime = useSelector(selectLastFetchTime);
  
//   const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isRetina } = useDashboard();

//   let imageSrc = "../../img/images/currency_mobile.webp";
//   let secondImageSrc = "../../img/images/line_desc_mob_1x.webp";

//   if (isDesktopOrLaptop) {
//     imageSrc = "../../img/images/currency_desk.webp";
//     secondImageSrc = "../../img/images/line_desc_1x.webp";
//   } else if (isBigScreen) {
//     imageSrc = "../../img/images/currency_desk@2x.webp";
//     secondImageSrc = "../../img/images/line_desc_2x.webp";
//   } else if (isTabletOrMobile) {
//     imageSrc = "../../img/images/currency_tablet.webp";
//     secondImageSrc = "../../img/images/line_desc_tab_1x.webp";
//   } else if (isRetina) {
//     imageSrc = "../../img/images/currency_tablet@2x.webp";
//     secondImageSrc = "../../img/images/line_desc_tab_2x.webp";
//   }

//   useEffect(() => {
//     const currentTime = new Date().getTime();
//     const timeDifference = (currentTime - savedTime) / (1000 * 60 * 60);

//     if (timeDifference > 1) {
//       dispatch(fetchCurrencyRate());
//     }
//   }, [dispatch, savedTime]);

//   return (
//     <div className={s.wrapper}>
//       <div className={s.secondwrapper}>
//       <ul className={s.title}>
//         <li className={s.titleItem}>Currency</li>
//         <li className={s.titleItem}>Purchase</li>
//         <li className={s.titleItem}>Sale</li>
//       </ul>
//       {usdRate && (
//         <ul className={s.row}>
//           <li className={s.rowItem}>USD</li>
//           <li className={s.rowItem}>{usdRate.rateBuy}</li>
//           <li className={s.rowItem}>{usdRate.rateSell}</li>
//         </ul>
//       )}
//       {eurRate && (
//         <ul className={s.row}>
//           <li className={s.rowItem}>EUR</li>
//           <li className={s.rowItem}>{eurRate.rateBuy}</li>
//           <li className={s.rowItem}>{eurRate.rateSell}</li>
//         </ul>
//       )}
//         <img className={s.image} src={imageSrc} alt="Currency rate" />
//         <img className={s.secondimage} src={secondImageSrc} alt="Currency rate" />
      
      
      
//         </div>
//     </div>
//   );
// }

// export default CurrencyRates;






















































// працює, але без хука dashboard

// import React from 'react';
// import { useSelector } from 'react-redux';

// import {
//   selectUsdRate,
//   selectEurRate,
//   selectLastFetchTime,
// } from '../../redux/currencyRate/currencyRateSlice';
// import s from './CurrenceRate.module.css';

// function CurrencyRates() {
//   const usdRate = useSelector(selectUsdRate);
//   const eurRate = useSelector(selectEurRate);

//   return (
//     <div className={s.wrapper}>
//       <div className={s.secondwrapper}>
//       <ul className={s.title}>
//         <li className={s.titleItem}>Currency</li>
//         <li className={s.titleItem}>Purchase</li>
//         <li className={s.titleItem}>Sale</li>
//       </ul>
//       {usdRate && (
//         <ul className={s.row}>
//           <li className={s.rowItem}>USD</li>
//           <li className={s.rowItem}>{usdRate.rateBuy}</li>
//           <li className={s.rowItem}>{usdRate.rateSell}</li>
//         </ul>
//       )}
//       {eurRate && (
//         <ul className={s.row}>
//           <li className={s.rowItem}>EUR</li>
//           <li className={s.rowItem}>{eurRate.rateBuy}</li>
//           <li className={s.rowItem}>{eurRate.rateSell}</li>
//         </ul>
//       )}
      

//         <img className={s.image} src="../../img/images/currency_mobile.webp" alt="Currency rate" />
//         <img className={s.secondimage} src="../../img/images/line_desc_mob_1x.webp" alt="Currency rate" />
      
      
      
//         </div>
//     </div>
//   );
// }

// export default CurrencyRates;
