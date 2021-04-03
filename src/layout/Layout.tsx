import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Menu from '~/layout/Menu';
import LavaSvg from '~/layout/animations/lava';
import lavaAnimation from '~/layout/animations/lavaAnimation';
import './Layout.scss';
import { userPreferences } from '~/core/recoil/atoms';

const Layout: React.FC = ({ children }) => {
  const { theme } = useRecoilValue(userPreferences);

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
      <div className="effect-wrapper">
        <div className="effect" />
      </div>
      <div className="glass" />
      <div className="svg-wrapper">
        <LavaSvg />
      </div>
    </div>
  );
};

export default Layout;
