import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Smartphone, BrainCircuit, LayoutTemplate, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    title: "Mobile App Development",
    description: "Cross‑platform, high‑performance iOS and Android apps using React Native, with smooth native‑like interactions and offline‑first experiences.",
    icon: Smartphone,
    number: "01",
    color: "text-rose-500"
  },
  {
    title: "AI Integration & Automation",
    description: "Enhancing applications with cutting-edge AI capabilities, integrating LLMs and machine learning APIs to build intelligent, future-ready products.",
    icon: BrainCircuit,
    number: "02",
    color: "text-emerald-500"
  },
  {
    title: "Frontend Web Development",
    description: "Crafting responsive, accessible, and pixel-perfect web interfaces using React.js, Next.js, and modern state management architectures.",
    icon: LayoutTemplate,
    number: "03",
    color: "text-violet-500"
  },
  {
    title: "Full Stack Architecture",
    description: "Designing robust backend systems and APIs with Node.js, Express, and scalable databases like PostgreSQL and MongoDB.",
    icon: Code2,
    number: "04",
    color: "text-blue-500"
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="min-h-[50vh] w-full flex flex-col py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
          >
            My <span className="font-dancing-script font-bold text-amber-500">Services</span> & Expertise.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
          >
            What I can do for you
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-8">
        <div className="order-2 lg:order-1 flex flex-col justify-center space-y-2">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative pl-6 py-5 cursor-pointer transition-all duration-300 rounded-r-2xl group ${activeIndex === index ? 'bg-slate-100 dark:bg-slate-900/80' : 'hover:bg-slate-50 dark:hover:bg-slate-900/40'}`}
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                {activeIndex === index && <motion.div layoutId="activeService" className="w-full h-full bg-blue-500 dark:bg-blue-400"></motion.div>}
              </div>
              <h3 className={`text-sm font-medium transition-colors duration-200 flex items-center ${activeIndex === index ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100'}`}>
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 h-[250px] sm:h-[300px] w-full relative perspective-1000"
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 shadow-xl shadow-slate-200/50 dark:shadow-black/40 flex flex-col items-center justify-center p-5 text-center">
            <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none bg-[radial-gradient(#64748b_2px,transparent_2px)] [background-size:24px_24px]"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col items-center"
              >
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 size-16 mb-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-lg"
                >
                  {(() => {
                    const Icon = servicesData[activeIndex].icon;
                    return <Icon className={`w-8 h-8 ${servicesData[activeIndex].color}`} />;
                  })()}
                </motion.div>
                
                <div className="relative z-10 max-w-sm">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {servicesData[activeIndex].title}
                  </h4>
                  <p className="text-slate-600 font-inter dark:text-slate-400 text-xs leading-relaxed">
                    {servicesData[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute top-5 right-5 font-mono text-xs font-bold text-slate-300 dark:text-slate-700">
              {servicesData[activeIndex].number}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <a className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md" href="#contact">
          <span>Let's work together</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
