import { motion, useScroll, useTransform } from 'motion/react';
import { useDevicePerformance } from '../hooks/useDevicePerformance';

const GRAIN = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Aurora() {
  const { prefersReducedMotion } = useDevicePerformance();
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 1200], [0, prefersReducedMotion ? 0 : 140]);
  const yB = useTransform(scrollY, [0, 1200], [0, prefersReducedMotion ? 0 : -90]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        style={{
          y: yA,
          background: 'radial-gradient(circle at center, var(--accent), transparent 68%)',
        }}
        className="absolute -top-48 -left-48 w-[46rem] h-[46rem] rounded-full blur-3xl opacity-[0.10] dark:opacity-[0.16]"
      />
      <motion.div
        style={{
          y: yB,
          background: 'radial-gradient(circle at center, var(--accent-2), transparent 68%)',
        }}
        className="absolute top-1/4 -right-56 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-[0.08] dark:opacity-[0.13]"
      />
      <div
        style={{
          background: 'radial-gradient(circle at center, var(--accent), transparent 70%)',
        }}
        className="absolute bottom-[-20rem] left-1/4 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-[0.05] dark:opacity-[0.08]"
      />

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div
        className="absolute inset-0 opacity-0 dark:opacity-[0.04]"
        style={{ backgroundImage: GRAIN }}
      />
    </div>
  );
}
