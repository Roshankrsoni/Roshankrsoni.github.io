import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, ExternalLink, ChevronDown } from 'lucide-react';
import { getSkillIcon } from '../utils/icons';

import psLogo from '../../assets/PS_logo_grey.webp';
import capitaLogo from '../../assets/capita_logo.jpeg';
import cnLogo from '../../assets/capitalnumbers_logo.jpeg';
import asortLogo from '../../assets/1768389997397.jpeg';

const experiences = [
  {
    id: 1,
    role: "Senior Experience Engineer",
    company: "Publicis Sapient",
    date: "Aug 2023 - Present",
    location: "Remote / India",
    current: true,
    logo: psLogo,
    description: [
      "Spearheading the development of enterprise-grade web and mobile applications for global clients.",
      "Architecting scalable frontend solutions using Next.js and React Native, ensuring high performance and accessibility.",
      "Mentoring junior engineers and driving best practices in code quality, AI integration, and modern UI/UX."
    ],
    skills: ["Next.js", "React Native", "Node.js", "TypeScript", "AI Integration"]
  },
  {
    id: 2,
    role: "Software Consultant",
    company: "Capita",
    date: "Apr 2022 - Feb 2023",
    location: "Remote",
    current: false,
    logo: capitaLogo,
    description: [
      "Consulted on complex software architecture, delivering robust frontend solutions and optimizing web application performance.",
      "Streamlined development workflows and implemented scalable UI components using React.js and modern JavaScript ecosystems."
    ],
    skills: ["React.js", "JavaScript", "Architecture", "Performance Optimization"]
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Capital Numbers",
    date: "Aug 2020 - Apr 2022",
    location: "Remote",
    current: false,
    logo: cnLogo,
    description: [
      "Engineered full-stack web applications from the ground up, focusing on responsive design and seamless user experiences.",
      "Collaborated closely with international clients to translate business requirements into scalable, high-quality technical solutions."
    ],
    skills: ["React.js", "Node.js", "Full Stack Development", "API Design"]
  },
  {
    id: 4,
    role: "SDE 1",
    company: "Asort.com",
    date: "Dec 2019 - Aug 2020",
    location: "Gurugram, Haryana, India",
    current: false,
    logo: asortLogo,
    description: [
      "Played a key role in building a high-traffic Fashion E-commerce platform using the MERN stack.",
      "Developed secure REST APIs and dynamic React.js interfaces to enhance the shopping experience and streamline checkout flows."
    ],
    skills: ["React.js", "Node.js", "MongoDB", "REST APIs", "E-commerce"]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number>(1);

  return (
    <section id="experience" className="w-full relative mt-8">
      <div className="mb-6 sm:pl-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          My <span className="font-dancing-script font-bold text-blue-500">Work</span> History.
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

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6"
          >
            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ring-4 ring-white dark:ring-slate-950 transition-colors duration-300 ${exp.current ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-700'}`}></div>
            
            <div className="group -ml-2">
              <div 
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 cursor-pointer select-none"
                onClick={() => setExpandedId(expandedId === exp.id ? 0 : exp.id)}
              >
                <div className="flex items-start gap-3">
                  <img alt={exp.company} loading="lazy" className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 object-cover mt-0.5" src={exp.logo} />
                  <div>
                    <h3 className="text-base font-medium font-inter text-slate-900 dark:text-slate-100 flex flex-wrap items-center gap-2 leading-tight">
                      {exp.role}
                      {exp.current && (
                        <span className="inline-flex gap-1 items-center px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-emerald-50 border-emerald-200 border text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </h3>
                    <div className="text-slate-600 dark:text-slate-400 font-medium text-xs mt-1 flex items-center gap-1">
                      {exp.company}
                      <ExternalLink className="w-2.5 h-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto text-[11px] text-slate-500 font-mono gap-1 mt-2 sm:mt-0">
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      📍
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <motion.div 
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 mt-1 sm:mt-1.5"
                  >
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 sm:ml-14 pt-1">
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 list-disc list-outside ml-4 mb-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="leading-relaxed">{desc}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, i) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
                              <Icon className="w-3 h-3" strokeWidth={1.2} />
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
        <a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors" href="#experience">
          See all work experience
        </a>
      </motion.div>
    </section>
  );
}
