import React, { useState, useEffect } from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useLatexCompiler } from '../../hooks/useLatexCompiler';
import { useDebounce } from '../../hooks/useDebounce';
import { generateFullLatex } from '../../utils/latexGenerator';
import { INITIAL_RESUME_DATA, DEFAULT_SECTION_ORDER, STORAGE_KEYS, DEBOUNCE_DELAY } from '../../utils/constants';
import DarkModeToggle from '../common/DarkModeToggle';
import { 
  PersonalInfoForm, 
  EducationForm, 
  ExperienceForm, 
  ProjectsForm, 
  SkillsForm, 
  CertificationsForm 
} from '../forms/AllForms';
import SectionOrderManager from './SectionOrderManager';
import ResumePreview from './ResumePreview';

const ResumeBuilder = () => {
  // State management with localStorage persistence
  const [resumeData, setResumeData] = useLocalStorage(STORAGE_KEYS.RESUME_DATA, INITIAL_RESUME_DATA);
  const [sectionOrder, setSectionOrder] = useLocalStorage(STORAGE_KEYS.SECTION_ORDER, DEFAULT_SECTION_ORDER);
  const [sectionOrderOpen, setSectionOrderOpen] = useState(false);

  // LaTeX compilation
  const { pdfUrl, isCompiling, error, compile, cleanup } = useLatexCompiler();

  // Debounced compilation
  useDebounce(
    () => {
      const latexString = generateFullLatex(resumeData, sectionOrder);
      compile(latexString);
    },
    DEBOUNCE_DELAY,
    [resumeData, sectionOrder]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  // Clear all data
  const clearFormData = () => {
    localStorage.removeItem(STORAGE_KEYS.RESUME_DATA);
    localStorage.removeItem(STORAGE_KEYS.SECTION_ORDER);
    setResumeData(INITIAL_RESUME_DATA);
    setSectionOrder(DEFAULT_SECTION_ORDER);
  };

  // Section renderers
  const renderSection = (sectionType) => {
    switch (sectionType) {
      case 'education':
        return (
          <EducationForm
            key="education"
            data={resumeData.education}
            onChange={(data) => setResumeData({ ...resumeData, education: data })}
          />
        );
      case 'experience':
        return (
          <ExperienceForm
            key="experience"
            data={resumeData.experience}
            onChange={(data) => setResumeData({ ...resumeData, experience: data })}
          />
        );
      case 'projects':
        return (
          <ProjectsForm
            key="projects"
            data={resumeData.projects}
            onChange={(data) => setResumeData({ ...resumeData, projects: data })}
          />
        );
      case 'skills':
        return (
          <SkillsForm
            key="skills"
            data={resumeData.skills}
            onChange={(data) => setResumeData({ ...resumeData, skills: data })}
          />
        );
      case 'certifications':
        return (
          <CertificationsForm
            key="certifications"
            data={resumeData.certifications}
            onChange={(data) => setResumeData({ ...resumeData, certifications: data })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Form Section */}
      <div className="w-full lg:w-3/5 flex flex-col form-section" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="form-container scrollable-content">
          <div className="form-content-wrapper" style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            {/* Header */}
            <div 
              className="flex justify-between items-center mb-4 lg:mb-6 sticky top-0 z-10 p-3 lg:p-4 -m-2" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.25rem'
              }}
            >
              <div className="truncate pr-2">
                <h1 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--color-foreground)', letterSpacing: '-0.02em' }}>
                  CompileCV
                </h1>
                <div className="text-xs lg:text-sm" style={{ color: 'var(--color-foreground-secondary)' }}>
                  <span>Created by </span>
                  <span className="font-semibold">Rahul</span>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <DarkModeToggle />
                {pdfUrl && (
                  <a 
                    href={pdfUrl} 
                    download="resume.pdf" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'white',
                      backgroundColor: 'var(--color-primary)',
                      border: 'none',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Download size={16} /> 
                    <span className="hidden sm:inline">Download</span>
                  </a>
                )}
                <button
                  onClick={clearFormData}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-foreground)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  title="Clear all saved form data"
                >
                  <RefreshCw size={16} />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>
            
            {/* Info Tips */}
            <div 
              className="p- lg:p-4 rounded-xl mb-4" 
              style={{ 
                backgroundColor: 'rgba(34, 197, 94, 0.1)', 
                border: '1px solid rgba(34, 197, 94, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <p className="text-sm" style={{ color: 'var(--color-success)' }}>
                💾 <strong>Auto-Save:</strong> Your data is saved automatically as you type.
              </p>
            </div>

            <div 
              className="p-3 lg:p-4 rounded-xl mb-4" 
              style={{ 
                backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                border: '1px solid rgba(59, 130, 246, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <p className="text-sm" style={{ color: 'var(--color-primary)' }}>
                💡 <strong>Tip:</strong> Use `*text*` for <strong>bold</strong> formatting.
              </p>
            </div>

            {/* Form Sections */}
            <div className="space-y-4 lg:space-y-6 pb-8">
              <SectionOrderManager 
                sectionOrder={sectionOrder}
                setSectionOrder={setSectionOrder}
                isOpen={sectionOrderOpen}
                setIsOpen={setSectionOrderOpen}
              />

              <PersonalInfoForm
                data={resumeData.personalInfo}
                onChange={(data) => setResumeData({ ...resumeData, personalInfo: data })}
              />

              {sectionOrder.map(sectionType => renderSection(sectionType))}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <ResumePreview pdfUrl={pdfUrl} isCompiling={isCompiling} error={error} />
    </div>
  );
};

export default ResumeBuilder;
