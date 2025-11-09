import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './components/layout/LandingPage';
import ResumeBuilder from './components/resume/ResumeBuilder';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
