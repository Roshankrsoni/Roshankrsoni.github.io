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

const navItems = ['Experience', 'Projects', 'Contact', 'Blogs'];

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
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full md:max-w-5xl px-4 sm:px-4 rounded-2xl py-3 mx-auto sticky top-2 flex items-center justify-between z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md sm:mt-8"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <img 
          alt="Profile" 
          fetchPriority="high"
          className="w-10 h-10 aspect-square rounded-full cursor-pointer hover:grayscale transition-all object-cover shrink-0" 
          src={profileImg} 
        />
        <div className="flex flex-col min-w-0">
          <h5 className="leading-tight font-medium font-dancing-script text-base sm:text-lg whitespace-nowrap truncate">Roshan Kr Soni <span className="text-[12px] sm:text-sm">👋🏼</span></h5>
          <div className="text-slate-600 dark:text-slate-400 text-[10px] font-medium h-3.5 flex items-center overflow-hidden min-w-0">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="block truncate w-full"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="items-center gap-2 sm:gap-6 flex shrink-0">
        <nav className="items-center gap-4 sm:flex hidden">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="capitalize text-[11px] font-semibold tracking-wide text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <a target="_blank" aria-label="Twitter Profile" className="cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors" href="https://x.com/roshankrsoni">
            <Twitter className="w-4 h-4" />
          </a>
          <a target="_blank" aria-label="GitHub Profile" className="cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors" href="https://github.com/roshankrsoni">
            <Github className="w-3.5 h-3.5" />
          </a>
          <a href="https://docs.google.com/document/d/185aAQjEHRLH5Ku7chZAARsR4zgf-CGqVy--xAiJxGpM/edit?usp=sharing" target="_blank" aria-label="Download Resume" className="group relative hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full text-[11px] font-mono font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md">
            <span>Resume</span>
            <Download className="w-3 h-3 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <button 
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className="flex items-center justify-center cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="sm:hidden flex items-center justify-center cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[calc(100%+0.5rem)] left-0 right-0 w-full sm:hidden bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-xl py-4 flex flex-col gap-2 origin-top"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                className="px-4 py-3 text-[14px] font-semibold tracking-wide text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800/50 transition-colors mx-2 rounded-xl"
              >
                {item}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 + 0.1 }}
              className="px-2 mt-2"
            >
              <a
                href="https://docs.google.com/document/d/185aAQjEHRLH5Ku7chZAARsR4zgf-CGqVy--xAiJxGpM/edit?usp=sharing"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-1 items-center justify-center gap-2 px-4 py-3 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl text-sm font-mono font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
