import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { menuDescription } from '~/core/meta';
import { MenuItem } from '~/core/models';
import useButtonClicks from '~/shared/hooks/useButtonClicks';
import './Menu.scss';

const Menu: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [clicksCount, setClicksCount] = useButtonClicks();

  const handleClick = () => {
    setClicked(true);
    setClicksCount((count) => count + 1);
  };

  return (
    <menu>
      <h1>d.feofilactov</h1>
      <ol>
        {menuDescription.map((item: MenuItem) => (
          <li key={item.id}>
            <Link to={item.route}>
              <span className="menu-item-prefix">menu $</span>
              {item.caption}
            </Link>
          </li>
        ))}
      </ol>
      <motion.div
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        className="controls"
      >
        <button onClick={handleClick}>Button</button>
        {clicked && (
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <p className="info">
              This button was clicked <span className="info-count">{clicksCount}</span> times
            </p>
            <p>Why this button exists?</p>
            <input />
          </motion.div>
        )}
      </motion.div>
    </menu>
  );
};

export default Menu;