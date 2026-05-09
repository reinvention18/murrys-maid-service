"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/content";

export function Nav() {
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[90] grid grid-cols-[auto_1fr_auto] items-center gap-7 transition-all duration-300 ${
        shrunk
          ? "bg-paper/85 backdrop-blur-[18px] py-3 px-9 shadow-[0_1px_0_rgba(14,31,21,.06)]"
          : "py-5 px-9"
      }`}
    >
      <a href="#top" className="flex items-center gap-3 font-display text-[22px] text-ink">
        <Image
          src="/images/logo.png"
          alt="Murry's"
          width={54}
          height={54}
          className={`transition-all duration-300 ${shrunk ? "h-[42px] w-auto" : "h-[54px] w-auto"}`}
        />
      </a>

      <div className="hidden md:flex justify-center gap-9 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative py-1.5 transition-colors hover:text-leaf group"
          >
            {link.label}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-leaf-bright rounded transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="justify-self-end flex items-center gap-3.5">
        <a
          href={siteConfig.phoneHref}
          className="hidden md:block font-hand text-2xl text-forest -rotate-2"
        >
          {siteConfig.phone} ↗
        </a>
        <a
          href="#book"
          className="inline-flex items-center gap-2.5 px-[30px] py-[18px] rounded-full bg-forest text-cream font-semibold text-[13px] tracking-[.18em] uppercase transition-all duration-[350ms] hover:bg-leaf hover:-translate-y-0.5 hover:-rotate-[.5deg] hover:shadow-md"
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
