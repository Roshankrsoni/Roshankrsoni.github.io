import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { getSkillIcon } from '../utils/icons';

const projects = [
  {
    id: 1,
    title: "Imperial Dade Web & Mobile App",
    description: "A comprehensive B2B E-Commerce mobile application (iOS & Android) serving cleaning and foodservice organizations across North America. Built with React Native and Redux Thunk for seamless state management, native performance, and offline capabilities.",
    image: "https://totalfood.com/wp-content/uploads/2024/08/Imperial-Dade-Ecommerce.webp",
    link: "https://play.google.com/store/apps/details?id=com.imperialdade.androidapp&hl=en_US",
    tags: ["React Native", "Redux Thunk", "iOS", "Android", "E-Commerce"]
  },
  {
    id: 2,
    title: "Asort E-Commerce Platform & App",
    description: "India's first Co-Commerce platform. A full-stack fashion and lifestyle marketplace built on the MERN stack, featuring complex product catalogs, secure checkout flows, and real-time inventory management.",
    image: "https://i.ytimg.com/vi/HscGu0EH5ts/maxresdefault.jpg",
    link: "https://asort.com/home",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs", "Full Stack"]
  }
];

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

      <div className="grid grid-cols-1 gap-3">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col sm:flex-row bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 transition-all duration-500 ease-out"
          >
            <div className="relative sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
              <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <img 
                alt={project.title} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1 opacity-90 group-hover:opacity-100" 
                src={project.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-900/60 sm:from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            <div className="flex flex-col grow p-4 sm:p-5 space-y-2 justify-center">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-lg font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <a target="_blank" aria-label={`View ${project.title}`} href={project.link} className="p-1.5 bg-white dark:bg-slate-800 rounded-full shadow-sm text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              
              <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="pt-1.5 flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => {
                  const Icon = getSkillIcon(tag);
                  return (
                    <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono rounded-md bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                      <Icon className="w-3 h-3" strokeWidth={1.2} />
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
