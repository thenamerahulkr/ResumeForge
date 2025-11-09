import React from 'react';
import { FileText, Code, Briefcase, Globe, Wrench, Award, Plus, Trash2 } from 'lucide-react';
import CollapsibleSection from '../common/CollapsibleSection';

// Emoji map
const ICONS = {
  name: '👤', email: '✉️', phone: '📱', linkedin: '💼', github: '⚡', portfolio: '🌐', leetcode: '🧩',
  institution: '🏫', duration: '⏳', degree: '🎓', cgpa: '📊', coursework: '📚',
  company: '🏢', position: '💼', location: '📍', achievement: '⭐',
  technologies: '🧪', github_project: '💻', livesite: '🚀', project_desc: '📝',
  expertise: '🎯', languages: '💻', frameworks: '⚙️', tools: '🛠️', professional: '🌟',
  cert_details: '🏅', cert_link: '🔗',
};

// ==================== PERSONAL INFO ====================
export const PersonalInfoForm = ({ data, onChange }) => {
  const handleChange = (field, value) => onChange({ ...data, [field]: value });

  const fields = [
    { placeholder: 'Full Name', value: data.name, field: 'name', type: 'text' },
    { placeholder: 'Email Address', value: data.email, field: 'email', type: 'email' },
    { placeholder: 'Phone Number', value: data.phone, field: 'phone', type: 'tel' },
    { placeholder: 'LinkedIn Profile URL', value: data.linkedin, field: 'linkedin', type: 'url' },
    { placeholder: 'GitHub Profile URL', value: data.github, field: 'github', type: 'url' },
    { placeholder: 'Portfolio Website URL', value: data.portfolio, field: 'portfolio', type: 'url' },
    { placeholder: 'LeetCode Profile URL', value: data.leetcode, field: 'leetcode', type: 'url', fullWidth: true },
  ];

  return (
    <CollapsibleSection title="Personal Information" icon={<FileText size={24} />} defaultOpen={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map((f, i) => (
          <div key={i} className={f.fullWidth ? 'md:col-span-2' : ''}>
            <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}>
              <span>{ICONS[f.field]}</span>{f.placeholder}
            </label>
            <input type={f.type} value={f.value} onChange={(e) => handleChange(f.field, e.target.value)} className="input-field" placeholder={`Enter ${f.placeholder.toLowerCase()}`} />
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

// ==================== EDUCATION ====================
export const EducationForm = ({ data, onChange }) => {
  const add = () => onChange([...data, { institution: '', duration: '', degree: '', cgpa: '', coursework: '' }]);
  const remove = (i) => onChange(data.filter((_, idx) => idx !== i));
  const update = (i, field, value) => onChange(data.map((edu, idx) => (idx === i ? { ...edu, [field]: value } : edu)));

  return (
    <CollapsibleSection title="Education" icon={<Code size={24} />} defaultOpen={true}>
      <button onClick={add} className="btn-primary"><Plus size={16} /> Add Education</button>
      <div className="space-y-6 mt-4">
        {data.map((edu, i) => (
          <div key={i} className="p-4 rounded-xl border-2" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">🎓 Education #{i + 1}</h3>
              {data.length > 1 && <button className="btn-danger" onClick={() => remove(i)}><Trash2 size={16} /></button>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.institution}</span>Institution</label><input className="input-field" placeholder="Enter institution name" value={edu.institution} onChange={(e) => update(i, 'institution', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.duration}</span>Duration</label><input className="input-field" placeholder="e.g., Sep 2020 - May 2024" value={edu.duration} onChange={(e) => update(i, 'duration', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.degree}</span>Degree</label><input className="input-field" placeholder="e.g., B.Tech in Computer Science" value={edu.degree} onChange={(e) => update(i, 'degree', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.cgpa}</span>CGPA/GPA</label><input className="input-field" placeholder="e.g., 8.5/10 or 3.8/4.0" value={edu.cgpa} onChange={(e) => update(i, 'cgpa', e.target.value)} /></div>
            </div>
            <div className="mt-4"><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.coursework}</span>Coursework</label><textarea className="input-field" rows={2} placeholder="Enter relevant coursework (comma-separated)" value={edu.coursework} onChange={(e) => update(i, 'coursework', e.target.value)} style={{ minHeight: '60px' }} /></div>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

// ==================== EXPERIENCE ====================
export const ExperienceForm = ({ data, onChange }) => {
  const add = () => onChange([...data, { company: '', duration: '', position: '', location: '', achievements: [''] }]);
  const remove = (i) => onChange(data.filter((_, idx) => idx !== i));
  const update = (i, field, value) => onChange(data.map((exp, idx) => (idx === i ? { ...exp, [field]: value } : exp)));
  const addAch = (i) => onChange(data.map((exp, idx) => (idx === i ? { ...exp, achievements: [...exp.achievements, ''] } : exp)));
  const updateAch = (i, a, val) => onChange(data.map((exp, idx) => (idx === i ? { ...exp, achievements: exp.achievements.map((x, j) => (j === a ? val : x)) } : exp)));
  const removeAch = (i, a) => onChange(data.map((exp, idx) => (idx === i ? { ...exp, achievements: exp.achievements.filter((_, j) => j !== a) } : exp)));

  return (
    <CollapsibleSection title="Experience" icon={<Briefcase size={24} />} defaultOpen={true}>
      <button onClick={add} className="btn-primary"><Plus size={16} /> Add Experience</button>
      <div className="space-y-6 mt-4">
        {data.map((exp, i) => (
          <div key={i} className="p-4 rounded-xl border-2" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">💼 Experience #{i + 1}</h3>
              {data.length > 1 && <button className="btn-danger" onClick={() => remove(i)}><Trash2 size={16} /></button>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.company}</span>Company</label><input className="input-field" placeholder="Enter company name" value={exp.company} onChange={(e) => update(i, 'company', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.duration}</span>Duration</label><input className="input-field" placeholder="e.g., Jan 2023 - Present" value={exp.duration} onChange={(e) => update(i, 'duration', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.position}</span>Position</label><input className="input-field" placeholder="e.g., Software Engineer" value={exp.position} onChange={(e) => update(i, 'position', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.location}</span>Location</label><input className="input-field" placeholder="e.g., San Francisco, CA" value={exp.location} onChange={(e) => update(i, 'location', e.target.value)} /></div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.achievement}</span>Achievements</label>
              <div className="space-y-4">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-center gap-3">
                    <textarea className="input-field flex-1" placeholder="Describe your achievement or responsibility" value={ach} rows={2} onChange={(e) => updateAch(i, aIdx, e.target.value)} style={{ minHeight: '60px' }} />
                    {exp.achievements.length > 1 && (
                      <button 
                        className="btn-danger" 
                        onClick={() => removeAch(i, aIdx)}
                        style={{
                          minWidth: '40px',
                          height: '40px',
                          padding: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button 
                className="btn-secondary mt-4" 
                onClick={() => addAch(i)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem'
                }}
              >
                <Plus size={16} /> Add Achievement
              </button>
            </div>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

// ==================== PROJECTS ====================
export const ProjectsForm = ({ data, onChange }) => {
  const add = () => onChange([...data, { name: '', technologies: '', github: '', livesite: '', description: [''] }]);
  const remove = (i) => onChange(data.filter((_, idx) => idx !== i));
  const update = (i, field, value) => onChange(data.map((proj, idx) => (idx === i ? { ...proj, [field]: value } : proj)));
  const addDesc = (i) => onChange(data.map((proj, idx) => (idx === i ? { ...proj, description: [...proj.description, ''] } : proj)));
  const updateDesc = (i, d, val) => onChange(data.map((p, idx) => (idx === i ? { ...p, description: p.description.map((x, j) => (j === d ? val : x)) } : p)));
  const removeDesc = (i, d) => onChange(data.map((p, idx) => (idx === i ? { ...p, description: p.description.filter((_, j) => j !== d) } : p)));

  return (
    <CollapsibleSection title="Projects" icon={<Globe size={24} />} defaultOpen={true}>
      <button onClick={add} className="btn-primary"><Plus size={16} /> Add Project</button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {data.map((proj, i) => (
          <div key={i} className="p-4 rounded-xl border-2" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">📝 Project #{i + 1}</h3>
              {data.length > 1 && <button className="btn-danger" onClick={() => remove(i)}><Trash2 size={16} /></button>}
            </div>
            <div className="space-y-4">
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.project_desc}</span>Project Name</label><input className="input-field" placeholder="Enter project name" value={proj.name} onChange={(e) => update(i, 'name', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.technologies}</span>Technologies</label><input className="input-field" placeholder="e.g., React, Node.js, MongoDB" value={proj.technologies} onChange={(e) => update(i, 'technologies', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.github_project}</span>GitHub</label><input className="input-field" placeholder="GitHub repository URL" value={proj.github} onChange={(e) => update(i, 'github', e.target.value)} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.livesite}</span>Live Demo</label><input className="input-field" placeholder="Live demo URL" value={proj.livesite} onChange={(e) => update(i, 'livesite', e.target.value)} /></div>
              <div>
                <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.project_desc}</span>Description</label>
                <div className="space-y-4">
                  {proj.description.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3">
                      <textarea className="input-field flex-1" rows={2} placeholder="Describe the project and your contributions" value={desc} onChange={(e) => updateDesc(i, dIdx, e.target.value)} style={{ minHeight: '60px' }} />
                      {proj.description.length > 1 && (
                        <button 
                          className="btn-danger" 
                          onClick={() => removeDesc(i, dIdx)}
                          style={{
                            minWidth: '40px',
                            height: '40px',
                            padding: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button 
                  className="btn-secondary mt-4" 
                  onClick={() => addDesc(i)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem'
                  }}
                >
                  <Plus size={16} /> Add Description
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

// ==================== SKILLS ====================
export const SkillsForm = ({ data, onChange }) => {
  const handleChange = (f, v) => onChange({ ...data, [f]: v });
  const categories = [
    { field: 'expertise', label: 'Areas of Expertise', icon: ICONS.expertise },
    { field: 'languages', label: 'Programming Languages', icon: ICONS.languages },
    { field: 'frameworks', label: 'Frameworks & Libraries', icon: ICONS.frameworks },
    { field: 'tools', label: 'Developer Tools', icon: ICONS.tools },
    { field: 'professional', label: 'Professional Skills', icon: ICONS.professional },
  ];

  return (
    <CollapsibleSection title="Skills & Expertise" icon={<Wrench size={24} />} defaultOpen={true}>
      <div className="space-y-6">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}>
              <span>{cat.icon}</span>{cat.label}
            </label>
            <textarea className="input-field" rows={2} placeholder={`Enter ${cat.label.toLowerCase()}`} value={data[cat.field]} onChange={(e) => handleChange(cat.field, e.target.value)} style={{ minHeight: '60px' }} />
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};

// ==================== CERTIFICATIONS ====================
export const CertificationsForm = ({ data, onChange }) => {
  const add = () => onChange([...data, { name: '', link: '' }]);
  const remove = (i) => onChange(data.filter((_, idx) => idx !== i));
  const update = (i, f, v) => onChange(data.map((c, idx) => (idx === i ? { ...c, [f]: v } : c)));

  return (
    <CollapsibleSection title="Certifications & Achievements" icon={<Award size={24} />} defaultOpen={true}>
      <button onClick={add} className="btn-primary"><Plus size={16} /> Add Certification</button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {data.map((cert, i) => (
          <div key={i} className="p-4 rounded-xl border-2" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">🏅 Certification #{i + 1}</h3>
              {data.length > 1 && <button className="btn-danger" onClick={() => remove(i)}><Trash2 size={16} /></button>}
            </div>
            <div className="space-y-4">
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.cert_details}</span>Details</label><textarea className="input-field" rows={2} placeholder="e.g., AWS Certified Solutions Architect - Associate" value={cert.name} onChange={(e) => update(i, 'name', e.target.value)} style={{ minHeight: '60px' }} /></div>
              <div><label className="block text-sm font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--color-foreground)' }}><span>{ICONS.cert_link}</span>Link</label><input className="input-field" type="url" placeholder="Certification URL or credential link" value={cert.link} onChange={(e) => update(i, 'link', e.target.value)} /></div>
            </div>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
};
