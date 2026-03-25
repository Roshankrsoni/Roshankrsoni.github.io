import { motion } from 'motion/react';
import { Briefcase, Code, Coffee, ArrowRight } from 'lucide-react';

const contactCards = [
  {
    title: "Hire Full-time",
    description: "Looking for a dedicated developer to join your engineering team?",
    icon: Briefcase,
    color: "text-blue-500"
  },
  {
    title: "Freelance Project",
    description: "Need a high-impact landing page or web app built from scratch?",
    icon: Code,
    color: "text-emerald-500"
  },
  {
    title: "Collaboration",
    description: "Have a startup idea or open source project you want to discuss?",
    icon: Coffee,
    color: "text-amber-500"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="w-full pt-8 pb-12 mt-4 border-t border-slate-200 dark:border-slate-800/50">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 space-y-2">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-50"
        >
          Wanna <span className="font-dancing-script font-bold text-rose-500">Chat</span>?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xs sm:text-sm max-w-lg text-slate-500 dark:text-slate-400 font-inter leading-relaxed"
        >
          Whether you need a full-time engineer, a freelance expert, or just want to talk tech—I'm just a message away.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {contactCards.map((card, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col p-5 bg-slate-50 dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className={`p-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <button 
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('open-chatbox'));
          }}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-full text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer w-auto"
        >
          <span>Connect here</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </motion.div>
    </section>
  );
}
