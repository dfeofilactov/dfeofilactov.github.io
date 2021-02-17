import React from 'react';
import { Link } from 'react-router-dom';
import { menuDescription } from '~/core/meta';
import { MenuItem } from '~/core/models';
import './Menu.scss';

const Menu: React.FC = () => {
  return (
    <div className="menu">
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
      <div className="controls">
        <button>Button</button>
        <p className="info">
          This button was clicked <span className="info-count">1293</span> times
        </p>
        <p>Why this button exists?</p>
        <input />
      </div>
    </div>
  );
};

export default Menu;
