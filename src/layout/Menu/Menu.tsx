import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';
import { menuDescription } from '~/core/meta';
import { MenuItem } from '~/core/models';
import useButtonClicks from '~/shared/hooks/useButtonClicks';
import ThemeSwitcher from '~/shared/components/ThemeSwitcher';
import Button from '~/shared/components/Button';
import useScreen from '~/shared/hooks/useScreen';
import './Menu.scss';

const Menu: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [clicksCount, setClicksCount] = useButtonClicks();
  const isPhone = useScreen('phone');

  const handleClick = () => {
    setClicked(true);
    setClicksCount((count) => count + 1);
  };

  return (
    <menu>
      <h1>
        Denis <span className="family-name">Feofilactov</span>
      </h1>
      <p className="role">React frontend developer</p>
      {isPhone && <MobileMenu />}
      {!isPhone && (
        <>
          <ThemeSwitcher />
          <ol>
            {menuDescription.map((item: MenuItem) => (
              <li key={item.id}>
                <NavLink exact className="menu-link" activeClassName="active" to={item.route}>
                  <span className="menu-item-prefix">menu ➭</span>
                  {item.caption}
                </NavLink>
              </li>
            ))}
          </ol>
          <motion.div
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="controls"
          >
            <Button onClick={handleClick}>Button</Button>
            {clicked && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'linear', duration: '0.1' }}
              >
                <p className="info">
                  This button was clicked <span className="info-count">{clicksCount}</span> times
                </p>
                {/* <p>Why this button exists?</p>
            <input /> */}
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </menu>
  );
};

export default Menu;
