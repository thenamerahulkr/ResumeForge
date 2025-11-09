import { escapeLatex, ensureHttpProtocol } from './latexEscaper';

/**
 * Generates LaTeX document preamble with all required packages and commands
 */
const getDocumentPreamble = () => {
  return `\\documentclass[letterpaper,11pt]{article}
\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage{xcolor}

% Single hyperref package with proper configuration
\\usepackage[
    colorlinks=true,
    linkcolor=black,
    citecolor=black,
    filecolor=black,
    urlcolor=blue,
    pdfborder={0 0 0},
    unicode=true,
    breaklinks=true
]{hyperref}

\\input{glyphtounicode}

\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\pdfgentounicode=1

% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProject}[4]{
  \\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#3}} \\\\
        \\footnotesize{\\textit{#2}} & \\footnotesize{#4}
    \\end{tabular*}
    \\vspace{-4.4mm}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-8pt}}

\\addtolength{\\topmargin}{-12pt}
\\addtolength{\\textheight}{24pt}`;
};

/**
 * Generates the header section with personal information
 */
export const generateHeader = (personalInfo) => {
  const { name, email, phone, linkedin, github, portfolio, leetcode } = personalInfo;
  
  const contactLinks = [];
  
  if (email) {
    contactLinks.push(`\\faIcon{envelope} \\href{mailto:${email}}{\\color{black}${escapeLatex(email)}}`);
  }
  if (phone) {
    contactLinks.push(`\\faIcon{phone} \\href{tel:${phone.replace(/[^\d+]/g, '')}}{\\color{black}${escapeLatex(phone)}}`);
  }
  if (linkedin) {
    contactLinks.push(`\\faIcon{linkedin} \\href{${ensureHttpProtocol(linkedin)}}{\\color{black}LinkedIn}`);
  }
  if (github) {
    contactLinks.push(`\\faIcon{github} \\href{${ensureHttpProtocol(github)}}{\\color{black}GitHub}`);
  }
  if (portfolio) {
    contactLinks.push(`\\faIcon{code} \\href{${ensureHttpProtocol(portfolio)}}{\\color{black}Portfolio}`);
  }
  if (leetcode) {
    contactLinks.push(`\\faIcon{code-branch} \\href{${ensureHttpProtocol(leetcode)}}{\\color{black}LeetCode}`);
  }

  const contactSection = contactLinks.join(' \\hspace{3mm} ');

  return `\\begin{center}
    \\textbf{\\Huge \\scshape ${escapeLatex(name) || 'Your Name'}} \\\\ \\vspace{8pt}
    \\small 
    ${contactSection}
\\end{center}

\\vspace{-8pt}`;
};

/**
 * Generates the education section
 */
export const generateEducationSection = (education) => {
  if (!education || !education.some(e => e && e.institution)) return '';
  
  const entries = education.filter(e => e.institution).map(edu => {
    const coursework = edu.coursework ? 
      `\\resumeItemListStart\\item{\\textit{Relevant Coursework:} ${escapeLatex(edu.coursework)}}\\resumeItemListEnd` : '';
    
    return `\\resumeSubheading
      {${escapeLatex(edu.institution)}}{${escapeLatex(edu.duration)}}
      {${escapeLatex(edu.degree)}}{${edu.cgpa ? `\\textbf{CGPA: ${escapeLatex(edu.cgpa)}}` : ''}}
      ${coursework}`;
  }).join('\\vspace{-7pt}\n');
  
  return `\\section{Education}
    \\resumeSubHeadingListStart
    ${entries}
    \\resumeSubHeadingListEnd`;
};

/**
 * Generates the experience section
 */
export const generateExperienceSection = (experience) => {
  if (!experience || !experience.some(e => e && e.company)) return '';
  
  const entries = experience.filter(e => e.company).map(exp => {
    const achievements = exp.achievements.filter(a => a.trim() !== '');
    const achievementsList = achievements.length > 0 ? 
      `\\resumeItemListStart
        ${achievements.map(ach => `\\resumeItem{${escapeLatex(ach)}}`).join('\n')}
      \\resumeItemListEnd` : '';
    
    return `\\resumeSubheading
      {${escapeLatex(exp.company)}}{${escapeLatex(exp.duration)}}
      {${escapeLatex(exp.position)}}{${escapeLatex(exp.location)}}
      ${achievementsList}`;
  }).join('');
  
  return `\\section{Experience}
    \\resumeSubHeadingListStart
    ${entries}
    \\resumeSubHeadingListEnd`;
};

/**
 * Generates the projects section
 */
