import React from 'react';
import { NavLink } from 'react-router-dom';
import useResize from '../../hooks/useResize';

import s from './NavBar.module.css';

const NavBar = () => {
  const screenWidth = useResize().windowWidth;

  //? className={({ isActive }) => clsx(s.navLinkTitle, s.navLinkIcon isActive && s.active)}

  //? поки не зрозумів чому не додається isActive
  
  return (
    <div className={s.navLinkContainer}>
      <div className={s.navLinkWrapper}>
      {screenWidth < 768 ? (
        <NavLink to="home" className={s.navLinkTitle}>
          <svg width="38" height="38" className={s.navLinkIcon}>
            <use href="../../img/sprite.svg#icon-home"></use>
          </svg>
        </NavLink>
        ) : (
            <NavLink to="home" className={s.navLinkTitle}>
              <svg width="18" height="18" className={s.navLinkIcon}>
                <use href="../../img/sprite.svg#icon-home"></use>
              </svg>
              Home
            </NavLink>
            )
    }

        {screenWidth < 768 ? (
        <NavLink to="statistics"  className={s.navLinkTitle}>
          <svg width="38" height="38" className={s.navLinkIcon}>
            <use href="../../img/sprite.svg#icon-statistics"></use>
          </svg>
        </NavLink>
        ) : (<NavLink to="statistics" className={s.navLinkTitle}>
        <svg width="18" height="18" className={s.navLinkIcon}>
          <use href="../../img/sprite.svg#icon-statistics"></use>
        </svg>
        Statistics
      </NavLink>)
    }

        {screenWidth < 768 && (
          <NavLink to="/currency" className={s.navLinkTitle}>
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
