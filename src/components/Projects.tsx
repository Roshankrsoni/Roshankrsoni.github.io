import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { getSkillIcon } from '../utils/icons';
import SectionHeading from './SectionHeading';
import portfolioImg from '../../assets/portfolio.png';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';

import imperialDadeImg from '../../assets/Imperial-Dade-Ecommerce.webp';

const projects = [
  {
    id: 1,
    title: "Imperial Dade Web & Mobile App",
    description: "A production-grade B2B e-commerce application for iOS, Android, and web, serving cleaning and foodservice organizations across North America. Built with React Native and Redux Thunk, it supports offline usage, robust search, and frictionless ordering for high-volume customers.",
    image: imperialDadeImg,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.imperialdade.androidapp&hl=en_US",
    appStoreLink: "https://apps.apple.com/us/app/imperial-dade/id6475366936",
    link: "https://imperialdade.com",
    tags: ["React Native", "Redux Thunk", "iOS", "Android", "E-Commerce"]
  },
  {
    id: 2,
    title: "Asort E-Commerce Platform & App",
    description: "A full-stack co-commerce platform powering a fashion and lifestyle marketplace, built on the MERN stack. It handles complex product catalogs, secure checkout, and real-time inventory, while remaining performant under heavy user traffic.",
    image: "https://i.ytimg.com/vi/HscGu0EH5ts/hqdefault.jpg",
    link: "https://asort.com/home",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.asort.asortplus&hl=en_IN",
    appStoreLink: "https://apps.apple.com/in/app/asort/id1474066670?l=hi",
    tags: ["React.js", "Node.js", "MongoDB", "REST APIs", "Full Stack"]
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "A modern, performance-focused portfolio built with React 19, Tailwind CSS v4, and the Motion API. Designed with accessibility, smooth scroll-based animations, and subtle micro-interactions to feel fast and polished on every device.",
    image: portfolioImg,
    link: "https://roshankrsoni.github.io",
    githubLink: "https://github.com/Roshankrsoni/Roshankrsoni.github.io",
    tags: ["React.js", "TailwindCSS", "Motion", "Vite"]
  }
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <SectionHeading
        index="02"
        eyebrow="Selected work"
        title={<>Work that <em className="text-aurora font-light">shipped</em>.</>}
        sub="Production apps used by real customers, from B2B ordering platforms to consumer marketplaces."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.7, ease: EASE }}
            className="group relative flex flex-col glass rounded-3xl overflow-hidden transition-all duration-500 ease-expo hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] h-full"
          >
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

            <div className="relative w-full aspect-video overflow-hidden bg-surface shrink-0">
              <img
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-expo group-hover:scale-[1.06] opacity-90 group-hover:opacity-100"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
            </div>

            <div className="flex flex-col grow p-5 sm:p-6 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl leading-snug text-ink group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 shrink-0">
                  {project.playStoreLink && (
                    <a target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on Play Store`} href={project.playStoreLink} className="p-2 rounded-full glass text-muted hover:text-ink hover:scale-110 transition-all">
                      <BiLogoPlayStore className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on App Store`} href={project.appStoreLink} className="p-2 rounded-full glass text-muted hover:text-ink hover:scale-110 transition-all">
                      <FaAppStore className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} href={project.githubLink} className="p-2 rounded-full glass text-muted hover:text-ink hover:scale-110 transition-all">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`} href={project.link} className="p-2 rounded-full glass text-muted hover:text-accent hover:scale-110 transition-all">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <p className="text-[13px] text-muted line-clamp-3 leading-[1.7]">
                {project.description}
              </p>

              <div className="pt-1 flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag, i) => {
                  const Icon = getSkillIcon(tag);
                  return (
                    <span
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono rounded-full bg-ink/[0.04] dark:bg-white/[0.05] border border-line text-faint"
                    >
                      <Icon className="w-3 h-3" strokeWidth={1.4} />
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
