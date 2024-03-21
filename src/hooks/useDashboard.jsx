import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const useDashboard = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1400px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  };
};
