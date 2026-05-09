"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { heroWords, siteConfig } from "@/lib/content";
import { Marquee } from "./marquee";

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const rotate = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setWordIndex((i) => (i + 1) % heroWords.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotate, 2200);
    return () => clearInterval(interval);
  }, [rotate]);

  return (
    <section className="relative pt-[130px] px-9 overflow-hidden min-h-screen flex flex-col" id="top">
      {/* Giant background M */}
      <div className="absolute font-display text-[min(78vw,820px)] leading-[.7] text-transparent [-webkit-text-stroke:1.5px_rgba(15,82,54,.07)] top-[-2%] left-[-4%] pointer-events-none z-0 -rotate-[4deg]">
        M
      </div>

      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-[1.05fr_.95fr_1fr] gap-8 items-end flex-1 max-w-[1320px] w-full mx-auto">
        {/* Left column */}
        <div className="relative z-[3] pb-0 md:pb-20">
          <div className="inline-flex items-center gap-3 mb-7">
            <span className="font-hand text-[32px] text-leaf -rotate-2">hi! we&apos;re Murry&apos;s.</span>
            <span className="w-[60px] h-px bg-ink opacity-40" />
            <span className="text-[11px] tracking-[.32em] uppercase font-semibold">St. Louis</span>
          </div>

          <h1 className="font-display font-normal text-[clamp(54px,6.6vw,96px)] leading-[.96] tracking-tight text-ink">
            We make<br />your home<br />
            <span className="relative inline-block h-[1.05em] overflow-hidden align-bottom min-w-[5.6em]">
              <span
                className={`block text-leaf italic font-display transition-transform duration-[550ms] ease-[cubic-bezier(.7,0,.3,1)] ${
                  isTransitioning ? "-translate-y-full" : "translate-y-0"
                }`}
              >
                {heroWords[wordIndex]}
              </span>
            </span>
          </h1>

          <p className="text-[17px] leading-relaxed text-ink-2 max-w-[520px] mt-6 mb-7">
            A family-owned cleaning service for the St. Louis Metro &amp; Metro East — founded by sisters{" "}
            <strong>Sarah Murry &amp; Hannah Hancock</strong>. Built on trust, hard work, and a deep commitment to{" "}
            <em>exceptional</em> service.
          </p>

          <div className="flex flex-wrap gap-3.5 items-center mb-9">
            <a
              href="#book"
              className="inline-flex items-center gap-2.5 px-[30px] py-[18px] rounded-full bg-forest text-cream font-semibold text-[13px] tracking-[.18em] uppercase transition-all duration-[350ms] hover:bg-leaf hover:-translate-y-0.5 hover:-rotate-[.5deg] hover:shadow-md"
            >
              Get a Free Quote ✨
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2.5 px-[30px] py-[18px] rounded-full border-[1.5px] border-ink text-ink font-semibold text-[13px] tracking-[.18em] uppercase transition-all duration-[350ms] hover:bg-ink hover:text-cream"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          <div className="flex gap-9 items-center">
            <div>
              <strong className="font-display text-[30px] text-ink block leading-none">842</strong>
              <span className="text-xs tracking-[.16em] uppercase text-ink-2 font-medium">FB followers</span>
            </div>
            <div className="w-px h-[42px] bg-ink opacity-[.18]" />
            <div>
              <strong className="font-display text-[30px] text-ink block leading-none">5.0</strong>
              <span className="text-xs tracking-[.16em] uppercase text-ink-2 font-medium">Avg rating</span>
            </div>
            <div className="w-px h-[42px] bg-ink opacity-[.18]" />
            <div>
              <strong className="font-display text-[30px] text-ink block leading-none">2</strong>
              <span className="text-xs tracking-[.16em] uppercase text-ink-2 font-medium">Sister-owned</span>
            </div>
          </div>
        </div>

        {/* Sarah cutout - center */}
        <div className="relative flex justify-center items-end mb-[-130px] md:mb-[-130px] z-[4]">
          <span className="absolute text-gold z-[3] pointer-events-none animate-twink top-[14%] left-[8%] text-2xl">✦</span>
          <span className="absolute text-blush-deep z-[3] pointer-events-none animate-twink top-[6%] right-[6%] text-[30px] [animation-delay:.6s]">✿</span>
          <Image
            src="/images/sarah-hero.png"
            alt="Sarah, founder of Murry's Maid Service"
            width={560}
            height={800}
            className="relative z-[2] w-[min(560px,46vw)] md:w-[min(560px,46vw)] h-auto drop-shadow-[0_28px_38px_rgba(14,31,21,.18)]"
            priority
          />
          <span className="absolute left-1/2 bottom-[130px] w-[min(440px,38vw)] h-[72%] bg-gradient-to-b from-sage/55 to-blush/35 -translate-x-1/2 rounded-t-[240px] z-[1]" />
        </div>

        {/* Right column */}
        <div className="relative z-[3] pb-0 md:pb-[120px] flex flex-col items-center md:items-end justify-end gap-6">
          {/* Testimonial card */}
          <div className="bg-cream p-6 rounded-[18px] shadow-md w-[280px] relative text-left rotate-2 transition-transform duration-[400ms] hover:rotate-0 hover:scale-[1.04]">
            <span className="absolute top-[-22px] left-[18px] font-display text-[62px] leading-[.7] text-blush">&ldquo;</span>
            <span className="absolute w-[70px] h-[18px] bg-sage/85 top-[-9px] right-[18px] rotate-[8deg] shadow-sm" />
            <div className="text-gold text-[13px] tracking-[2px] mt-1.5 mb-1.5">★★★★★</div>
            <div className="font-body font-bold text-[13px] text-ink">
              Ashley Christine
              <small className="block font-medium text-[11px] text-ink-2 mt-0.5">Verified · Facebook</small>
            </div>
            <p className="font-display text-base leading-[1.4] text-ink mt-2">
              Sarah did a fantastic job and used safe products on my floors for my 7-month-old baby!
            </p>
          </div>

          {/* Arrow doodle */}
          <div className="hidden md:inline-flex flex-col items-start font-hand text-[22px] text-blush-deep rotate-[8deg] leading-none">
            that&apos;s our Sarah!
            <svg width="50" height="34" viewBox="0 0 60 40" className="mt-1.5 text-blush-deep">
              <path d="M58 4 Q 48 32, 12 32 L 18 26 M 12 32 L 12 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <span className="absolute z-[1] pointer-events-none top-[30%] right-[18%] w-[46px] h-[24px] bg-gradient-to-b from-leaf-bright/100 via-leaf-bright/100 to-sun/100 [background-size:100%_200%] rounded-b-full -rotate-12" />

      {/* Marquee ribbon at bottom */}
      <div className="relative z-[3] mt-auto">
        <Marquee />
      </div>
    </section>
  );
}
