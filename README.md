# CompileCV - Modern Resume Builder

A modern, ATS-optimized resume builder with real-time LaTeX compilation and live preview. Built with React + Vite for blazing-fast performance.

## 🚀 Quick Start

### Using Docker (Recommended)
```bash
docker pull thenamerahulkr/compiler-cv:latest
docker run -p 3000:3000 thenamerahulkr/compiler-cv:latest
```

### Using Docker Compose
```bash
docker-compose up
```

### Local Development
```bash
npm install
npm run dev
```

Access at: **http://localhost:3000**

## ✨ Features

- ⚡ Real-time LaTeX compilation with instant preview
- 🎯 ATS-optimized formatting for job applications
- 🌓 Dark/Light mode with smooth transitions
- 💾 Auto-save to localStorage
- 🎨 Drag & drop section reordering
- 📄 Instant PDF export
- 🔒 Privacy-first (all data stored locally)

## 📋 Resume Sections

- Personal Information
- Education
- Work Experience
- Projects
- Skills & Expertise
- Certifications & Achievements

## 🛠️ Tech Stack

- React 18
- Vite 5
- LaTeX Compilation API
- Framer Motion
- React Router
- Lucide Icons

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

## 🐳 Docker

### Build Image
```bash
docker build -t compilecv .
```

### Run Container
```bash
docker run -p 3000:3000 compilecv
```

### Docker Compose
```bash
docker-compose up -d
```

## 🌍 Deployment

### Vercel
```bash
npm run build
# Deploy dist folder
```

### Docker Hub
```bash
docker push thenamerahulkr/compiler-cv:latest
```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── forms/           # Form components
│   ├── layout/          # Layout components
│   └── resume/          # Resume-specific components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── context/             # React context
└── styles/              # Global styles
```

## 🔧 Environment Variables

Create a `.env` file:
```env
VITE_LATEX_API_URL=https://latex.ytotech.com/builds/sync
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

MIT License - feel free to use for personal and commercial projects.

## 🔗 Links

- **Docker Hub**: https://hub.docker.com/r/thenamerahulkr/compiler-cv
- **GitHub**: https://github.com/thenamerahulkr/ResumeForge
- **Author**: [Rahul Kumar](https://www.linkedin.com/in/thenamerahulkr/)

---

**Made with ❤️ by Rahul Kumar**
