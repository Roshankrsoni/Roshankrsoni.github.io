import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbox from './components/Chatbox';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-100 dark:selection:bg-blue-900 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <main className="min-h-[50vh] max-w-5xl mx-auto pt-3 pb-8">
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <Blogs />
        <Contact />
      </main>
      <Footer />
      <Chatbox />
    </div>
  );
}
