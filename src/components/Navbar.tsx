import { motion, AnimatePresence } from 'motion/react';
import { Github, Twitter, Moon, Sun, ArrowUpRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import profileImg from '../../assets/Roshan-Kr-Soni-v1.webp';

const titles = [
  "React & React Native Engineer",
  "AI Integration Specialist",
  "Mobile App Expert",
  "Full Stack Developer"
];

const navItems = [
  { label: 'Experience', href: '#experience', index: '01' },
  { label: 'Projects', href: '#projects', index: '02' },
  { label: 'Blogs', href: '#blogs', index: '03' },
  { label: 'Contact', href: '#contact', index: '04' },
];

export default function Navbar() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.getElementById('theme-color-meta')?.setAttribute('content', '#1b1915');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.getElementById('theme-color-meta')?.setAttribute('content', '#f4f2ea');
    }
  }, [isDark]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-3 sm:top-5 z-50 w-full max-w-6xl mx-auto"
    >
      <div className="glass rounded-full pl-3 pr-2 sm:pl-4 sm:pr-2.5 py-2 flex items-center justify-between shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]">
        <a href="#" className="flex items-center gap-3 min-w-0 group">
          <span className="aurora-ring rounded-full p-[2px] shrink-0">
            <img
              alt="Roshan Kr Soni"
              fetchPriority="high"
              className="w-9 h-9 aspect-square rounded-full object-cover"
              src={profileImg}
            />
          </span>
          <span className="flex flex-col min-w-0">
            <span className="font-display italic text-lg leading-none text-ink whitespace-nowrap truncate">
              Roshan Kr Soni
            </span>
            <span className="text-faint text-[10px] font-mono h-3.5 flex items-center overflow-hidden min-w-0 mt-0.5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="block truncate w-full"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <nav className="hidden md:flex items-center gap-5 mr-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group font-mono text-[11px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors"
              >
                <span className="text-accent/80 mr-1">{item.index}</span>
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-accent to-accent-2 transition-all duration-300 ease-expo group-hover:w-full" />
                </span>
              </a>
            ))}
          </nav>

          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            href="https://x.com/roshankrsoni"
            className="hidden sm:flex p-2 rounded-full text-muted hover:text-ink hover:bg-ink/5 dark:hover:bg-white/5 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            href="https://github.com/roshankrsoni"
            className="hidden sm:flex p-2 rounded-full text-muted hover:text-ink hover:bg-ink/5 dark:hover:bg-white/5 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://docs.google.com/document/d/185aAQjEHRLH5Ku7chZAARsR4zgf-CGqVy--xAiJxGpM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="group hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-canvas text-[11px] font-mono font-medium tracking-wide hover:opacity-90 transition-all glow-accent"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className="flex items-center justify-center p-2 rounded-full text-muted hover:text-ink hover:bg-ink/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden flex items-center justify-center p-2 rounded-full text-muted hover:text-ink hover:bg-ink/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 glass rounded-3xl shadow-2xl py-3 flex flex-col origin-top"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.05 }}
                className="flex items-baseline gap-3 mx-2 px-4 py-3 rounded-2xl font-mono text-sm text-muted hover:text-ink hover:bg-ink/5 dark:hover:bg-white/5 transition-colors"
              >
                <span className="text-accent text-[10px]">{item.index}</span>
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.05 }}
              className="px-3 mt-2"
            >
              <a
                href="https://docs.google.com/document/d/185aAQjEHRLH5Ku7chZAARsR4zgf-CGqVy--xAiJxGpM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-ink text-canvas text-sm font-mono hover:opacity-90 transition-opacity"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
