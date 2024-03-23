import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';

import currencyImg from '../../img/images/currency_desk.webp';

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutThunk())
  }
  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Exit</button>
      <br />
      <NavLink to='/statistic'>
        Statistic
      </NavLink>
      <br />
      <NavLink to='/currency'>
        $
      </NavLink>
    </main>
  );
};

export default Home;