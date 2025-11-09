# CompileCV - Vite Migration

A modern, refactored version of CompileCV built with Vite for blazing-fast development and optimized production builds.

## 🚀 What Changed?

### Architecture Improvements
- **Monolithic → Modular**: Broke down 1200+ line `Resume.js` into 15+ focused components
- **CRA → Vite**: 10-100x faster dev server and build times
- **Better Organization**: Clear separation of concerns with dedicated folders for components, hooks, utils, and context

### New Structure
```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── forms/           # Form components for each resume section
│   ├── resume/          # Resume-specific components
│   └── layout/          # Layout and page components
├── hooks/               # Custom React hooks
├── utils/               # Pure utility functions
├── context/             # React context providers
└── styles/              # Global styles
```

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Features Preserved

✅ All original features working:
- Resume form sections (Personal Info, Education, Experience, Projects, Skills, Certifications)
- Drag-and-drop section ordering
- Auto-save to localStorage
- Live LaTeX PDF generation
- Dark/light theme support
- Real-time preview
- Reset functionality

## 🏗️ Component Breakdown

### Form Components (`src/components/forms/`)
Each section has its own component with controlled inputs:
- `PersonalInfoForm.jsx` - Name, email, phone, social links
- `EducationForm.jsx` - Institution, degree, CGPA, coursework
- `ExperienceForm.jsx` - Company, position, achievements
- `ProjectsForm.jsx` - Project name, tech stack, links, descriptions
- `SkillsForm.jsx` - Multiple skill categories
- `CertificationsForm.jsx` - Certifications with optional links

### Resume Components (`src/components/resume/`)
- `ResumeBuilder.jsx` - Main container, orchestrates all forms
- `ResumePreview.jsx` - PDF preview with loading/error states
- `SectionOrderManager.jsx` - Drag-and-drop section reordering

### Common Components (`src/components/common/`)
- `CollapsibleSection.jsx` - Expandable/collapsible wrapper
- `DarkModeToggle.jsx` - Theme switcher button
- `LoadingSpinner.jsx` - Reusable loading indicator

## 🔧 Custom Hooks

### `useLocalStorage(key, initialValue)`
Syncs state with localStorage automatically.

```javascript
const [data, setData] = useLocalStorage('key', defaultValue);
```

### `useLatexCompiler()`
Handles LaTeX compilation with the external API.

```javascript
const { pdfUrl, isCompiling, error, compile, cleanup } = useLatexCompiler();
```

### `useDebounce(callback, delay, dependencies)`
Debounces function calls (used for auto-compile).

```javascript
useDebounce(() => compile(latex), 1000, [resumeData]);
```

### `useDarkMode()`
Manages theme state with system preference detection.

```javascript
const { isDark, toggleTheme } = useDarkMode();
```

## 🛠️ Utilities

### `latexGenerator.js`
Pure functions for generating LaTeX code:
- `generateFullLatex(resumeData, sectionOrder)` - Main generator
- `generateHeader(personalInfo)` - Header section
- `generateEducationSection(education)` - Education section
- `generateExperienceSection(experience)` - Experience section
- `generateProjectsSection(projects)` - Projects section
- `generateSkillsSection(skills)` - Skills section
- `generateCertificationsSection(certifications)` - Certifications section

### `latexEscaper.js`
- `escapeLatex(str)` - Escapes special LaTeX characters
- `ensureHttpProtocol(url)` - Adds https:// if missing

### `constants.js`
All application constants in one place:
- `INITIAL_RESUME_DATA` - Default form data
- `DEFAULT_SECTION_ORDER` - Default section order
- `STORAGE_KEYS` - localStorage keys
- `LATEX_API_URL` - API endpoint
- `DEBOUNCE_DELAY` - Compilation delay

## 🎨 Styling

All styles are in `src/styles/index.css` using CSS custom properties for theming:

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-primary: #3b82f6;
  /* ... */
}

[data-theme="dark"] {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-primary: #60a5fa;
  /* ... */
}
```

## 🔄 State Flow

```
ResumeBuilder (Parent)
    ├── resumeData (state)
    ├── sectionOrder (state)
    │
    ├──> PersonalInfoForm
    │       └── onChange={(data) => setResumeData({...resumeData, personalInfo: data})}
    │
    ├──> EducationForm
    │       └── onChange={(data) => setResumeData({...resumeData, education: data})}
    │
    ├──> ExperienceForm
    │       └── onChange={(data) => setResumeData({...resumeData, experience: data})}
    │
    ├──> ProjectsForm
    │       └── onChange={(data) => setResumeData({...resumeData, projects: data})}
    │
    ├──> SkillsForm
    │       └── onChange={(data) => setResumeData({...resumeData, skills: data})}
    │
    ├──> CertificationsForm
    │       └── onChange={(data) => setResumeData({...resumeData, certifications: data})}
    │
    ├──> SectionOrderManager
    │       └── setSectionOrder={(order) => setSectionOrder(order)}
    │
    └──> ResumePreview
            └── pdfUrl, isCompiling, error (from useLatexCompiler)
```

## 🌍 Environment Variables

Create a `.env` file in the root:

```env
VITE_LATEX_API_URL=https://latex.ytotech.com/builds/sync
VITE_APP_NAME=CompileCV
VITE_APP_VERSION=2.0.0
```

**Note**: Vite requires `VITE_` prefix for client-side variables.

## 📝 Path Aliases

Configured in `vite.config.js`:

```javascript
'@': './src'
'@components': './src/components'
'@hooks': './src/hooks'
'@utils': './src/utils'
'@context': './src/context'
'@styles': './src/styles'
```

Usage:
```javascript
import { useLocalStorage } from '@hooks/useLocalStorage';
import { generateFullLatex } from '@utils/latexGenerator';
```

## 🚀 Performance Improvements

- **Vite HMR**: Instant hot module replacement
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Removes unused code
- **Optimized Builds**: Rollup-based production builds
- **Fast Refresh**: Preserves component state during edits

## 🔍 Debugging

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm run preview
# Open http://localhost:4173
```

### Common Issues

**Issue**: Module not found
- Check import paths use `@` aliases correctly
- Ensure all dependencies are installed

**Issue**: Environment variables not working
- Prefix with `VITE_`
- Restart dev server after changes

**Issue**: Build fails
- Check for CRA-specific code
- Verify all imports are correct

## 📊 Bundle Size

Vite optimizes bundle size automatically:
- Lazy loading for routes
- Tree shaking for unused code
- Minification and compression
- CSS code splitting

## 🎓 Learning Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)

## 👨‍💻 Development

### Adding a New Form Section

1. Create component in `src/components/forms/NewSectionForm.jsx`
2. Add to `INITIAL_RESUME_DATA` in `constants.js`
3. Add generator function in `latexGenerator.js`
4. Import and render in `ResumeBuilder.jsx`

### Adding a New Hook

1. Create in `src/hooks/useNewHook.js`
2. Export the hook function
3. Import where needed

### Modifying Styles

Edit `src/styles/index.css` - all theme variables are at the top.

## 📄 License

Same as original CompileCV project.

## 🙏 Credits

Original project by [Rahul](https://www.linkedin.com/in/thenamerahulkr/)
Refactored to Vite architecture for improved developer experience.
