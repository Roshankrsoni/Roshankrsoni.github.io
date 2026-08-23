import { motion, AnimatePresence } from 'motion/react';
import { Github, Twitter, Moon, Sun, Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import profileImg from '../../assets/Roshan-Kr-Soni-v1.webp';

const titles = [
  "React & React Native Engineer",
  "AI Integration Specialist",
  "Mobile App Expert",
  "Full Stack Developer"
];

const navItems = ['Experience', 'Projects', 'Services', 'Blogs', 'Contact'];

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
      document.getElementById('theme-color-meta')?.setAttribute('content', '#131111');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.getElementById('theme-color-meta')?.setAttribute('content', '#fcfbfb');
    }
  }, [isDark]);

  return (
    <motion.div
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 border-b border-line bg-page"
    >
      <div className="flex h-20 items-center justify-between gap-4 px-6 md:px-14 xl:px-20">
        {/* Identity */}
        <a href="#" className="flex min-w-0 items-center gap-3">
          <img
            alt="Profile"
            fetchPriority="high"
            className="size-9 shrink-0 rounded-[4px] border border-line object-cover"
            src={profileImg}
          />
          <div className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate text-sm font-semibold leading-tight text-ink">
              Roshan Kr Soni
            </span>
            <div className="flex h-4 min-w-0 items-center overflow-hidden text-[11px] text-muted">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="block w-full truncate"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] text-muted no-underline transition-colors hover:text-ink hover:underline hover:underline-offset-4 hover:decoration-line"
            >
              {item.toLowerCase()}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <a target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="btn-icon !size-10 max-sm:hidden" href="https://x.com/roshankrsoni">
            <Twitter className="size-4" />
          </a>
          <a target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="btn-icon !size-10 max-sm:hidden" href="https://github.com/roshankrsoni">
            <Github className="size-4" />
          </a>

          <button onClick={() => setIsDark(!isDark)} aria-label="Toggle Dark Mode" className="btn-icon">
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <a
            href="https://docs.google.com/document/d/185aAQjEHRLH5Ku7chZAARsR4zgf-CGqVy--xAiJxGpM/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className="btn-solid ml-2 hidden !py-2 sm:inline-flex"
          >
            resume
            <Download className="size-3.5" />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="btn-icon lg:hidden"
          >
            {isMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — full-width sheet under the bar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-0 top-full flex flex-col border-b border-line bg-page py-2 lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-6 py-4 text-sm text-muted no-underline transition-colors hover:bg-surface hover:text-ink"
              >
                <span>{item.toLowerCase()}</span>
                <span className="text-xs text-faint">→</span>
              </a>
            ))}
            <a
              href="https://docs.google.com/document/d/185aAQjEHRLH5Ku7chZAARsR4zgf-CGqVy--xAiJxGpM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mx-4 my-2 sm:hidden"
            >
              <span className="btn-solid w-full">
                download resume
                <Download className="size-4" />
              </span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
