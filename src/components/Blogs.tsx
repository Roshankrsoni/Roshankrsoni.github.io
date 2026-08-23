import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';

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

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section id="blogs" className="section">
      <div className="mb-10 flex items-baseline gap-3">
        <span className="text-xs text-faint">04</span>
        <h2 className="text-base font-bold text-ink">Latest writings</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayedBlogs.map((blog, index) => (
          <motion.a
            key={blog.id}
            href={blog.link}
            aria-label={`Read article: ${blog.title}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.18) }}
            className="group flex h-full flex-col rounded-[6px] border border-line bg-surface p-5 no-underline transition-colors hover:border-edge"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold leading-snug text-ink underline-offset-4 group-hover:underline group-hover:decoration-line">
                {blog.title}
              </h3>
              <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-faint transition-colors group-hover:text-ink" />
            </div>

            <p className="mb-6 line-clamp-3 grow text-xs leading-loose text-body">
              {blog.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3.5 text-[11px] text-muted">
              <span className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {blog.readTime}
                </span>
              </span>
              <span className="flex items-center gap-1 text-ink opacity-70 transition-opacity group-hover:opacity-100">
                read
                <ArrowRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {blogs.length > 3 && (
        <div className="mt-8">
          <button onClick={() => setShowAll(!showAll)} className="btn-outline cursor-pointer">
            {showAll ? "show less" : "read more articles"}
          </button>
        </div>
      )}
    </section>
  );
}
