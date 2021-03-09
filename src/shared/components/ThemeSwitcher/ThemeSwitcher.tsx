import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Theme } from '~/core/models/user';
import { userPreferences } from '~/core/recoil/atoms';
import PlanetPng from '~/shared/assets/planet.png';
import SunPng from '~/shared/assets/bulb.png';
import './ThemeSwitcher.scss';

const ThemeSwitcher: React.FC = () => {
  const [preferences, setPreferences] = useRecoilState(userPreferences);
  const { matches } = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    console.log(preferences.theme);
    if (preferences.theme) return;
    if (matches) handleSwitch('dark');
    else handleSwitch('light');
  }, [matches]);

  useEffect(() => {
    document.documentElement.className = '';
    if (preferences.theme) document.documentElement.classList.add(preferences.theme);
  }, [preferences.theme]);

  const handleSwitch = (theme: Theme) => {
    setPreferences((prevPreferences) => ({ ...prevPreferences, theme }));
  };

  return (
    <div className="theme-switcher">
      <button
        className={classNames({ active: preferences.theme === 'light' })}
        onClick={() => handleSwitch('light')}
      >
        <div className="light-area" />
        <img src={SunPng} alt="light" />
      </button>
      <button
        className={classNames({ active: preferences.theme === 'dark' })}
        onClick={() => handleSwitch('dark')}
      >
        <img src={PlanetPng} alt="dark" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
