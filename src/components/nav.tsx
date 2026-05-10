"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/content";

export function Nav() {
  const [shrunk, setShrunk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[90] grid grid-cols-[auto_1fr_auto] items-center gap-7 transition-all duration-300 ${
          shrunk
            ? "max-md:bg-[rgba(195,255,249,.92)] md:bg-paper/85 backdrop-blur-[18px] max-md:py-2.5 md:py-2.5 px-14 max-md:px-[18px] shadow-[0_1px_0_rgba(14,31,21,.06)]"
            : "py-[18px] px-14 max-md:px-[18px] max-md:bg-transparent max-md:shadow-none"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className={`flex items-center gap-3 font-display text-[22px] text-ink transition-all duration-300 ${
            !shrunk ? "max-md:opacity-0 max-md:-translate-x-2 max-md:pointer-events-none" : ""
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="Murry's"
            width={120}
            height={120}
            className={`transition-all duration-300 ${
              shrunk ? "h-[72px] max-md:h-[42px] w-auto" : "h-[120px] max-md:h-[42px] w-auto"
            }`}
            priority
          />
        </a>

        {/* Desktop nav links */}
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

        {/* Desktop CTA */}
        <div className="justify-self-end hidden md:flex items-center gap-3.5">
          <a
            href={siteConfig.phoneHref}
            className="font-hand text-2xl text-forest -rotate-2"
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

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden justify-self-end w-12 h-12 rounded-full bg-cream border-[1.5px] border-ink flex items-center justify-center relative z-[101] shadow-[0_4px_14px_rgba(14,31,21,.08)] transition-all duration-[250ms] hover:rotate-90 hover:bg-leaf-bright hover:text-cream text-ink"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="relative block w-[18px] h-0.5">
            <span
              className={`absolute left-0 w-[18px] h-0.5 bg-current transition-transform duration-[250ms] ${
                menuOpen ? "top-0 rotate-45" : "top-[-6px]"
              }`}
            />
            <span
              className={`block w-[18px] h-0.5 transition-colors duration-[250ms] ${
                menuOpen ? "bg-transparent" : "bg-current"
              }`}
            />
            <span
              className={`absolute left-0 w-[18px] h-0.5 bg-current transition-transform duration-[250ms] ${
                menuOpen ? "top-0 -rotate-45" : "top-[6px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-[100] bg-[rgba(195,255,249,.97)] backdrop-blur-[20px] flex-col items-center justify-center gap-1.5 px-6 py-20 transition-opacity duration-300 ${
          menuOpen ? "flex opacity-100" : "hidden opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="font-display text-4xl text-ink py-3.5 hover:text-leaf-bright transition-colors"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-6 flex flex-col gap-3.5 items-center">
          <a
            href={siteConfig.phoneHref}
            onClick={closeMenu}
            className="font-hand text-[28px] text-forest"
          >
            {siteConfig.phone}
          </a>
          <a
            href="#book"
            onClick={closeMenu}
            className="inline-flex items-center gap-2.5 px-[30px] py-[18px] rounded-full bg-forest text-cream font-semibold text-[13px] tracking-[.18em] uppercase transition-all duration-[350ms] hover:bg-leaf hover:-translate-y-0.5 hover:shadow-md"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
}
