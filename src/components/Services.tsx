import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Smartphone, BrainCircuit, LayoutTemplate, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const servicesData = [
  {
    title: "Mobile App Development",
    description: "High-quality React Native apps for iOS and Android with smooth UX, offline-first patterns, and maintainable codebases ready for long-term growth.",
    icon: Smartphone,
    number: "01",
  },
  {
    title: "AI Integration & Automation",
    description: "Embedding AI into existing products and workflows: recommendation systems, smart search, and AI-assisted features, without compromising reliability or performance.",
    icon: BrainCircuit,
    number: "02",
  },
  {
    title: "Frontend Web Development",
    description: "Responsive, accessible, pixel-perfect interfaces using React and Next.js, with clean state management and attention to real-world performance budgets.",
    icon: LayoutTemplate,
    number: "03",
  },
  {
    title: "Full Stack Architecture",
    description: "End-to-end solutions using Node.js, modern databases, and cloud-ready patterns, with clear boundaries between services and a focus on observability.",
    icon: Code2,
    number: "04",
  }
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering, activeIndex]);

  return (
    <section id="services" className="w-full py-20 sm:py-24">
      <SectionHeading
        index="03"
        eyebrow="Expertise"
        title={<>What I do <em className="text-aurora font-light">best</em>.</>}
        sub="Four disciplines, one standard: software that holds up in production."
      />

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10">
        <div
          className="order-2 lg:order-1 flex flex-col justify-center"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {servicesData.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.6, ease: EASE }}
              className={`relative flex items-center gap-5 text-left px-5 py-5 cursor-pointer rounded-2xl group transition-colors duration-200 ${
                activeIndex !== index ? 'hover:bg-ink/[0.03] dark:hover:bg-white/[0.03]' : ''
              }`}
            >
              {activeIndex === index && (
                <motion.div
                  layoutId="serviceActiveBg"
                  transition={{ type: 'spring', stiffness: 350, damping: 34 }}
                  className="absolute inset-0 glass rounded-2xl"
                >
                  <div className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-accent to-accent-2" />
                </motion.div>
              )}
              <span className={`relative z-10 font-display italic text-2xl leading-none transition-colors duration-300 ${
                activeIndex === index ? 'text-aurora' : 'text-faint group-hover:text-muted'
              }`}>
                {service.number}
              </span>
              <span className={`relative z-10 text-base sm:text-lg font-medium transition-colors duration-200 ${
                activeIndex === index ? 'text-ink' : 'text-muted group-hover:text-ink'
              }`}>
                {service.title}
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="order-1 lg:order-2 h-[280px] sm:h-[340px] w-full relative"
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden glass flex flex-col items-center justify-center p-6 text-center">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-[0.12] dark:opacity-[0.18] pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, var(--accent-2), transparent 70%)' }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-[0.10] dark:opacity-[0.14] pointer-events-none"
              style={{ background: 'radial-gradient(circle at center, var(--accent), transparent 70%)' }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.16, ease: 'easeIn' } }}
                className="relative z-10 flex flex-col items-center"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="aurora-ring rounded-2xl size-16 mb-5 flex items-center justify-center"
                >
                  {(() => {
                    const Icon = servicesData[activeIndex].icon;
                    return <Icon className="w-7 h-7 text-accent" strokeWidth={1.4} />;
                  })()}
                </motion.div>

                <div className="relative z-10 max-w-sm">
                  <h4 className="font-display text-xl sm:text-2xl text-ink mb-2.5">
                    {servicesData[activeIndex].title}
                  </h4>
                  <p className="text-muted text-[13px] leading-[1.75]">
                    {servicesData[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-5 right-6 font-display italic text-lg text-faint">
              {servicesData[activeIndex].number}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex justify-center mt-12"
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-canvas text-sm font-medium hover:opacity-90 transition-all glow-accent"
        >
          <span>Let's work together</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
}
