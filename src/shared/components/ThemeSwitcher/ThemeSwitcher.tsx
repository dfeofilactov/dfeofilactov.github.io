import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Theme } from '~/core/models/user';
import { userPreferences } from '~/core/recoil/atoms';
import PlanetPng from '~/shared/assets/planet.png';
import SunPng from '~/shared/assets/bulb.png';
import './ThemeSwitcher.scss';

const ThemeSwitcher: React.FC = () => {
  const [preferences, setPreferences] = useRecoilState(userPreferences);
  const { matches } = window.matchMedia('(prefers-color-scheme: dark)');

  const iconsControls = useAnimation();

  useEffect(() => {
    if (preferences.theme) return;
    if (matches) handleSwitch('dark');
    else handleSwitch('light');
  }, [matches]);

  useEffect(() => {
    document.documentElement.className = '';
    if (!preferences.theme) return;

    const html = document.querySelector('html');
    if (html) html.dataset.theme = preferences.theme;

    document.documentElement.classList.add(preferences.theme);
    iconsControls.start(preferences.theme as string);
  }, [preferences.theme]);

  const handleSwitch = (theme?: Theme) => {
    if (!theme) {
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        theme: preferences.theme === 'dark' ? 'light' : 'dark',
      }));
    } else setPreferences((prevPreferences) => ({ ...prevPreferences, theme }));
  };

  return (
    <div className="theme-switcher">
      <button
        className={classNames({ active: preferences.theme === 'light' })}
        onClick={() => handleSwitch()}
      >
        <div className="light-area" />
        <div className="theme-icons-wrapper">
          <motion.div
            variants={iconsVariants}
            initial={preferences.theme as string}
            animate={iconsControls}
            transition={{ delay: 0.2 }}
            className="icons"
          >
            <img src={SunPng} alt="light" />
            <img src={PlanetPng} alt="dark" />
          </motion.div>
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;

const iconsVariants: Variants = {
  dark: { y: 0 },
  light: { y: -40 },
};
