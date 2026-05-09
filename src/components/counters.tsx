"use client";

import { useEffect, useRef, useState } from "react";
import { counters } from "@/lib/content";
import { Reveal } from "./reveal";

function Counter({ value, suffix, fixed }: { value: number; suffix?: string; fixed?: boolean }) {
  const [display, setDisplay] = useState(fixed ? value.toFixed(1) : "0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        if (fixed) {
          setDisplay(value.toFixed(1));
          return;
        }

        const duration = 1400;
        const start = performance.now();
        function step(t: number) {
          const p = Math.min(1, (t - start) / duration);
          const v = Math.floor(value * (1 - Math.pow(1 - p, 3)));
          setDisplay(String(v));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, fixed]);

  return (
    <span ref={ref} className="font-display text-[clamp(48px,6.5vw,96px)] leading-[.85] text-leaf block">
      {display}
      {suffix && <span className="text-blush-deep text-[.7em]">{suffix}</span>}
    </span>
  );
}

export function Counters() {
  return (
    <Reveal>
      <section className="py-20 px-9 bg-cream border-t border-b border-ink/[.08]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-end">
          {counters.map((c, i) => (
            <div key={c.label} className="text-center relative">
              {i < counters.length - 1 && (
                <span className={`hidden md:block absolute top-[10%] right-[-18px] h-[80%] w-px bg-ink/[.12] ${i === 1 ? "max-md:hidden" : ""}`} />
              )}
              <Counter value={c.value} suffix={c.suffix} fixed={c.fixed} />
              <span className="font-hand text-2xl text-ink mt-1.5 block">{c.label}</span>
              <span className="text-[11px] tracking-[.24em] uppercase text-ink-2 mt-1.5 font-semibold block">
                {c.sub}
              </span>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
