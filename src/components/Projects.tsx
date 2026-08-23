import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { getSkillIcon } from '../utils/icons';
import portfolioImg from '../../assets/portfolio.png';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStore } from 'react-icons/fa';

import imperialDadeImg from '../../assets/Imperial-Dade-Ecommerce.webp';

const projects = [
  {
    id: 1,
    title: "Imperial Dade Web & Mobile App",
    description: "A production-grade B2B E-Commerce application for iOS, Android, and web, serving cleaning and foodservice organizations across North America. Built with React Native and Redux Thunk, it supports offline usage, robust search, and frictionless ordering for high-volume customers.",
    image: imperialDadeImg,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.imperialdade.androidapp&hl=en_US",
    appStoreLink: "https://apps.apple.com/us/app/imperial-dade/id6475366936",
    link: "https://imperialdade.com",
    tags: ["React Native", "Redux Thunk", "iOS", "Android", "E-Commerce"]
  },
  {
    id: 2,
    title: "Asort E-Commerce Platform & App",
    description: "A full-stack Co-Commerce platform powering a fashion and lifestyle marketplace, built on the MERN stack. It handles complex product catalogs, secure checkout, and real-time inventory, while remaining performant under heavy user traffic.",
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
    tags: ["React.js", "TailwindCSS", "Motion", "Vercel"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="mb-10 flex items-baseline gap-3">
        <span className="text-xs text-faint">02</span>
        <h2 className="text-base font-bold text-ink">Featured projects</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.18) }}
            className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-line bg-surface transition-colors hover:border-edge"
          >
            {/* media */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="relative block aspect-video w-full overflow-hidden border-b border-line bg-surface-hover"
            >
              <img
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                src={project.image}
              />
            </a>

            {/* body */}
            <div className="flex grow flex-col gap-2.5 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold leading-snug text-ink underline-offset-4 group-hover:underline group-hover:decoration-line">
                  {project.title}
                </h3>
                <div className="flex shrink-0 items-center gap-0.5">
                  {project.playStoreLink && (
                    <a target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on Play Store`} href={project.playStoreLink} className="btn-icon !size-8 !p-0">
                      <BiLogoPlayStore className="size-4" />
                    </a>
                  )}
                  {project.appStoreLink && (
                    <a target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on App Store`} href={project.appStoreLink} className="btn-icon !size-8 !p-0">
                      <FaAppStore className="size-3.5" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} href={project.githubLink} className="btn-icon !size-8 !p-0">
                      <Github className="size-4" />
                    </a>
                  )}
                  <a target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} href={project.link} className="btn-icon !size-8 !p-0">
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>

              <p className="line-clamp-3 grow text-xs leading-loose text-body">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-[11px] text-muted">
                {project.tags.map((tag, i) => {
                  const Icon = getSkillIcon(tag);
                  return (
                    <span key={i} className="flex items-center gap-1">
                      <Icon className="size-3 text-faint" strokeWidth={1.5} />
                      {tag.toLowerCase()}
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
