
import { cn } from "~/lib/utils";

const footerLinks = {
  solutions: [
    { label: "AI Automation", href: "#ai-automation" },
    { label: "SaaS Products", href: "#saas-products" },
    { label: "Blockchain & Web3", href: "#norchain" },
    { label: "Enterprise Services", href: "#what-we-deliver" },
  ],
  products: [
    { label: "Xala PM", href: "#saas-products" },
    { label: "Xala Auth", href: "#saas-products" },
    { label: "NorChain", href: "https://norchain.org", external: true },
  ],
  company: [
    { label: "About Us", href: "#track-record" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "mailto:hello@xala.no" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative py-16 px-6 md:px-12 lg:px-24",
        "bg-bg-elevated",
        "border-t border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-xala flex items-center justify-center">
                <span className="text-bg font-bold text-lg">X</span>
              </div>
              <span className="font-display text-heading-sm font-bold text-text">
                Xala Technologies
              </span>
            </div>
            <p className="text-body-sm text-text-muted leading-relaxed mb-4">
              Engineering-led technology company specializing in AI automation,
              SaaS platforms, and blockchain infrastructure.
            </p>
            <div className="flex items-center gap-2 text-body-sm text-text-dim">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Oslo, Norway
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="text-label-sm font-semibold text-text uppercase tracking-wider mb-4">
              Solutions
            </div>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-sm text-text-muted hover:text-xala transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <div className="text-label-sm font-semibold text-text uppercase tracking-wider mb-4">
              Products
            </div>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "text-body-sm text-text-muted hover:text-xala transition-colors duration-200",
                      "inline-flex items-center gap-1"
                    )}
                  >
                    {link.label}
                    {link.external && (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-label-sm font-semibold text-text uppercase tracking-wider mb-4">
              Company
            </div>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-sm text-text-muted hover:text-xala transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-label-sm font-semibold text-text uppercase tracking-wider mb-4">
              Legal
            </div>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body-sm text-text-muted hover:text-xala transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-body-sm text-text-dim">
              &copy; {currentYear} Xala Technologies AS. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              {/* Social Links */}
              <a
                href="https://linkedin.com/company/xala-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-xala transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/xala-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dim hover:text-xala transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
