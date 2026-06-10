import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Moon, Sun, Code2, Zap, Palette } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const projects = [
    {
      id: 1,
      title: "YouTube Channel Website",
      description: "Custom-built portfolio and content platform with React and Tailwind CSS. Features smooth animations and optimal performance.",
      tags: ["React", "Tailwind CSS", "GSAP", "Responsive"],
      link: "#",
      image: "gradient-to-br from-blue-600 to-blue-400"
    },
    {
      id: 2,
      title: "Developer Tools Suite",
      description: "Collection of utility applications designed to enhance developer productivity with interactive interfaces and real-time functionality.",
      tags: ["JavaScript", "React", "Node.js", "UI/UX"],
      link: "#",
      image: "gradient-to-br from-purple-600 to-purple-400"
    },
    {
      id: 3,
      title: "2D Game Engine",
      description: "Interactive game built with vanilla JavaScript, demonstrating physics simulation, collision detection, and game loop architecture.",
      tags: ["Canvas API", "JavaScript", "Physics", "Game Dev"],
      link: "#",
      image: "gradient-to-br from-orange-600 to-orange-400"
    },
    {
      id: 4,
      title: "Web Scraping Pipeline",
      description: "Automated data extraction and processing using Puppeteer and Cheerio for real-world applications and analytics.",
      tags: ["Puppeteer", "Cheerio", "Axios", "Node.js"],
      link: "#",
      image: "gradient-to-br from-green-600 to-green-400"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Animation", items: ["GSAP", "CSS Animations", "Canvas API"] },
    { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
    { category: "Automation", items: ["Puppeteer", "Cheerio", "Axios"] }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript", icon: "✨", color: "from-yellow-500 to-orange-500" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
    { name: "GSAP", icon: "🎬", color: "from-pink-500 to-red-500" },
    { name: "Puppeteer", icon: "🤖", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <div className={`${isDark ? 'dark bg-slate-950 text-white' : 'bg-white text-slate-900'} min-h-screen transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 ${isDark ? 'bg-slate-950/95' : 'bg-white/95'} backdrop-blur-md border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ahanaf
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['home', 'about', 'projects', 'skills', 'contact'].map(item => (
                <a key={item} href={`#${item}`} className={`capitalize font-medium transition-colors ${activeSection === item ? 'text-blue-500' : 'hover:text-blue-500'}`}>
                  {item}
                </a>
              ))}
              <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden pb-4 space-y-2 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
              {['home', 'about', 'projects', 'skills', 'contact'].map(item => (
                <a key={item} href={`#${item}`} className="block py-2 px-4 capitalize rounded-lg hover:bg-blue-500/10 hover:text-blue-500">
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-blue-500 font-semibold mb-2">Welcome to my portfolio</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Ahanaf Ahamad
                </h1>
                <p className="text-xl text-slate-400">Full-Stack Developer & Creative Builder</p>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Self-taught developer with a passion for creating elegant, high-performance web applications. Specializing in modern JavaScript, React, and full-stack architecture.
              </p>

              <div className="flex gap-4">
                <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                  View My Work
                </a>
                <a href="#contact" className={`px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all`}>
                  Get In Touch
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/ahanafahamad" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}>
                  <Github size={24} />
                </a>
                <a href="mailto:ahanafahamad1858@gmail.com" className={`p-3 rounded-lg ${isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}>
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className={`w-full aspect-square rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border ${isDark ? 'border-slate-700' : 'border-slate-200'} flex items-center justify-center`}>
                <div className="text-center">
                  <Code2 size={80} className="mx-auto mb-4 text-blue-500 opacity-50" />
                  <p className="text-slate-400">Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <Code2 className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Developer</h3>
              <p className="text-slate-400">Self-taught since age 13, continuously learning and mastering modern web technologies and best practices.</p>
            </div>

            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <Palette className="text-purple-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Designer</h3>
              <p className="text-slate-400">Creating beautiful, intuitive interfaces with a focus on user experience and modern design principles.</p>
            </div>

            <div className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
              <Zap className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Problem Solver</h3>
              <p className="text-slate-400">Passionate about solving complex problems and building solutions that matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map(tech => (
              <div key={tech.name} className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-800 border-slate-700 hover:border-slate-600' : 'bg-slate-50 border-slate-200 hover:border-slate-300'} text-center transition-all hover:shadow-lg group cursor-pointer`}>
                <div className="text-4xl mb-2">{tech.icon}</div>
                <p className="font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-8">
            {skills.map(skillGroup => (
              <div key={skillGroup.category}>
                <h3 className="text-xl font-bold mb-4 text-blue-500">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className={`px-4 py-2 rounded-lg border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 ${isDark ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <div key={project.id} className={`group rounded-2xl overflow-hidden border ${isDark ? 'bg-slate-800 border-slate-700 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300'} transition-all hover:shadow-xl`}>
                <div className={`h-48 bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className={`text-xs px-3 py-1 rounded-full ${isDark ? 'bg-slate-700 text-blue-400' : 'bg-slate-100 text-blue-600'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 font-semibold">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-400 mb-8">Have a project in mind? Let's work together and create something amazing.</p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="mailto:ahanafahamad1858@gmail.com" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2">
              <Mail size={20} />
              Send Email
            </a>
            <a href="https://github.com/ahanafahamad" target="_blank" rel="noopener noreferrer" className={`px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500/10 transition-all flex items-center justify-center gap-2`}>
              <Github size={20} />
              Visit GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'} py-8 px-4`}>
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2026 Ahanaf Ahamad. All rights reserved.</p>
          <p className="mt-2">Designed & Built with ❤️ using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}