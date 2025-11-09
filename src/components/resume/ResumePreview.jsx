import React from 'react';
import { AlertTriangle, Download } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';

const ResumePreview = ({ pdfUrl, isCompiling, error }) => {
  return (
    <div className="w-full lg:w-2/5 flex flex-col pdf-section" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
      <div 
        className="pdf-container surface rounded-lg lg:rounded-none flex items-center justify-center p-2 lg:p-4 m-2 lg:m-4 lg:mt-4"
        style={{ 
          height: 'calc(100vh - 1rem)',
          minHeight: '400px',
          maxHeight: 'calc(100vh - 1rem)'
        }}
      >
        {isCompiling && (
          <LoadingSpinner message="Compiling PDF with your saved data..." size={window.innerWidth < 1024 ? 32 : 48} />
        )}
        
        {error && !isCompiling && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-2 lg:p-4 m-2 lg:m-4 rounded-md w-full h-full overflow-y-auto">
            <div className="flex items-center">
              <AlertTriangle size={window.innerWidth < 1024 ? 20 : 24} className="mr-2 lg:mr-3 flex-shrink-0" />
              <p className="font-bold text-sm lg:text-base">Compilation Failed</p>
            </div>
            <p className="text-xs lg:text-sm mt-1 lg:mt-2 mb-1 lg:mb-2">
              Please check your inputs for special characters. The error from the compiler is shown below:
            </p>
            <pre className="text-xs mt-1 lg:mt-2 p-1 lg:p-2 bg-red-50 rounded whitespace-pre-wrap font-mono break-all max-h-32 lg:max-h-none overflow-y-auto">
              {error}
            </pre> 
          </div>
        )}
        
        {!isCompiling && !error && pdfUrl && (
          <object data={pdfUrl} type="application/pdf" width="100%" height="100%" className="rounded-lg">
            <div className="text-center p-4">
              <p className="text-sm lg:text-base mb-2" style={{ color: 'var(--color-foreground-secondary)' }}>
                Your browser does not support PDFs.
              </p>
              <a href={pdfUrl} className="btn-primary inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium">
                <Download size={16} /> Download PDF
              </a>
            </div>
          </object>
        )}
        
        {!isCompiling && !error && !pdfUrl && (
          <div className="text-center" style={{ color: 'var(--color-foreground-secondary)' }}>
            <p className="text-sm lg:text-base">Your resume preview will appear here.</p>
            <p className="text-xs lg:text-sm">Start typing to see it live!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
