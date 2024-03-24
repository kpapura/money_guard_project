// import React, { useEffect } from 'react';
// import Login from '../pages/Login/Login';
// import { Route, Routes } from 'react-router-dom';
// import { Layout } from './Layout';
// import Register from '../pages/Register/Register';
// import StatisticsTab from '../pages/StatisticsTab/StatisticsTab';
// import 'modern-normalize';
// import { refreshThunk } from '../redux/auth/operations';
// import { useDispatch } from 'react-redux';
// import HomeTab from '../pages/HomeTab/HomeTab';

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(refreshThunk());
//   }, [dispatch]);

//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="home" element={<HomeTab />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import Login from '../pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Register from '../pages/Register/Register';
import StatisticsTab from '../pages/StatisticsTab/StatisticsTab';
import 'modern-normalize';
import CurrencyRates from './CurrencyRates/CurrenceRate';
import Balance from './Balance/Balance';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <CurrencyRates />
      <Balance/>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes> */}
    </div>
  );
}
export default App;

