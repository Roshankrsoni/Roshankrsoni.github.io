import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, ExternalLink, Plus } from 'lucide-react';
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
      "Played a key role in building a high-traffic Fashion E-commerce platform using the MERN stack.",
      "Developed secure REST APIs and dynamic React.js interfaces to enhance the shopping experience and streamline checkout flows."
    ],
    skills: ["React.js", "Node.js", "MongoDB", "REST APIs", "E-commerce"]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number>(1);

  return (
    <section id="experience" className="section">
      {/* section title */}
      <div className="mb-10 flex items-baseline gap-3">
        <span className="text-xs text-faint">01</span>
        <h2 className="text-base font-bold text-ink">Work history</h2>
      </div>

      <div className="flex flex-col gap-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.18) }}
            className={`rounded-[6px] border bg-surface transition-colors ${
              expandedId === exp.id ? 'border-line' : 'border-line hover:border-edge'
            }`}
          >
            {/* header row */}
            <button
              onClick={() => setExpandedId(expandedId === exp.id ? 0 : exp.id)}
              className="flex w-full cursor-pointer flex-col gap-4 p-5 text-left sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <img
                  alt={exp.company}
                  loading="lazy"
                  className="size-11 shrink-0 rounded-[4px] border border-line object-cover"
                  src={exp.logo}
                />
                <div>
                  <h3 className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink">
                    {exp.role}
                    {exp.current && (
                      <span className="rounded-[3px] bg-accent px-1.5 py-0.5 text-[10px] font-medium leading-none text-ink">
                        current
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                    {exp.company}
                    {exp.companyUrl && <ExternalLink className="size-3" />}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 pl-15 sm:pl-0">
                <div className="flex flex-col gap-1 text-[11px] text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3" />
                    {exp.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3" />
                    {exp.location}
                  </span>
                </div>
                <motion.span
                  animate={{ rotate: expandedId === exp.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-muted"
                >
                  <Plus className="size-4" />
                </motion.span>
              </div>
            </button>

            {/* expanded body */}
            <AnimatePresence initial={false}>
              {expandedId === exp.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-line p-5 pt-4">
                    <ul className="mb-4 space-y-2 text-sm leading-loose text-body">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="select-none text-faint">-</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, i) => {
                        const Icon = getSkillIcon(skill);
                        return (
                          <span
                            key={i}
                            className="flex items-center gap-1.5 rounded-[4px] border border-line px-2 py-1 text-[11px] text-muted"
                          >
                            <Icon className="size-3" strokeWidth={1.5} />
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
