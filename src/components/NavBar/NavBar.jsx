import React from 'react';
import { NavLink } from 'react-router-dom';
import useResize from '../../hooks/useResize';

import clsx from 'clsx';
import s from './NavBar.module.css';
import sprite from '../../img/sprite.svg'

const NavBar = () => {
  const screenWidth = useResize().windowWidth;

  return (
    <div className={s.navLinkContainer}>
      <div className={s.navLinkWrapper}>
      {screenWidth < 768 ? (
          <NavLink to="home" className={ ({isActive})=>clsx(s.navLinkTitle, isActive && s.active)}  >
          <svg width="38" height="38" className={s.navLinkIcon}>
            <use href="../../img/sprite.svg#icon-home"></use>
          </svg>
        </NavLink>
        ) : (
            <NavLink to="home" className={ ({isActive})=>clsx(s.navLinkTitle, isActive && s.active)}>
              <svg width="18" height="18" className={s.navLinkIcon}>
                 <use xlinkHref={`${sprite}#icon-home`} />
              </svg>
              Home
            </NavLink>
            )
    }

        {screenWidth < 768 ? (
        <NavLink to="statistics"  className={ ({isActive})=>clsx(s.navLinkTitle, isActive && s.active)}>
            <svg width="38" height="38" className={s.navLinkIcon}>
            <use xlinkHref={`${sprite}#icon-statistics`} />
          </svg>
        </NavLink>
        ) : (<NavLink to="statistics" className={ ({isActive})=>clsx(s.navLinkTitle, isActive && s.active)}>
        <svg width="18" height="18" className={s.navLinkIcon}>
          <use xlinkHref={`${sprite}#icon-statistics`}></use>
        </svg>
        Statistics
      </NavLink>)
    }

        {screenWidth < 768 && (
          <NavLink to="/currency" className={ ({isActive})=>clsx(s.navLinkTitle, isActive && s.active)}>
            <svg width="38" height="38" className={s.navLinkIcon}>
              <use href="../../img/sprite.svg#icon-currency"></use>
            </svg>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
