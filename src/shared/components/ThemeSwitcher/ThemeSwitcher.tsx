import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Theme } from '~/core/models/user';
import { userPreferences } from '~/core/recoil/atoms';
import './ThemeSwitcher.scss';

const ThemeSwitcher: React.FC = () => {
  const [preferences, setPreferences] = useRecoilState(userPreferences);

  useEffect(() => {
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${preferences.theme}`);
  }, [preferences.theme]);

  const handleSwitch = (theme: Theme) => {
    setPreferences((prevPreferences) => ({ ...prevPreferences, theme }));
  };

  return (
    <div className="theme-switcher">
      <button onClick={() => handleSwitch('dark')}>dark theme</button>
      <button onClick={() => handleSwitch('light')}>light theme</button>
    </div>
  );
};

export default ThemeSwitcher;
