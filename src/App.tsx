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
    <div className="min-h-screen bg-page font-mono text-body">
      {/* Centered container with hairline side rails, like opencode.ai */}
      <div className="mx-auto max-w-[67.5rem] min-[68rem]:border-x min-[68rem]:border-line">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Services />
          <Blogs />
          <Contact />
        </main>
        <Footer />
      </div>
      <Chatbox />
    </div>
  );
}
