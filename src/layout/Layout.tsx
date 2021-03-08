import React, { useEffect } from 'react';
import Menu from '~/layout/Menu';
import LavaSvg from '~/layout/assets/lava';
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
