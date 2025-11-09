import React from 'react';
import { Loader } from 'lucide-react';

const LoadingSpinner = ({ message = 'Loading...', size = 48 }) => {
  return (
    <div className="text-center" style={{ color: 'var(--color-foreground-secondary)' }}>
      <Loader size={size} className="animate-spin mb-4 mx-auto" />
      <p className="text-base">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
