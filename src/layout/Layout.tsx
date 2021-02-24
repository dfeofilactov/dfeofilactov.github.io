import React from 'react';
import texture from './assets/texture.png';
import Menu from '~/layout/Menu';
import ThemeSwitcher from '~/shared/components/ThemeSwitcher';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Menu />
      <main>{children}</main>
      <ThemeSwitcher />
      <img src={texture} alt="texture" />
    </div>
  );
};

export default Layout;
