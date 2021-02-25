import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import lava from './assets/lava.svg';
import Menu from '~/layout/Menu';
import ThemeSwitcher from '~/shared/components/ThemeSwitcher';
import lavaAnimation from '~/layout/lavaAnimation';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  useEffect(() => {
    setTimeout(lavaAnimation.start, 1000);
  });

  return (
    <div className="layout">
      <Menu />
      <main>{children}</main>
      <ThemeSwitcher />
      {/* <div className="effect" /> */}
      <div className="glass" />
      <ReactSVG src={lava} />
    </div>
  );
};

export default Layout;
