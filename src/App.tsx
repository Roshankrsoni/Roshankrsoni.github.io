import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { loadDeferredSections, onDeferredSectionsReady } from './utils/deferredSections';

const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Blogs = lazy(() => import('./components/Blogs'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Chatbox = lazy(() => import('./components/Chatbox'));

const SECTION_IDS = ['experience', 'projects', 'services', 'blogs', 'contact'];
const INTENT_EVENTS = ['wheel', 'touchmove', 'scroll', 'keydown'] as const;

function isSectionHash(hash: string) {
  return SECTION_IDS.some((id) => hash === `#${id}`);
}

function useDeferredSections() {
  const [ready, setReady] = useState(false);

  useEffect(() => onDeferredSectionsReady(() => setReady(true)), []);

  useEffect(() => {
    if (ready) return;
    if (isSectionHash(window.location.hash)) {
      loadDeferredSections();
      return;
    }

    const onHashChange = () => {
      if (isSectionHash(window.location.hash)) loadDeferredSections();
    };
    window.addEventListener('hashchange', onHashChange);
    for (const event of INTENT_EVENTS) {
      window.addEventListener(event, loadDeferredSections, { once: true, passive: true });
    }
    const safetyTimer = window.setTimeout(loadDeferredSections, 2000);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      for (const event of INTENT_EVENTS) window.removeEventListener(event, loadDeferredSections);
      window.clearTimeout(safetyTimer);
    };
  }, [ready]);

  return ready;
}

export default function App() {
  const belowFoldReady = useDeferredSections();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <main className="min-h-[50vh] max-w-5xl mx-auto pt-3 pb-8">
        <Hero />
        {belowFoldReady && (
          <Suspense fallback={null}>
            <Experience />
            <Projects />
            <Services />
            <Blogs />
            <Contact />
          </Suspense>
        )}
      </main>
      {belowFoldReady && (
        <Suspense fallback={null}>
          <Footer />
          <Chatbox />
        </Suspense>
      )}
    </div>
  );
}
