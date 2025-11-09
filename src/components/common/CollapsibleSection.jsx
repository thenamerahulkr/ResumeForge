import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CollapsibleSection = ({ title, icon, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleSection = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div 
      className="mb-6 overflow-hidden"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: '1.25rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
      }}
    >
      <button
        onClick={toggleSection}
        className="w-full flex justify-between items-center text-left font-bold text-lg"
        style={{ 
          color: 'var(--color-foreground)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: 'transparent',
          padding: '1.5rem 1.25rem',
          borderTopLeftRadius: '1.25rem',
          borderTopRightRadius: '1.25rem',
          borderBottomLeftRadius: isOpen ? '0' : '1.25rem',
          borderBottomRightRadius: isOpen ? '0' : '1.25rem',
          border: 'none',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-surface-secondary)';
          e.currentTarget.parentElement.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.15)';
          e.currentTarget.parentElement.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.parentElement.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
          e.currentTarget.parentElement.style.transform = 'translateY(0)';
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="flex-shrink-0 p-2 rounded-lg" 
            style={{ 
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              transition: 'all 0.3s'
            }}
          >
            {React.cloneElement(icon, { 
              size: 24,
              style: { color: 'var(--color-primary)' }
            })}
          </div>
          <span className="truncate">{title}</span>
        </div>
        <div 
          className="flex-shrink-0"
          style={{
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <ChevronDown
            size={22}
            strokeWidth={2.5}
            style={{
              color: 'var(--color-primary)',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </div>
      </button>
      <div
        style={{
          maxHeight: isOpen ? '5000px' : '0px',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          overflow: isOpen ? 'visible' : 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out'
        }}
      >
        <div 
          style={{ 
            backgroundColor: 'var(--color-surface)',
            borderBottomLeftRadius: '1.25rem',
            borderBottomRightRadius: '1.25rem',
            padding: '1.75rem 1.25rem'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
