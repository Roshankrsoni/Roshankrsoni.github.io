import { motion, AnimatePresence } from 'motion/react';
import { Github, Twitter, Moon, Sun, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

import profileImg from '../../assets/Roshan-Kr-Soni-v1.webp';

const titles = [
  "React & React Native Engineer",
  "AI Integration Specialist",
  "Mobile App Expert",
  "Full Stack Developer"
];

export default function Navbar() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
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
      <div className="flex items-center gap-2.5">
        <img 
          alt="Profile" 
          fetchPriority="high"
          className="w-10 h-10 aspect-square rounded-full cursor-pointer hover:grayscale transition-all object-cover" 
          src={profileImg} 
        />
        <div className="flex flex-col">
          <h5 className="leading-tight font-medium font-dancing-script text-lg">Roshan Kr Soni <span className="text-sm">👋🏼</span></h5>
          <div className="text-slate-500 dark:text-slate-400 text-[10px] font-medium h-3.5 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="block"
              >
                {titles[titleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="items-center gap-2 sm:gap-6 flex">
        <nav className="items-center gap-4 sm:flex hidden">
          {['Experience', 'Projects', 'Contact', 'Blogs'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="capitalize text-[11px] font-semibold tracking-wide text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a target="_blank" aria-label="Twitter Profile" className="cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors" href="https://x.com/roshankrsoni">
            <Twitter className="w-4 h-4" />
          </a>
          <a target="_blank" aria-label="GitHub Profile" className="cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors" href="https://github.com/roshankrsoni">
            <Github className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="Download Resume" className="group relative hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full text-[11px] font-mono font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md">
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
        </div>
      </div>
    </motion.div>
  );
}
