// import React, { useEffect } from 'react';
// import Login from '../pages/Login/Login';
// import { Route, Routes } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import Register from '../pages/Register/Register';
// import StatisticsTab from '../pages/StatisticsTab/StatisticsTab';
// import 'modern-normalize';
// import CurrencyRates from '../components/CurrencyRates/CurrenceRate'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCurrencyRate } from '../redux/currencyRate/operations';
// import {selectUsdRate, selectEurRate, selectLastFetchTime} from '../redux/currencyRate/currencyRateSlice'


// function App() {

//   // const savedTime = useSelector(selectLastFetchTime);
//   const usdRate = useSelector(selectUsdRate);
//   const eurRate = useSelector(selectEurRate);

// const dispatch = useDispatch();

//   // useEffect(() => {
  
//   // }
    

//   // }, [dispatch]);
  


//   if (savedTime && usdRate && eurRate) {
//       console.log('ok');
//     const currentTime = new Date().getTime();
//     const timeDifference = (currentTime - savedTime) / (1000 * 60 * 60);

//     if (timeDifference > 1) {
//       // const data = dispatch(fetchCurrencyRate());
//     }
  
  
//   if (data) {
//     // console.log(currentTime);
//     // console.log(savedTime);
//     console.log(eurRate);
//     console.log(usdRate);
//   }

  


//   return (
//     <div>
//       <h1>Hello</h1>
//       {/* <CurrencyRates /> */}
//       {/* <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//         </Route>
//       </Routes> */}
//     </div>
//   );
// }

// export default App;











import React from 'react';
import Login from '../pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Register from '../pages/Register/Register';
import StatisticsTab from '../pages/StatisticsTab/StatisticsTab';
import 'modern-normalize';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;





















// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchCurrencyRate } from '../redux/currencyRate/operations';
// import CurrencyRates from './CurrencyRates/CurrenceRate';

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCurrencyRate());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Мій додаток</h1>
//       <CurrencyRates />
//     </div>
//   );
// }

// export default App;