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
    <section className="relative pt-[165px] max-md:pt-24 max-[480px]:pt-[84px] px-9 max-md:px-[18px] max-[480px]:px-3.5 overflow-hidden min-h-screen max-md:min-h-0 flex flex-col" id="top">
      {/* Giant background M (hidden on mobile) */}
      <div className="hidden md:block absolute font-display text-[min(78vw,820px)] leading-[.7] text-transparent [-webkit-text-stroke:1.5px_rgba(15,82,54,.07)] top-[-2%] left-[-4%] pointer-events-none z-0 -rotate-[4deg]">
        M
      </div>

      <div className="relative z-[2] grid grid-cols-1 md:grid-cols-[1.05fr_.95fr_1fr] gap-8 max-md:gap-0 items-end flex-1 max-w-[1320px] max-md:max-w-full w-full mx-auto">

        {/* Left column - copy (order 2 on mobile) */}
        <div className="relative z-[5] pb-0 md:pb-10 max-md:order-2 max-md:pt-[34px] max-md:px-1 max-md:text-center">
          <div className="inline-flex items-center gap-3 mb-3 max-md:mb-[18px] max-md:justify-center">
            <span className="font-hand text-[32px] text-leaf -rotate-2">hi! we&apos;re Murry&apos;s.</span>
            <span className="w-[60px] h-px bg-ink opacity-40" />
            <span className="text-[11px] tracking-[.32em] uppercase font-semibold">St. Louis</span>
          </div>

          <h1 className="font-display font-normal text-[clamp(54px,6.6vw,96px)] max-md:text-[clamp(40px,11vw,62px)] leading-[.96] max-md:leading-none tracking-tight text-ink">
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

          <p className="text-[17px] max-md:text-[15.5px] leading-relaxed text-ink-2 max-w-[520px] mt-6 max-md:mt-[18px] mb-7 max-md:mb-[22px] max-md:mx-auto max-md:text-center">
            A family-owned cleaning service for the St. Louis Metro &amp; Metro East — founded by sisters{" "}
            <strong>Sarah Murry &amp; Hannah Hancock</strong>. Built on trust, hard work, and a deep commitment to{" "}
            <em>exceptional</em> service.
          </p>

          <div className="flex flex-wrap gap-3.5 max-md:gap-2.5 items-center mb-9 max-md:mb-[26px] max-md:justify-center">
            <a
              href="#book"
              className="inline-flex items-center gap-2.5 px-[30px] max-md:px-[22px] py-[18px] max-md:py-3.5 rounded-full bg-forest text-cream font-semibold text-[13px] max-md:text-xs tracking-[.18em] max-md:tracking-[.14em] uppercase transition-all duration-[350ms] hover:bg-leaf hover:-translate-y-0.5 hover:-rotate-[.5deg] hover:shadow-md max-[480px]:w-full max-[480px]:justify-center"
            >
              Get a Free Quote ✨
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2.5 px-[30px] max-md:px-[22px] py-[18px] max-md:py-3.5 rounded-full border-[1.5px] border-ink text-ink font-semibold text-[13px] max-md:text-xs tracking-[.18em] max-md:tracking-[.14em] uppercase transition-all duration-[350ms] hover:bg-ink hover:text-cream max-[480px]:w-full max-[480px]:justify-center"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          <div className="flex gap-9 max-md:gap-[18px] max-[480px]:gap-3.5 items-center max-md:justify-center">
            <div>
              <strong className="font-display text-[30px] max-md:text-2xl text-ink block leading-none">842</strong>
              <span className="text-xs max-md:text-[10px] tracking-[.16em] uppercase text-ink-2 font-medium">FB followers</span>
            </div>
            <div className="w-px h-[42px] max-md:h-8 bg-ink opacity-[.18]" />
            <div>
              <strong className="font-display text-[30px] max-md:text-2xl text-ink block leading-none">5.0</strong>
              <span className="text-xs max-md:text-[10px] tracking-[.16em] uppercase text-ink-2 font-medium">Avg rating</span>
            </div>
            <div className="w-px h-[42px] max-md:h-8 bg-ink opacity-[.18]" />
            <div>
              <strong className="font-display text-[30px] max-md:text-2xl text-ink block leading-none">2</strong>
              <span className="text-xs max-md:text-[10px] tracking-[.16em] uppercase text-ink-2 font-medium">Sister-owned</span>
            </div>
          </div>
        </div>

        {/* Sarah cutout - center (order 1 on mobile) */}
        <div className="relative flex justify-center items-end max-md:items-center max-md:flex-col z-[4] max-md:order-1 max-md:mx-auto max-md:w-full max-md:max-w-[540px] max-md:p-0 md:m-0">
          {/* Mobile-only floating logo above Sarah */}
          <Image
            src="/images/logo.png"
            alt="Murry's Maid Service"
            width={290}
            height={290}
            className="hidden max-md:block w-[min(290px,74vw)] max-[480px]:w-[min(240px,68vw)] h-auto mx-auto mb-1 animate-logo-float drop-shadow-[0_8px_24px_rgba(58,139,30,.18)]"
          />

          {/* Sparkle doodles */}
          <span className="absolute text-gold z-[3] pointer-events-none animate-twink top-[14%] max-md:top-[10%] left-[8%] max-md:left-[10%] text-2xl max-md:text-[22px]">✦</span>
          <span className="absolute text-blush-deep z-[3] pointer-events-none animate-twink top-[6%] max-md:top-[24%] right-[6%] max-md:right-[8%] text-[30px] max-md:text-[26px] [animation-delay:.6s]">✿</span>

          {/* Mobile-only spotlight */}
          <span className="hidden max-md:block absolute left-1/2 bottom-[-10px] -translate-x-1/2 w-[min(400px,82vw)] h-[min(400px,82vw)] rounded-full bg-[radial-gradient(circle_at_50%_45%,#fff_0%,rgba(255,255,255,.92)_22%,rgba(190,228,155,.7)_50%,rgba(190,228,155,0)_72%)] z-[1] animate-spot-pulse" />

          {/* Mobile-only dashed rings */}
          <span className="hidden max-md:block absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-[min(380px,78vw)] h-[min(380px,78vw)] rounded-full border-[1.5px] border-dashed border-leaf/[.28] z-[2] animate-ring-spin after:content-[''] after:absolute after:inset-3.5 after:rounded-full after:border after:border-dashed after:border-blush-deep/[.32]" />

          {/* Mobile-only sparkle bubbles */}
          <span className="hidden max-md:block absolute z-[4] animate-bub-float top-[24%] left-[6%] text-2xl [text-shadow:0_2px_8px_rgba(255,255,255,.7)]">✨</span>
          <span className="hidden max-md:block absolute z-[4] animate-bub-float top-[38%] right-[6%] text-[30px] [animation-delay:1.2s] [text-shadow:0_2px_8px_rgba(255,255,255,.7)]">✨</span>
          <span className="hidden max-md:block absolute z-[4] animate-bub-float top-[64%] left-[2%] text-xl [animation-delay:2.2s] [text-shadow:0_2px_8px_rgba(255,255,255,.7)]">✨</span>

          {/* Sarah image */}
          <Image
            src="/images/sarah-hero.png"
            alt="Sarah, founder of Murry's Maid Service"
            width={760}
            height={1000}
            className="relative z-[3] w-[min(760px,62vw)] max-md:w-[min(440px,86vw)] max-[480px]:w-[min(360px,88vw)] h-auto drop-shadow-[0_28px_38px_rgba(14,31,21,.18)] max-md:drop-shadow-[0_30px_36px_rgba(58,139,30,.18)] max-md:[mask-image:linear-gradient(180deg,#000_80%,rgba(0,0,0,.6)_92%,rgba(0,0,0,0)_100%)]"
            priority
          />

          {/* Desktop-only spotlight circle */}
          <span className="hidden md:block absolute left-1/2 bottom-0 w-[min(520px,46vw)] h-[min(520px,46vw)] rounded-full bg-[radial-gradient(circle_at_50%_45%,#fff_0%,rgba(255,255,255,.92)_22%,rgba(190,228,155,.7)_50%,rgba(190,228,155,0)_72%)] -translate-x-1/2 z-[1] animate-spot-pulse" />
          {/* Desktop-only dashed ring */}
          <span className="hidden md:block absolute left-1/2 bottom-2 w-[min(480px,42vw)] h-[min(480px,42vw)] rounded-full border-[1.5px] border-dashed border-leaf/[.22] -translate-x-1/2 z-[2] animate-ring-spin pointer-events-none" />
        </div>

        {/* Right column - testimonial (order 3 on mobile) */}
        <div className="relative z-[5] pb-0 md:pb-[60px] flex flex-col items-center md:items-start justify-end gap-6 max-md:order-3 max-md:py-6 max-md:pb-10">
          {/* Testimonial card */}
          <div className="bg-cream p-6 rounded-[18px] shadow-md w-[280px] max-md:w-full max-md:max-w-[340px] relative text-left rotate-2 max-md:-rotate-1 transition-transform duration-[400ms] hover:rotate-0 hover:scale-[1.04] max-md:mx-auto">
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

          {/* Arrow doodle (desktop only) */}
          <div className="hidden md:inline-flex flex-col items-start font-hand text-[22px] text-blush-deep rotate-[8deg] leading-none">
            that&apos;s our Sarah!
            <svg width="50" height="34" viewBox="0 0 60 40" className="mt-1.5 text-blush-deep">
              <path d="M58 4 Q 48 32, 12 32 L 18 26 M 12 32 L 12 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative shapes (desktop only) */}
      <span className="hidden md:block absolute z-[1] pointer-events-none top-[30%] right-[18%] w-[46px] h-[24px] bg-gradient-to-b from-leaf-bright to-sun rounded-b-full -rotate-12" />

      {/* Marquee ribbon at bottom */}
      <div className="relative z-[3] mt-auto">
        <Marquee />
      </div>
    </section>
  );
}
