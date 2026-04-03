import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { getSkillIcon } from '../utils/icons';
import portfolioImg from '../../assets/portfolio.png';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';
const projects = [
  {
    id: 1,
    title: "Imperial Dade Web & Mobile App",
    description: "A comprehensive B2B E-Commerce mobile application (iOS & Android) serving cleaning and foodservice organizations across North America. Built with React Native and Redux Thunk for seamless state management, native performance, and offline capabilities.",
    image: "/assets/Imperial-Dade-Ecommerce.webp",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.imperialdade.androidapp&hl=en_US",
    appStoreLink: "https://apps.apple.com/us/app/imperial-dade/id6475366936",
    link: "https://imperialdade.com",
    tags: ["React Native", "Redux Thunk", "iOS", "Android", "E-Commerce"]
  },
  {
    id: 2,
    title: "Asort E-Commerce Platform & App",
    description: "India's first Co-Commerce platform. A full-stack fashion and lifestyle marketplace built on the MERN stack, featuring complex product catalogs, secure checkout flows, and real-time inventory management.",
    image: "https://i.ytimg.com/vi/HscGu0EH5ts/hqdefault.jpg",
    link: "https://asort.com/home",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.asort.asortplus&hl=en_IN",
    appStoreLink: "https://apps.apple.com/in/app/asort/id1474066670?l=hi",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs", "Full Stack"]
  },
  {
    id: 3,
    title: "Roshan Kr Soni - Portfolio",
    description: "A modern, high-performance personal portfolio built with React 19, Tailwind CSS v4, and the Motion API. Engineered with a strict focus on web accessibility, fluid scroll animations, and seamless micro-interactions.",
    image: portfolioImg,
    link: "https://roshankrsoni.github.io",
    githubLink: "https://github.com/Roshankrsoni/Roshankrsoni.github.io",
    tags: ["React.js", "TailwindCSS", "Motion", "Vercel"] // Vercel icon works as a general hosting icon
  }
];
const getSkillColor = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('node')) return 'text-emerald-500';
  if (s.includes('react')) return 'text-[#61DAFB]';
  if (s.includes('mongo')) return 'text-green-500';
  if (s.includes('redux')) return 'text-purple-500';
  if (s.includes('ios')) return 'text-slate-500 dark:text-slate-200';
  if (s.includes('android')) return 'text-emerald-400';
  if (s.includes('tailwind')) return 'text-cyan-400';
  if (s.includes('motion')) return 'text-pink-500';
  if (s.includes('full stack')) return 'text-fuchsia-500';
  if (s.includes('api')) return 'text-indigo-400';
  return 'text-slate-500 dark:text-slate-400';
};

export default function Projects() {
  return (
    <section id="projects" className="space-y-4 py-8">
      <div className="mb-6 sm:pl-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          My <span className="font-dancing-script font-bold text-emerald-500">Projects</span> Featured.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
        >
          Some of my latest works
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 transition-all duration-500 ease-out h-full"
          >
            <div className="relative w-full aspect-video overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
              <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <img 
                alt={project.title} 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 opacity-90 group-hover:opacity-100" 
                src={project.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/60 sm:from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="flex flex-col grow p-4 sm:p-5 space-y-2 justify-start">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  {project.playStoreLink && (
                    <a target="_blank" aria-label={`View ${project.title} on Play Store`} href={project.playStoreLink} className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shrink-0">
                      <BiLogoPlayStore className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a target="_blank" aria-label={`View ${project.title} on App Store`} href={project.appStoreLink} className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0">
                      <FaAppStore className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a target="_blank" aria-label={`View ${project.title} on GitHub`} href={project.githubLink} className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a target="_blank" aria-label={`View ${project.title}`} href={project.link} className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="pt-1.5 flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => {
                  const Icon = getSkillIcon(tag);
                  return (
                    <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                      <Icon className={`w-3 h-3 ${getSkillColor(tag)}`} strokeWidth={1.2} />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center mt-6"
      >
        <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" href="#projects">
          See all Projects
        </a>
      </motion.div>
    </section>
  );
}
