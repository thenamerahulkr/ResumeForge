import { useState, useEffect } from 'react';

/**
 * Custom hook for syncing state with localStorage
 * @param {string} key - localStorage key
 * @param {*} initialValue - Initial value if no stored value exists
 * @returns {[*, Function]} - [storedValue, setValue]
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error retrieving from localStorage (${key}):`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error saving to localStorage (${key}):`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
