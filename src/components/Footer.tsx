import { Twitter, Linkedin, Mail, Github, Instagram } from 'lucide-react';

const pageLinks = [
  { label: "home", href: "#" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "services", href: "#services" },
  { label: "contact", href: "#contact" }
];

const resourceLinks = [
  { label: "blog", href: "https://lymcode.hashnode.dev/" },
  { label: "github", href: "https://github.com/roshankrsoni" }
];

const socials = [
  { label: "GitHub", href: "https://github.com/roshankrsoni", Icon: Github },
  { label: "Twitter", href: "https://x.com/roshankrsoni", Icon: Twitter },
  { label: "Instagram", href: "https://instagram.com/roshankrsoni", Icon: Instagram },
  { label: "Mail", href: "mailto:roshanx404@gmail.com", Icon: Mail },
  { label: "Linkedin", href: "https://www.linkedin.com/in/roshankrsoni/", Icon: Linkedin }
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      {/* cells */}
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-4 border-b border-line px-6 py-10 md:border-b-0 md:border-r">
          <span className="text-xs text-muted">pages</span>
          <nav className="flex flex-col items-center gap-2.5">
            {pageLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-body no-underline transition-colors hover:text-ink hover:underline hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 flex-col items-center gap-4 border-b border-line px-6 py-10 md:border-b-0 md:border-r">
          <span className="text-xs text-muted">resources</span>
          <nav className="flex flex-col items-center gap-2.5">
            {resourceLinks.map((link) => (
              <a
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                href={link.href}
                className="text-[13px] text-body no-underline transition-colors hover:text-ink hover:underline hover:underline-offset-4"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 flex-col items-center gap-4 px-6 py-10">
          <span className="text-xs text-muted">connect</span>
          <p className="max-w-[26ch] text-center text-[13px] leading-loose text-body">
            Wanna chat? Reach out anywhere below.
          </p>
          <div className="flex items-center justify-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                href={href}
                className="btn-icon !size-9"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* legal bar */}
      <div className="flex flex-col items-center justify-between gap-3 border-t border-line px-6 py-5 text-[11px] text-muted sm:flex-row sm:px-14 xl:px-20">
        <span>© {year} Roshan Kr Soni. All rights reserved.</span>
        <span className="flex items-center gap-3">
          built by
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
            href="https://www.linkedin.com/in/roshankrsoni/"
          >
            Roshan Kr Soni
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block" aria-label="Web Hit Counter">
            <img
              src={`https://counter.websiteout.com/compte.php?S=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : 'https://roshankrsoni.github.io/')}&C=20&D=0&N=20000&M=1`}
              alt="web hit counter"
              className="object-contain opacity-70 transition-opacity hover:opacity-100"
            />
          </a>
        </span>
      </div>
    </footer>
  );
}
