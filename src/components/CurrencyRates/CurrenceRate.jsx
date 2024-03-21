// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


// // import image from '../img/currency_mobile.webp';

// import s from './CurrenceRate.module.css'
// import { fetchCurrencyRate } from '../../redux/currencyRate/operations';

// function CurrencyRates() {
  
//   // const currencyRate = useSelector(state => state.currency.currencyRate);

//   // if (!currencyRate) {
//   //   return <p>Loading...</p>;
//   // }

  

//   return (
//     <div className={s.wrapper}>
//       <p>qwerty</p>
//       {/* <ul className={s.title}>
//         <li className={s.titleItem}>Currency</li>
//         <li className={s.titleItem}>Purchase</li>
//         <li className={s.titleItem}>Sale</li>
//       </ul> */}
//       {/* {usdRate && (
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
//         </ul> */}
//           {/* )} */}
//           {/* <img src={image} alt="" /> */}
          
//       {/* <img src="../img/currency_mobile.webp" alt="картинка відсутня" /> */}
//     </div>
//   );
// }

// export default CurrencyRates;









import React from 'react';
import { useSelector } from 'react-redux';

// import image from '../img/currency_mobile.webp';

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