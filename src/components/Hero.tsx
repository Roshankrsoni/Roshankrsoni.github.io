import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import {
  TbBrandNodejs, TbBrandTypescript, TbBrandJavascript, TbBrandTailwind,
  TbBrandReact, TbDatabase, TbBrandNextjs, TbApi, TbBrandAngular,
  TbBrandReactNative, TbBrain
} from 'react-icons/tb';

const techStack = [
  { name: "React", icon: TbBrandReact, color: "text-[#61DAFB]" },
  { name: "React Native", icon: TbBrandReactNative, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: TbBrandNextjs, color: "text-ink" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "text-[#3178C6]" },
  { name: "Node.js", icon: TbBrandNodejs, color: "text-[#339933]" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "text-[#F7DF1E]" },
  { name: "AI Integration", icon: TbBrain, color: "text-accent-2" },
  { name: "Redux", icon: TbApi, color: "text-[#764ABC]" },
  { name: "TailwindCSS", icon: TbBrandTailwind, color: "text-[#06B6D4]" },
  { name: "Angular", icon: TbBrandAngular, color: "text-[#DD0031]" },
  { name: "MongoDB", icon: TbDatabase, color: "text-[#47A248]" },
  { name: "PostgreSQL", icon: TbDatabase, color: "text-[#4169E1]" }
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative pt-16 pb-10 sm:pt-24 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex flex-wrap items-center gap-3"
      >
        <span className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 text-[11px] font-mono text-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          Available for new work
        </span>
        <span className="eyebrow hidden sm:inline">Senior Software Engineer</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
        className="mt-7 font-display font-normal text-[2.9rem] leading-[1.02] sm:text-6xl sm:leading-[1.02] lg:text-[5.25rem] lg:leading-[1.0] tracking-[-0.02em] text-ink"
      >
        Engineering{' '}
        <em className="text-aurora font-light">intelligent</em>
        <br />
        web &amp; mobile apps
        <br />
        that <em className="text-aurora font-light">scale</em>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
        className="mt-7 text-[15px] sm:text-base leading-[1.8] text-muted max-w-xl"
      >
        I'm Roshan, a senior engineer with 6+ years shipping React, React Native, and AI-powered products. From enterprise platforms at Publicis Sapient to consumer apps live on the App Store and Play Store, I build software that stays fast under real-world pressure.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.38, ease: EASE }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-canvas text-sm font-medium hover:opacity-90 transition-all glow-accent"
        >
          <span>View my work</span>
          <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium text-ink hover:border-accent/40 transition-all"
        >
          <span>Get in touch</span>
          <ArrowUpRight className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 font-mono text-[11px] tracking-[0.14em] uppercase text-faint"
      >
        6+ yrs experience&nbsp;&nbsp;·&nbsp;&nbsp;Apps live on App Store &amp; Play Store&nbsp;&nbsp;·&nbsp;&nbsp;Enterprise clients worldwide
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.62 }}
        className="relative mt-12 w-full overflow-hidden marquee"
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />
        <div className="flex overflow-hidden">
          <div className="flex gap-2.5 items-center py-2 whitespace-nowrap animate-slide-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full glass text-muted hover:text-ink hover:scale-105 transition-all cursor-default"
              >
                <tech.icon className={`w-4 h-4 ${tech.color}`} strokeWidth={1.4} />
                <span className="font-medium text-[11px] font-mono">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
