import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SectionHeading({ index, eyebrow, title, sub }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="eyebrow"
      >
        {index} · {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
        className="mt-3 font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight text-ink"
      >
        {title}
      </motion.h2>
      {sub && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
          className="mt-3 text-[15px] leading-relaxed text-muted max-w-xl"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}