export const generateProjectsSection = (projects) => {
  if (!projects || !Array.isArray(projects) || !projects.some(p => p && p.name)) return '';
  
  const projectEntries = projects
    .filter(proj => proj && proj.name && proj.name.trim() !== '')
    .map(proj => {
      const descriptions = (proj.description || []).filter(desc => 
        desc && typeof desc === 'string' && desc.trim() !== ''
      );
      
      const links = [];
      if (proj.github && proj.github.trim() !== '') {
        links.push(`\\href{${ensureHttpProtocol(proj.github)}}{\\textcolor{blue}{(GitHub)}}`);
      }
      if (proj.livesite && proj.livesite.trim() !== '') {
        links.push(`\\href{${ensureHttpProtocol(proj.livesite)}}{\\textcolor{blue}{(Live Site)}}`);
      }
      const linkString = links.join(' ');
      
      const techWithLinks = proj.technologies ? 
        `${escapeLatex(proj.technologies)}${linkString ? ' ' + linkString : ''}` : 
        linkString;
      
      const descriptionList = descriptions.length > 0 ? 
        `\\resumeItemListStart\n${descriptions.map(desc => `\\resumeItem{${escapeLatex(desc)}}`).join('\n')}\n\\resumeItemListEnd` : '';
      
      return `\\resumeProject
        {${escapeLatex(proj.name || '')}}{${techWithLinks}}{}{}
        ${descriptionList}`;
    }).join('\n');

  return `\\section{Projects}
    \\resumeSubHeadingListStart
    ${projectEntries}
    \\resumeSubHeadingListEnd`;
};

/**
 * Generates the skills section
 */
export const generateSkillsSection = (skills) => {
  const skillEntries = Object.entries(skills)
    .filter(([, value]) => value && value.trim() !== '')
    .map(([key, value]) => 
      `\\textbf{${escapeLatex(key.charAt(0).toUpperCase() + key.slice(1))}}{: ${escapeLatex(value)}}`
    );

  if (skillEntries.length === 0) return '';
  
  return `\\section{Skills}
    \\begin{itemize}[leftmargin=0.15in, label={}]
        \\small{\\item{
            ${skillEntries.join(' \\\\\n\\vspace{3pt}\n')}
        }}
    \\end{itemize}`;
};

/**
 * Generates the certifications section
 */
export const generateCertificationsSection = (certifications) => {
  const validCerts = certifications.filter(c => c && c.name && c.name.trim() !== '');
  if (validCerts.length === 0) return '';
  
  const certEntries = validCerts.map(cert => {
    const certName = escapeLatex(cert.name);
    const certLink = cert.link && cert.link.trim() !== '' ? 
      `\\href{${ensureHttpProtocol(cert.link)}}{\\textcolor{blue}{(Link)}}` : '';
    
    const certText = certLink ? `${certName} ${certLink}` : certName;
    return `\\resumeItem{${certText}}`;
  }).join('\\vspace{4pt}\n');

  return `\\vspace{-12pt}
    \\section{Certifications \\& Achievements}
    \\begin{itemize}[leftmargin=0.15in, label={}]
        \\item{
            \\begin{itemize}[leftmargin=0.15in, itemsep=-2pt]
                ${certEntries}
            \\end{itemize}
        }
    \\end{itemize}`;
};

/**
 * Main function to generate complete LaTeX document
 * @param {Object} resumeData - Complete resume data
 * @param {Array} sectionOrder - Order of sections to render
 * @returns {string} - Complete LaTeX document
 */
export const generateFullLatex = (resumeData, sectionOrder) => {
  const preamble = getDocumentPreamble();
  const header = generateHeader(resumeData.personalInfo);
  
  const sectionGenerators = {
    education: () => generateEducationSection(resumeData.education),
    experience: () => generateExperienceSection(resumeData.experience),
    projects: () => generateProjectsSection(resumeData.projects),
    skills: () => generateSkillsSection(resumeData.skills),
    certifications: () => generateCertificationsSection(resumeData.certifications)
  };
  
  const sections = sectionOrder
    .filter(sectionId => sectionGenerators[sectionId] && resumeData[sectionId])
    .map(sectionId => sectionGenerators[sectionId]())
    .filter(Boolean)
    .join('\n\\vspace{-8pt}\n');

  const documentBody = `
\\addtolength{\\topmargin}{-12pt}
\\addtolength{\\textheight}{24pt}
\\begin{document}
${header}
\\vspace{-8pt}
${sections}
\\end{document}
    `;

  return preamble + documentBody;
};
