import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const blogs = [
  {
    id: 0,
    title: "Understanding Big O Notation for Frontend Developers",
    excerpt: "Learn Big O notation essentials with simple explanations and real JavaScript examples. Understand constant, linear, and quadratic time complexities to write more efficient frontend code and ace technical interviews.",
    date: "Jan 23, 2025",
    readTime: "4 min read",
    link: "https://dev.to/roshankrsoni/understanding-big-o-notation-for-frontend-developers-2pdc"
  },
  {
    id: 1,
    title: "A Quick way to open anything on the Web",
    excerpt: "A quick way to open common web tools is to type special .new URLs directly in your browser, such as repo.new for a new GitHub repository, docs.new for a new Google Doc, or react.new for a new...",
    date: "Oct 8, 2020",
    readTime: "1 min read",
    link: "https://lymcode.hashnode.dev/a-quick-way-to-open-anything-on-the-web"
  },
  {
    id: 2,
    title: "How do you check an object is a promise or not",
    excerpt: "A promise in JavaScript can be detected by checking if the value has a callable then method, for example: value && typeof value.then === 'function' returns true for promises and false for non-promises...",
    date: "Oct 4, 2020",
    readTime: "2 min read",
    link: "https://lymcode.hashnode.dev/how-do-you-check-an-object-is-a-promise-or-not"
  },
  {
    id: 3,
    title: "Render any JSON data in tree view",
    excerpt: "You can render any JSON data as a collapsible tree view in the browser by using the lightweight renderjson library, which converts a JavaScript object into an interactive, expandable HTML structure with customizable styling via CSS...",
    date: "Oct 11, 2020",
    readTime: "2 min read",
    link: "https://lymcode.hashnode.dev/render-any-json-data-in-tree-view"
  }
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section id="blogs" className="w-full py-20 sm:py-24">
      <SectionHeading
        index="04"
        eyebrow="Writing"
        title={<>Notes &amp; <em className="text-aurora font-light">essays</em>.</>}
        sub="Occasional writing on JavaScript, frontend craft, and things I learn building software."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedBlogs.map((blog, index) => (
          <motion.a
            key={blog.id}
            href={blog.link}
            aria-label={`Read article: ${blog.title}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: EASE }}
            className="group relative flex flex-col h-full glass rounded-3xl overflow-hidden transition-all duration-500 ease-expo hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]"
          >
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex flex-col grow p-6 z-10">
              <h3 className="font-display text-xl leading-snug text-ink transition-colors duration-300 group-hover:text-accent line-clamp-2 mb-3">
                {blog.title}
              </h3>

              <p className="text-[13px] text-muted line-clamp-3 mb-6 grow leading-[1.7]">
                {blog.excerpt}
              </p>

              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono rounded-full bg-ink/[0.04] dark:bg-white/[0.05] border border-line text-faint">
                    <Calendar className="w-3 h-3" />
                    <time>{blog.date}</time>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono rounded-full bg-ink/[0.04] dark:bg-white/[0.05] border border-line text-faint">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[13px] font-medium text-muted group-hover:text-accent transition-colors">
                  Read article
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {blogs.length > 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium text-ink hover:border-accent/40 transition-all cursor-pointer"
          >
            {showAll ? "Show less" : "Read more articles"}
          </button>
        </motion.div>
      )}
    </section>
  );
}
