import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../utils/constants';

/**
 * Custom hook for managing dark mode
 * @returns {Object} - { isDark, toggleTheme }
 */
export const useDarkMode = () => {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (storedTheme) return storedTheme === 'dark';
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};
