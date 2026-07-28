import { motion } from 'motion/react';
import { Briefcase, Code, Coffee, ArrowUpRight } from 'lucide-react';

const contactCards = [
  {
    title: "Hire full-time",
    description: "Looking for a dedicated senior engineer to join your team and own the frontend?",
    icon: Briefcase,
  },
  {
    title: "Freelance project",
    description: "Need a high-impact app or platform designed, built, and shipped end to end?",
    icon: Code,
  },
  {
    title: "Collaboration",
    description: "Have a startup idea or an open source project you want to talk through?",
    icon: Coffee,
  }
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 sm:py-28 mt-4 border-t border-line">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow"
        >
          05 · Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink"
        >
          Let's build something <em className="text-aurora font-light">worth shipping</em>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          className="mt-5 text-[15px] leading-[1.75] max-w-lg text-muted"
        >
          Whether you need a full-time engineer, a freelance expert, or just want to talk tech, I'm one message away.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {contactCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: EASE }}
            className="group relative flex flex-col items-center text-center p-7 glass rounded-3xl transition-all duration-500 ease-expo hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
          >
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="aurora-ring rounded-2xl p-3.5 mb-5 transition-transform duration-300 group-hover:scale-110">
              <card.icon className="w-5 h-5 text-accent" strokeWidth={1.4} />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">{card.title}</h3>
            <p className="text-[13px] text-muted leading-[1.7]">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex justify-center"
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('open-chatbox'));
          }}
          className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink text-canvas text-sm font-medium hover:opacity-90 transition-all glow-accent cursor-pointer"
        >
          <span>Start a conversation</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </motion.div>
    </section>
  );
}
