import { Twitter, Linkedin, Mail, Github, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full max-w-6xl mx-auto border-t border-line pt-10 pb-4">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-6">
        <div className="flex flex-col items-start gap-y-4 md:w-1/3">
          <div>
            <h2 className="font-display italic text-2xl text-ink">Roshan Kr Soni</h2>
            <div className="flex flex-col gap-y-1 mt-3">
              <p className="text-[13px] font-medium text-ink">Senior Experience Engineer</p>
              <p className="text-[11px] font-mono text-faint">Ranchi, Jharkhand, India</p>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
          <div className="flex flex-col gap-3">
            <h3 className="eyebrow">Pages</h3>
            <div className="flex flex-col gap-2 text-[13px] text-muted font-medium">
              <a className="hover:text-accent transition-colors w-fit" href="#">Home</a>
              <a className="hover:text-accent transition-colors w-fit" href="#experience">Experience</a>
              <a className="hover:text-accent transition-colors w-fit" href="#projects">Projects</a>
              <a className="hover:text-accent transition-colors w-fit" href="#services">Services</a>
              <a className="hover:text-accent transition-colors w-fit" href="#contact">Contact</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="eyebrow">Resources</h3>
            <div className="flex flex-col gap-2 text-[13px] text-muted font-medium">
              <a target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors w-fit" href="https://lymcode.hashnode.dev/">Blog</a>
              <a target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors w-fit" href="https://github.com/roshankrsoni">Github</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <h3 className="eyebrow">Connect</h3>
            <p className="text-[13px] text-muted font-medium max-w-xs leading-relaxed">
              Wanna chat? Reach out anywhere below.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full glass text-muted hover:text-ink hover:scale-110 transition-all" href="https://github.com/roshankrsoni">
                <Github className="w-4 h-4" />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-full glass text-muted hover:text-ink hover:scale-110 transition-all" href="https://x.com/roshankrsoni">
                <Twitter className="w-4 h-4" />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full glass text-muted hover:text-ink hover:scale-110 transition-all" href="https://instagram.com/roshankrsoni">
                <Instagram className="w-4 h-4" />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Mail" className="p-2 rounded-full glass text-muted hover:text-ink hover:scale-110 transition-all" href="mailto:roshanx404@gmail.com">
                <Mail className="w-4 h-4" />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full glass text-muted hover:text-ink hover:scale-110 transition-all" href="https://www.linkedin.com/in/roshankrsoni/">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative overflow-hidden flex justify-center items-end pointer-events-none mt-10 sm:mt-14 pb-2">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 1.2, ease: EASE }}
          className="font-display text-[clamp(3rem,11vw,9.5rem)] leading-[0.85] tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-b from-ink/25 to-ink/[0.03] select-none whitespace-nowrap"
        >
          Roshan Kr Soni
        </motion.h1>
      </div>

      <div className="mt-8 pt-4 border-t border-line flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-faint font-medium">
        <span className="flex items-center gap-2">
          © {year} Roshan Kr Soni. All rights reserved.
          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block" aria-label="Web Hit Counter">
            <img
              src={`https://counter.websiteout.com/compte.php?S=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://roshankrsoni.github.io/')}&C=20&D=0&N=20000&M=1`}
              alt="web hit counter"
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </span>
        <p>
          Built with ❤️ by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors underline underline-offset-2"
            href="https://www.linkedin.com/in/roshankrsoni/"
          >
            Roshan Kr Soni
          </a>
        </p>
      </div>
    </footer>
  );
}
