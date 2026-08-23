import { motion } from 'motion/react';
import { Briefcase, Code, Coffee, ArrowRight } from 'lucide-react';

const contactCards = [
  {
    title: "Hire Full-time",
    description: "Looking for a dedicated developer to join your engineering team?",
    icon: Briefcase
  },
  {
    title: "Freelance Project",
    description: "Need a high-impact landing page or web app built from scratch?",
    icon: Code
  },
  {
    title: "Collaboration",
    description: "Have a startup idea or open source project you want to discuss?",
    icon: Coffee
  }
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mb-10 flex items-baseline gap-3">
        <span className="text-xs text-faint">05</span>
        <h2 className="text-base font-bold text-ink">Contact</h2>
      </div>

      <div className="mb-10 max-w-xl">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[26px] font-bold leading-snug tracking-tight text-ink sm:text-[32px]"
        >
          Wanna chat?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-3 text-sm leading-loose"
        >
          Whether you need a full-time engineer, a freelance expert, or just want to
          talk tech — I'm just a message away.
        </motion.p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {contactCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.18) }}
            className="rounded-[6px] border border-line bg-surface p-5 transition-colors hover:border-edge"
          >
            <card.icon className="mb-4 size-6 text-muted" strokeWidth={1.5} />
            <h4 className="mb-2 text-sm font-semibold text-ink">{card.title}</h4>
            <p className="text-xs leading-loose text-body">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new Event('open-chatbox'));
          }}
          className="btn-solid group cursor-pointer"
        >
          connect here
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </motion.div>
    </section>
  );
}
