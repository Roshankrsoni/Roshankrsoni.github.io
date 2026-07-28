import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, ExternalLink, ChevronDown } from 'lucide-react';
import { getSkillIcon } from '../utils/icons';
import SectionHeading from './SectionHeading';

import psLogo from '../../assets/PS_logo_grey.webp';
import capitaLogo from '../../assets/capita_logo.jpeg';
import cnLogo from '../../assets/capitalnumbers_logo.jpeg';
import asortLogo from '../../assets/1768389997397.jpeg';

const experiences = [
  {
    id: 1,
    role: "Senior Experience Engineer",
    company: "Publicis Sapient",
    companyUrl: "https://en.wikipedia.org/wiki/Publicis_Sapient",
    date: "Aug 2023 - Present",
    location: "Remote / Gurugram, India",
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
    companyUrl: "https://en.wikipedia.org/wiki/Capita",
    date: "Apr 2022 - Feb 2023",
    location: "Remote / Pune, India",
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
    companyUrl: "https://www.capitalnumbers.com/",
    date: "Aug 2020 - Apr 2022",
    location: "Remote / Kolkata, India",
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
    companyUrl: "https://asort.com/",
    date: "Dec 2019 - Aug 2020",
    location: "Gurugram, Haryana, India",
    current: false,
    logo: asortLogo,
    description: [
      "Played a key role in building a high-traffic fashion e-commerce platform using the MERN stack.",
      "Developed secure REST APIs and dynamic React.js interfaces to enhance the shopping experience and streamline checkout flows."
    ],
    skills: ["React.js", "Node.js", "MongoDB", "REST APIs", "E-commerce"]
  }
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number>(1);
  const expandedIndex = experiences.findIndex(exp => exp.id === expandedId);

  return (
    <section id="experience" className="w-full relative py-20 sm:py-24">
      <SectionHeading
        index="01"
        eyebrow="Experience"
        title={<>Places I've <em className="text-aurora font-light">shipped</em>.</>}
        sub="Six years across enterprise consulting and product teams, always close to production."
      />

      <div className="relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.6, ease: EASE }}
            className={`relative pl-10 sm:pl-12 ml-2 ${index !== experiences.length - 1 ? 'pb-8' : ''}`}
          >
            <div className="absolute left-0 top-0 bottom-0 w-px bg-line" />
            <motion.div
              initial={false}
              animate={{
                height: expandedIndex === -1 ? '0%' : (index < expandedIndex ? '100%' : index === expandedIndex ? '24px' : '0%')
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="absolute left-0 top-0 w-px bg-gradient-to-b from-accent to-accent-2 origin-top"
            />
            <div
              className={`absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full transition-all duration-300 ${
                index <= expandedIndex
                  ? 'bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_12px_0] shadow-accent/50'
                  : 'bg-surface border border-line'
              }`}
            />

            <div className="group">
              <div
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 cursor-pointer select-none"
                onClick={() => setExpandedId(expandedId === exp.id ? 0 : exp.id)}
              >
                <div className="flex items-start gap-4">
                  <img
                    alt={exp.company}
                    loading="lazy"
                    className="w-11 h-11 rounded-2xl bg-surface border border-line object-cover mt-0.5"
                    src={exp.logo}
                  />
                  <div>
                    <h3 className="text-lg font-medium text-ink flex flex-wrap items-center gap-2.5 leading-tight">
                      {exp.role}
                      {exp.current && (
                        <span className="inline-flex gap-1.5 items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                          Current
                        </span>
                      )}
                    </h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent text-sm mt-1 flex items-center gap-1 w-fit transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <div className="text-muted text-sm mt-1 flex items-center gap-1">
                        {exp.company}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-1 mt-1 sm:mt-0">
                  <div className="flex flex-col sm:items-end gap-1 font-mono text-[11px] text-faint">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1.5 rounded-full text-faint group-hover:text-ink group-hover:bg-ink/5 dark:group-hover:bg-white/5 transition-colors mt-1"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="glass rounded-3xl mt-4 p-5 sm:ml-15 sm:p-6">
                      <ul className="space-y-2 text-[13px] leading-[1.7] text-muted list-disc list-outside ml-4 mb-4">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, i) => {
                          const Icon = getSkillIcon(skill);
                          return (
                            <span
                              key={i}
                              className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono rounded-full bg-ink/[0.04] dark:bg-white/[0.05] text-muted border border-line"
                            >
                              <Icon className="w-3 h-3" strokeWidth={1.4} />
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
    </section>
  );
}
