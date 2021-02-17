import React from 'react';
import Menu from '~/layout/Menu';
import ThemeSwitcher from '~/shared/components/ThemeSwitcher';
import './Layout.scss';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Menu />
      <main>{children}</main>
      <ThemeSwitcher />
    </div>
  );
};

export default Layout;
