import { useEffect, useState } from 'react';

type ScreenType = 'phone' | 'tablet' | 'desktop' | 'desktop-s' | 'desktop-l';
type Size = { min: number; max: number };

const screens = new Map<ScreenType, Size>([
  ['phone', { min: 0, max: 599 }],
  ['tablet', { min: 600, max: 899 }],
  ['desktop-s', { min: 900, max: 1199 }],
  ['desktop', { min: 1200, max: 1799 }],
  ['desktop-l', { min: 1800, max: Infinity }],
]);

const useScreen = (screen: ScreenType): boolean => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.screen.width);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const size = screens.get(screen);
  if (!size || !width) return false;
  return width > size.min && width < size.max;
};

export default useScreen;
