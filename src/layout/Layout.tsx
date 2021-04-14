import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userPreferences } from '~/core/recoil/atoms';
import Menu from '~/layout/Menu';
import LavaSvg from '~/layout/assets/lava';
import lavaAnimation from '~/layout/lavaAnimation';
import useScreen from '~/shared/hooks/useScreen';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  const { theme } = useRecoilValue(userPreferences);
  const isPhone = useScreen('phone');
  console.log('🚀 > isPhone', isPhone);

  useEffect(() => {
    const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
    const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');

    if (theme === 'dark') {
      lightSchemeIcon?.remove();
      document.head.append(darkSchemeIcon as Node);
    } else {
      document.head.append(lightSchemeIcon as Node);
      darkSchemeIcon?.remove();
    }
  }, [theme]);

  useEffect(() => {
    setTimeout(lavaAnimation.start, 1000);
  }, []);

  return (
    <div className="layout">
      <Menu />
      <main>{children}</main>
      {!isPhone && (
        <>
          <div className="effect-wrapper">
            <div className="effect" />
          </div>
          <div className="glass" />
          <div className="svg-wrapper">
            <LavaSvg />
          </div>
        </>
      )}
    </div>
  );
};

export default Layout;
