// Application Constants

export const DEFAULT_SECTION_ORDER = [
  'education',
  'projects',
  'experience',
  'skills',
  'certifications'
];

export const SECTION_NAMES = {
  education: 'Education',
  experience: 'Experience',
  projects: 'Projects',
  skills: 'Skills',
  certifications: 'Certifications & Achievements'
};

export const INITIAL_RESUME_DATA = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    portfolio: '',
    leetcode: ''
  },
  education: [{
    institution: '',
    duration: '',
    degree: '',
    cgpa: '',
    coursework: ''
  }],
  experience: [{
    company: '',
    duration: '',
    position: '',
    location: '',
    achievements: ['']
  }],
  projects: [{
    name: '',
    technologies: '',
    github: '',
    livesite: '',
    description: ['']
  }],
  skills: {
    expertise: '',
    languages: '',
    frameworks: '',
    tools: '',
    professional: ''
  },
  certifications: [{
    name: '',
    link: ''
  }]
};

export const LATEX_API_URL = import.meta.env.VITE_LATEX_API_URL || 'https://latex.ytotech.com/builds/sync';

export const DEBOUNCE_DELAY = 1000; // milliseconds

export const STORAGE_KEYS = {
  RESUME_DATA: 'resumeData',
  SECTION_ORDER: 'sectionOrder',
  THEME: 'theme'
};
