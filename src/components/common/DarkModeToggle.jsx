import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isToggling, setIsToggling] = useState(false);

  const handleToggle = () => {
    if (isToggling) return;
    setIsToggling(true);
    toggleTheme();
    setTimeout(() => setIsToggling(false), 150);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isToggling}
      style={{ 
        padding: '0.5rem',
        borderRadius: '0.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        cursor: 'pointer',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isToggling ? 0.7 : 1
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      }}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun size={20} style={{ color: '#fbbf24' }} />
      ) : (
        <Moon size={20} style={{ color: '#64748b' }} />
      )}
    </button>
  );
};

export default DarkModeToggle;
