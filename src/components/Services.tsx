import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Smartphone, BrainCircuit, LayoutTemplate, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: "Mobile App Development",
    description: "Building high-quality React Native apps for iOS and Android with smooth UX, offline-first patterns, and maintainable codebases ready for long-term growth.",
    icon: Smartphone,
    number: "01"
  },
  {
    title: "AI Integration & Automation",
    description: "Embedding AI into existing products and workflows—recommendation systems, smart search, and AI-assisted features—without compromising reliability or performance.",
    icon: BrainCircuit,
    number: "02"
  },
  {
    title: "Frontend Web Development",
    description: "Crafting responsive, accessible, and pixel-perfect interfaces using React and Next.js, with clean state management and attention to real-world performance budgets.",
    icon: LayoutTemplate,
    number: "03"
  },
  {
    title: "Full Stack Architecture",
    description: "Designing end-to-end solutions using Node.js, modern databases, and cloud-ready patterns, with clear boundaries between services and a focus on observability.",
    icon: Code2,
    number: "04"
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="section">
      <div className="mb-10 flex items-baseline gap-3">
        <span className="text-xs text-faint">03</span>
        <h2 className="text-base font-bold text-ink">Services & expertise</h2>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
        {/* list — tab-style rows */}
        <div className="order-2 flex flex-1 flex-col justify-center lg:order-1" role="tablist">
          {servicesData.map((service, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`group flex cursor-pointer items-center gap-4 border-b border-line py-5 text-left transition-colors first:border-t ${
                activeIndex === index ? 'bg-transparent' : ''
              } hover:bg-surface/60`}
            >
              <span className={`w-7 text-xs ${activeIndex === index ? 'text-ink' : 'text-faint'}`}>
                {service.number}
              </span>
              <span
                className={`flex-1 text-sm transition-colors ${
                  activeIndex === index ? 'font-semibold text-ink' : 'text-body group-hover:text-ink'
                }`}
              >
                {service.title}
              </span>
              <span className={`text-xs transition-opacity ${activeIndex === index ? 'text-ink opacity-100' : 'text-muted opacity-0 group-hover:opacity-100'}`}>
                →
              </span>
            </button>
          ))}
        </div>

        {/* preview panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="order-1 lg:order-2 lg:w-[46%]"
        >
          <div className="relative flex h-full min-h-[280px] flex-col justify-center overflow-hidden rounded-[6px] border border-line bg-surface p-7 sm:p-9">
            {/* dot grid texture */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20 [background-image:radial-gradient(var(--edge)_1px,transparent_1px)] [background-size:20px_20px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="relative z-10 flex flex-col items-start"
              >
                {(() => {
                  const ActiveIcon = servicesData[activeIndex].icon;
                  return <ActiveIcon className="mb-5 size-10 text-ink" strokeWidth={1.25} />;
                })()}
                <h3 className="mb-3 text-base font-bold text-ink">
                  {servicesData[activeIndex].title}
                </h3>
                <p className="max-w-sm text-sm leading-loose text-body">
                  {servicesData[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <span className="absolute right-6 top-6 text-xs text-faint">
              {servicesData[activeIndex].number} / 04
            </span>
          </div>
        </motion.div>
      </div>

      <div className="mt-12">
        <a href="#contact" className="btn-outline group">
          let's work together
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
