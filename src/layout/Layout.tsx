import React, { useEffect } from 'react';
import Menu from '~/layout/Menu';
import ThemeSwitcher from '~/shared/components/ThemeSwitcher';
import lavaAnimation from '~/layout/lavaAnimation';
import './Layout.scss';
import LavaSvg from '~/layout/assets/lava';

const Layout: React.FC = ({ children }) => {
  useEffect(() => {
    setTimeout(lavaAnimation.start, 1000);
  });

  return (
    <div className="layout">
      <Menu />
      <main>{children}</main>
      <ThemeSwitcher />
      <div className="effect" />
      <div className="glass" />
      <LavaSvg />
      {/* <ReactSVG src={lava} /> */}
    </div>
  );
};

export default Layout;
