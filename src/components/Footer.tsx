import { Twitter, Linkedin, Mail, Github, Instagram } from 'lucide-react';

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <footer className="max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-6 pb-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6">
        <div className="flex flex-col items-start gap-y-4 md:w-1/3">
          <div>
            <h2 className="text-2xl font-medium mb-1 tracking-tight">
              <span className="font-dancing-script font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">Roshan Kr Soni</span>
            </h2>
            <div className="flex flex-col gap-y-1 mt-3">
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200">Senior Experience Engineer</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">Ranchi, Jharkhand, India</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-xs text-left leading-relaxed">
            Wanna chat? Contact anywhere below.
          </p>
          <div className="flex items-center gap-3">
            <a target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href="https://x.com/">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href="https://www.linkedin.com/in/roshankrsoni/">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a target="_blank" rel="noopener noreferrer" aria-label="Mail" className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href="mailto:roshanx404@gmail.com">
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">Pages</h3>
            <div className="flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">Home</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#projects">Projects</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#experience">Experience</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#services">Services</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#contact">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">Resources</h3>
            <div className="flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <a target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="https://lymcode.hashnode.dev/">Blog</a>
              <a target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="https://github.com/roshankrsoni">Github</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">Connect</h3>
            <div className="flex items-center gap-2 mt-1">
              <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href="https://github.com/roshankrsoni">
                <Github className="w-4 h-4" />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href="https://x.com/roshankrsoni">
                <Twitter className="w-4 h-4" />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href="https://instagram.com/roshankrsoni">
                <Instagram className="w-4 h-4" />
              </a>
              {/* email */}
              <a target="_blank" rel="noopener noreferrer" aria-label="Mail" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href="mailto:roshanx404@gmail.com">
                <Mail className="w-4 h-4" />
              </a>
              {/* linkedin */}
              <a target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href="https://www.linkedin.com/in/roshankrsoni/">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
        <span>© {year} Roshan Kr Soni. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p>Built with ❤️ by <a target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="https://www.linkedin.com/in/roshankrsoni/">Roshan Kr Soni</a></p>
        </div>
      </div>
    </footer>
  );
}
