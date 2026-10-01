import {
  TbBrandNodejs, TbBrandTypescript, TbBrandJavascript, TbBrandTailwind,
  TbBrandReact, TbDatabase, TbBrandNextjs, TbApi, TbBrain,
  TbBrandReactNative, TbBrandAngular
} from 'react-icons/tb';

const techStack = [
  { name: "React", icon: TbBrandReact, color: "text-[#61DAFB]" },
  { name: "React Native", icon: TbBrandReactNative, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: TbBrandNextjs, color: "text-slate-900 dark:text-white" },
  { name: "TypeScript", icon: TbBrandTypescript, color: "text-[#3178C6]" },
  { name: "Node.js", icon: TbBrandNodejs, color: "text-[#339933]" },
  { name: "JavaScript", icon: TbBrandJavascript, color: "text-[#F7DF1E]" },
  { name: "AI Integration", icon: TbBrain, color: "text-purple-500" },
  { name: "Redux", icon: TbApi, color: "text-[#764ABC]" },
  { name: "TailwindCSS", icon: TbBrandTailwind, color: "text-[#06B6D4]" },
  { name: "Angular", icon: TbBrandAngular, color: "text-[#DD0031]" },
  { name: "MongoDB", icon: TbDatabase, color: "text-[#47A248]" },
  { name: "PostgreSQL", icon: TbDatabase, color: "text-[#4169E1]" }
];

export default function Hero() {
  return (
    <div className="space-y-4 pt-6 pb-4">
      <div className="animate-rise-in">
        <h1 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50">
          <span className="font-dancing-script font-bold text-blue-600 dark:text-blue-400 relative">
            Intelligent
          </span> engineering <br className="hidden md:block" />
          <span className="font-dancing-script font-bold text-emerald-600 dark:text-emerald-400 relative">
            for
          </span> <span className="relative inline-block"><span className="relative z-10">AI-powered</span></span> Web and Mobile <br className="hidden md:block" />
          <span className="font-dancing-script font-bold text-indigo-600 dark:text-indigo-400 relative">
            Apps
          </span> that <span className="font-dancing-script font-bold text-amber-600 dark:text-amber-400 relative">
            Scale
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-500/60 dark:text-amber-400/60" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                pathLength="1"
                strokeDasharray="1"
                className="draw-stroke"
              />
            </svg>
          </span>
        </h1>
      </div>

      <div className="animate-rise-in-late">
        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
          A Senior Software Engineer specializing in <span className="relative z-0 whitespace-nowrap"><span className="relative z-10 font-medium text-slate-800 dark:text-slate-200">React, React Native</span></span>, and <span className="relative z-0 whitespace-nowrap"><span className="relative z-10 font-medium text-slate-800 dark:text-slate-200">modern full‑stack architectures</span></span>. I design and ship high‑performance web and mobile apps, <span className="relative z-0 whitespace-nowrap"><span className="relative z-10 font-medium text-slate-800 dark:text-slate-200">integrating AI</span><span className="absolute bottom-0 left-0 w-full h-1.5 bg-emerald-400/40 dark:bg-emerald-500/40 -z-10"></span></span> where it makes sense to deliver fast, reliable, and genuinely useful digital experiences.
        </p>
      </div>

      <div className="animate-rise-in-late w-full overflow-hidden relative pt-4" style={{ animationDelay: '0.2s' }}>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden group">
          <div className="flex gap-3 items-center py-2 whitespace-nowrap animate-slide-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 shadow-sm hover:scale-105 transition-transform cursor-default">
                <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} strokeWidth={1.2} />
                <span className="font-medium text-[11px] font-mono">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
