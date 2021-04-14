import classNames from 'classnames';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/shared/components/Button';
import ThemeSwitcher from '~/shared/components/ThemeSwitcher';

const LINK_START_ANIMATION_TIME = 0.3;

const MobileMenu: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="mobile-menu">
      <Button
        onClick={handleMenuButtonClick}
        className="mobile-menu-button"
        caption={isOpened ? '👍' : '😎'}
      />
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            exit={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={classNames('mobile-items', { opened: isOpened })}
          >
            <ThemeSwitcher />
            <motion.div
              variants={linkVariants}
              initial="hide"
              animate="appear"
              transition={{ delay: LINK_START_ANIMATION_TIME }}
            >
              <Link to="/">
                <Button onClick={handleMenuButtonClick} caption="HOME" />
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hide"
              animate="appear"
              transition={{ delay: LINK_START_ANIMATION_TIME + 0.2 }}
            >
              <Link to="/portfolio">
                <Button onClick={handleMenuButtonClick} caption="PORTFOLIO" />
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hide"
              animate="appear"
              transition={{ delay: LINK_START_ANIMATION_TIME + 0.4 }}
            >
              <Link to="/links">
                <Button onClick={handleMenuButtonClick} caption="Links" />
              </Link>
            </motion.div>
            <motion.div
              variants={linkVariants}
              initial="hide"
              animate="appear"
              transition={{ delay: LINK_START_ANIMATION_TIME + 0.6 }}
            >
              <Link to="/cv">
                <Button onClick={handleMenuButtonClick} caption="CV" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;

const linkVariants: Variants = {
  appear: { y: 0, opacity: 1 },
  hide: { y: 10, opacity: 0 },
};
