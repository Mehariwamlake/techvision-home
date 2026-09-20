import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { solutionsProducts } from "./solutions-content";
export function ProductSections() {
  return (
    <div className="mx-auto flex max-w-[1264px] flex-col gap-36 px-6 py-24">
      {solutionsProducts.map((product, idx) => {
        const reversed = idx % 2 === 1;
        return (
          <section
            key={product.slug}
            id={product.slug}
            className="scroll-mt-24 border border-[#111827] bg-[#FCF8FA] shadow-[-8px_5px_0_-1px_#FCF8FA,-8px_5px_0_0_#111827]"
          >
            <div className="py-16">
              <div className="grid grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:items-start lg:px-0">
                <div
                  className={`lg:col-span-5 lg:row-start-1 ${
                    reversed ? "lg:col-start-7" : "lg:col-start-2"
                  }`}
                >
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
                    {product.short}
                  </span>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-balance">
                    {product.tagline}
                  </h2>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                          <Check className="h-3 w-3 text-primary" />
                        </span>
                        <span className="text-sm text-foreground/90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors group"
                    >
                      Request Demo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-sm text-muted-foreground">
                      From{" "}
                      <span className="font-medium text-foreground">
                        ${product.startingPrice}
                      </span>
                      /mo
                    </span>
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 lg:row-start-1 ${
                    reversed ? "lg:col-start-2" : "lg:col-start-7"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
                    <Image
                      src={product.image}
                      alt={`${product.name} dashboard`}
                      width={1200}
                      height={780}
                      className="rounded-xl w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
