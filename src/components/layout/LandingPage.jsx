import React from 'react';
import { FileCode2, Zap, Download, ArrowRight, Check, Code2, Shield, Palette, FileJson } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from '../common/DarkModeToggle';


const LandingPage = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/builder');
  };
  const features = [
    {
      icon: FileJson,
      title: "JSON-Based Editor",
      description: "Simple JSON format makes it easy to version control your resume"
    },
    {
      icon: Zap,
      title: "Instant Preview",
      description: "See your changes in real-time as you edit your content"
    },
    {
      icon: Shield,
      title: "ATS Optimized",
      description: "Designed to pass all major applicant tracking systems"
    },
    {
      icon: Palette,
      title: "Customizable",
      description: "Choose from multiple professional templates and themes"
    },
    {
      icon: Code2,
      title: "LaTeX Power",
      description: "Full LaTeX control for advanced users and custom styling"
    },
    {
      icon: Download,
      title: "Export Anywhere",
      description: "Download as PDF, PNG, or share a live link"
    }
  ];

  const benefits = [
    "ATS-optimized formatting",
    "Real-time preview",
    "Professional LaTeX styling",
    "Dark/Light mode support",
    "Responsive design",
    "No watermarks"
  ];



  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'var(--color-background)', 
        borderBottom: '1px solid var(--color-border)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(var(--color-background-rgb), 0.8)',
        borderRadius: '0 0 1.25rem 1.25rem'
      }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '5rem' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <FileCode2 size={28} style={{ color: 'var(--color-primary)' }} />
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-foreground)', letterSpacing: '-0.02em' }}>
                CompileCV
              </h1>
            </div>
            
            {/* Nav Links + Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="md:flex">
                <a 
                  href="#features" 
                  style={{ 
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--color-foreground-secondary)', 
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}
                >
                  Features
                </a>
                <a 
                  href="#preview" 
                  style={{ 
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--color-foreground-secondary)', 
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}
                >
                  Preview
                </a>
              </nav>
              
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4rem 1rem' }}>
        {/* Gradient Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            width: '24rem', 
            height: '24rem', 
            background: 'var(--color-primary)', 
            opacity: 0.05, 
            borderRadius: '50%', 
            filter: 'blur(80px)' 
          }} />
          <div style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            width: '24rem', 
            height: '24rem', 
            background: 'var(--color-primary)', 
            opacity: 0.05, 
            borderRadius: '50%', 
            filter: 'blur(80px)' 
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Badge */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.5rem 1rem', 
                borderRadius: '9999px', 
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 500, 
                  color: 'var(--color-primary)', 
                  letterSpacing: '0.05em', 
                  textTransform: 'uppercase'
                }}>
                  Professional Resume Builder
                </span>
              </div>
            </div>

            {/* Heading */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                fontWeight: 700, 
                letterSpacing: '-0.02em', 
                lineHeight: 1.1,
                color: 'var(--color-foreground)'
              }}>
                Build Beautiful
                <span style={{ 
                  display: 'block', 
                  background: 'linear-gradient(to right, var(--color-primary), var(--color-primary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  LaTeX Resumes
                </span>
              </h1>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'var(--color-foreground-secondary)', 
                maxWidth: '42rem', 
                margin: '0 auto', 
                lineHeight: 1.6
              }}>
                Create stunning, ATS-friendly resumes with the power of LaTeX. No template limits. No design skills required.
              </p>
            </div>
            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <button
                  onClick={handleGetStarted}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'white',
                    backgroundColor: 'var(--color-primary)',
                    border: 'none',
                    borderRadius: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Start Building
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://drive.google.com/drive/folders/1ShZ_sZsDCHE_S-z87gADFLV-9WXtYJLY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-foreground)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}>
                    View Demo
                  </button>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '2rem', 
              paddingTop: '3rem', 
              borderTop: '1px solid var(--color-border)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-foreground)' }}>10K+</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>Resumes Created</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-foreground)' }}>98%</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>ATS Pass Rate</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-foreground)' }}>24/7</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '4rem 1rem', backgroundColor: 'var(--color-background)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-foreground)' }}>
                Powerful Features
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-foreground-secondary)', maxWidth: '42rem', margin: '0 auto' }}>
                Everything you need to create a professional resume
              </p>
            </div>

            {/* Features Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      borderRadius: '1rem',
                      padding: '1.5rem',
                      transition: 'all 0.3s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(59, 130, 246, 0.4)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ 
                        display: 'inline-flex', 
                        padding: '0.75rem', 
                        borderRadius: '0.75rem', 
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                        width: 'fit-content'
                      }}>
                        <Icon size={24} style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-foreground)' }}>
                        {feature.title}
                      </h3>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-foreground-secondary)' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--color-background)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-foreground)' }}>
                Built with Modern Stack
              </h2>
              <p style={{ color: 'var(--color-foreground-secondary)' }}>
                Using cutting-edge technologies for the best experience
              </p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              {['React', 'Vite', 'LaTeX', 'JavaScript', 'Framer Motion', 'Lucide Icons'].map((tech, index) => (
                <div
                  key={index}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'var(--color-foreground)',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section id="preview" style={{ padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'var(--color-foreground)' }}>
                See It in Action
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--color-foreground-secondary)', maxWidth: '36rem', margin: '0 auto' }}>
                Live preview of your resume updates instantly
              </p>
            </div>

            <div style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: '#eab308' }} />
                <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              </div>
              
              <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                <img
                  src="img.png"
                  alt="Professional resume sample created with CompileCV"
                  style={{ width: '100%', borderRadius: '0.5rem', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--color-background)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--color-foreground)' }}>
                Ready to Build Your Resume?
              </h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--color-foreground-secondary)', maxWidth: '42rem', margin: '0 auto' }}>
                Join thousands of professionals creating beautiful resumes with CompileCV
              </p>
            </div>
            
            <button
              onClick={handleGetStarted}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'white',
                backgroundColor: 'var(--color-primary)',
                border: 'none',
                borderRadius: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Started Free
              <ArrowRight size={18} />
            </button>
            
            <p style={{ fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>
              No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        backgroundColor: 'var(--color-background)'
      }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '2rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {/* Brand */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-foreground)' }}>CompileCV</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>
                Professional LaTeX resume builder for the modern job seeker
              </p>
            </div>

            {/* Product */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-foreground-secondary)' }}>
                Product
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#features" style={{ color: 'var(--color-foreground-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}>Features</a></li>
                <li><a href="#" style={{ color: 'var(--color-foreground-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}>Templates</a></li>
              </ul>
            </div>

            {/* Company */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-foreground-secondary)' }}>
                Company
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="https://www.linkedin.com/in/thenamerahulkr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-foreground-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}>About</a></li>
                <li><a href="https://github.com/thenamerahulkr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-foreground-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}>Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-foreground-secondary)' }}>
                Legal
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#" style={{ color: 'var(--color-foreground-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}>Privacy</a></li>
                <li><a href="#" style={{ color: 'var(--color-foreground-secondary)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}>Terms</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-foreground-secondary)', textAlign: 'center' }}>
              © 2025 CompileCV. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://github.com/thenamerahulkr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-foreground-secondary)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}>
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>GitHub</span>
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.184.092-.923.35-1.555.636-1.914-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/thenamerahulkr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-foreground-secondary)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-foreground)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-foreground-secondary)'}>
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>LinkedIn</span>
                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

