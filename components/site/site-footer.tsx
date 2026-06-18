import Link from "next/link";
import { products } from "@/lib/site-data";
import { Mail } from "lucide-react";

const footerCols = [
  {
    title: "Products",
    links: products.map((p) => ({ name: p.short, href: `/solutions#${p.slug}` })),
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Industries", href: "/industries" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Request Demo", href: "/contact" },
      { name: "Documentation", href: "/solutions" },
      { name: "Support", href: "/contact" },
      { name: "Privacy", href: "/about" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-secondary/40">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display text-lg">
                T
              </span>
              <span className="font-display text-xl tracking-tight">TechVision</span>
            </Link>
            <p className="mt-5 text-muted-foreground max-w-sm leading-relaxed">
              Smart digital solutions for schools, universities, and businesses across Ethiopia and beyond.
            </p>
            <a
              href="mailto:info@techvision.edu.et"
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@techvision.edu.et
            </a>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="font-medium text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TechVision. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-mono">techvision.edu.et</p>
        </div>
      </div>
    </footer>
  );
}
