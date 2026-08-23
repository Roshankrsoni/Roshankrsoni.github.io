import { motion } from 'motion/react';
import {
  TbBrandNodejs, TbBrandTypescript, TbBrandJavascript, TbBrandTailwind,
  TbBrandReact, TbDatabase, TbBrandNextjs, TbApi, TbBrandAngular,
  TbBrandReactNative, TbBrain
} from 'react-icons/tb';
import { ArrowUpRight } from 'lucide-react';

const techStack = [
  { name: "React", icon: TbBrandReact },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Next.js", icon: TbBrandNextjs },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "Node.js", icon: TbBrandNodejs },
  { name: "JavaScript", icon: TbBrandJavascript },
  { name: "AI Integration", icon: TbBrain },
  { name: "Redux", icon: TbApi },
  { name: "TailwindCSS", icon: TbBrandTailwind },
  { name: "Angular", icon: TbBrandAngular },
  { name: "MongoDB", icon: TbDatabase },
  { name: "PostgreSQL", icon: TbDatabase }
];

export default function Hero() {
  return (
    <section className="flex flex-col px-6 pb-20 pt-24 md:px-14 md:pt-32 xl:px-20">
      {/* status line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-5 flex items-center gap-2 text-[13px] text-muted"
      >
        <span className="inline-block size-1.5 animate-pulse rounded-full bg-accent ring-1 ring-line" />
        open to work — full-time & freelance
      </motion.p>

      {/* headline */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="max-w-2xl text-[26px] font-bold leading-snug tracking-tight text-ink sm:text-[38px] sm:leading-[1.25]"
      >
        Intelligent engineering for AI-powered Web and Mobile Apps that Scale.
      </motion.h1>

      {/* subcopy */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="mt-4 max-w-xl text-sm leading-loose sm:max-w-[82%] sm:text-[15px]"
      >
        A Senior Software Engineer specializing in React, React Native, and modern
        full-stack architectures. I design and ship high-performance web and mobile
        apps — integrating AI where it makes sense to deliver fast, reliable, and
        genuinely useful digital experiences.
      </motion.p>

      {/* actions */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <a href="#contact" className="btn-solid group">
          get in touch
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <a href="#projects" className="btn-outline">
          view projects
        </a>
      </motion.div>

      {/* tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative mt-14 w-full overflow-hidden"
      >
        <style>{`
          @keyframes slide-marquee {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          .animate-slide-marquee {
            animation: slide-marquee 28s linear infinite;
          }
          .group:hover .animate-slide-marquee {
            animation-play-state: paused !important;
          }
        `}</style>
        <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_48px,black_calc(100%-48px),transparent)]">
          <div className="flex animate-slide-marquee items-center gap-2 whitespace-nowrap py-1">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="flex cursor-default items-center gap-2 rounded-[4px] border border-line bg-surface px-3 py-1.5 text-xs text-body transition-colors hover:border-edge hover:text-ink"
              >
                <tech.icon className="size-3.5 text-muted" strokeWidth={1.5} />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
