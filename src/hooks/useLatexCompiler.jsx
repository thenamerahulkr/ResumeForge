import { useState, useCallback } from 'react';
import { LATEX_API_URL } from '../utils/constants';

/**
 * Custom hook for compiling LaTeX to PDF
 * @returns {Object} - { pdfUrl, isCompiling, error, compile, cleanup }
 */
export const useLatexCompiler = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isCompiling, setIsCompiling] = useState(false);
  const [error, setError] = useState('');

  const compile = useCallback(async (latexString) => {
    setIsCompiling(true);
    setError('');

    try {
      const response = await fetch(LATEX_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          compiler: 'pdflatex',
          resources: [{ path: 'main.tex', content: latexString }]
        })
      });

      if (!response.ok) {
        let errorMessage = `API Error: ${response.status} ${response.statusText}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.log || errorData.message || JSON.stringify(errorData);
        } catch (e) {
          const textError = await response.text();
          if (textError) errorMessage = textError;
        }
        throw new Error(errorMessage);
      }

      const pdfBlob = await response.blob();
      
      // Revoke old URL to prevent memory leaks
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
      
      const newPdfUrl = URL.createObjectURL(pdfBlob) + '#view=FitH&toolbar=0';
      setPdfUrl(newPdfUrl);
      
    } catch (err) {
      console.error('Compilation failed:', err);
      setError(err.message);
      setPdfUrl(null);
    } finally {
      setIsCompiling(false);
    }
  }, [pdfUrl]);

  const cleanup = useCallback(() => {
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }
  }, [pdfUrl]);

  return { pdfUrl, isCompiling, error, compile, cleanup };
};
