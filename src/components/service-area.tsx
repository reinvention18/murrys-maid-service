import { serviceAreas, siteConfig } from "@/lib/content";
import { Reveal } from "./reveal";

export function ServiceArea() {
  return (
    <section className="py-[140px] px-9 max-md:py-[90px] max-md:px-[22px] relative" id="area">
      <Reveal>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_.9fr] gap-20 max-md:gap-12 items-start">
          <div>
            <span className="font-hand text-4xl text-blush-deep -rotate-1 inline-block mb-2">where we sparkle</span>
            <h2 className="font-display text-[clamp(54px,6.4vw,98px)] leading-[.96] tracking-tight mb-8">
              Greater{" "}
              <em className="font-hand not-italic text-leaf inline-block -rotate-1">St. Louis</em>
              <br />&amp; Metro East.
            </h2>
            <p className="text-[17px] text-ink-2 max-w-[520px] leading-relaxed">
              From the city &amp; county to the Illinois side — chances are good we&apos;re already cleaning a home on
              your block. If you&apos;re close, we&apos;ll come.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-9">
              <div>
                <h4 className="font-hand text-[42px] text-forest leading-none mb-3.5 border-b-[1.5px] border-dashed border-ink/[.18] pb-2.5">
                  Missouri
                </h4>
                <ul className="flex flex-col gap-1.5 text-[15px] text-ink">
                  {serviceAreas.missouri.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <span className="text-leaf-bright text-[11px]">✿</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-hand text-[42px] text-forest leading-none mb-3.5 border-b-[1.5px] border-dashed border-ink/[.18] pb-2.5">
                  Illinois
                </h4>
                <ul className="flex flex-col gap-1.5 text-[15px] text-ink">
                  {serviceAreas.illinois.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <span className="text-leaf-bright text-[11px]">✿</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <aside className="bg-forest text-cream p-12 max-md:p-8 rounded-3xl shadow-lg relative overflow-hidden md:sticky md:top-[120px]">
            <span className="absolute top-[-40%] right-[-20%] w-[80%] h-[140%] bg-[radial-gradient(circle,rgba(190,228,155,.18),transparent_60%)]" />
            <div className="relative z-[1]">
              <h3 className="font-display text-[42px] leading-none mb-3.5">
                Don&apos;t see your{" "}
                <em className="text-sage font-hand not-italic text-[1.1em] -rotate-1 inline-block">town?</em>
              </h3>
              <p className="font-hand text-2xl text-white/85 mb-6 leading-[1.2]">
                Call or text — we&apos;ll let you know within the hour.
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3.5 bg-white/[.08] border border-white/[.18] p-4 px-5 rounded-[14px] transition-all hover:bg-sun hover:text-ink hover:border-sun"
                >
                  <span className="font-hand text-[28px] text-sage leading-[.6] w-7 text-center">☎</span>
                  <div className="flex-1">
                    <strong className="font-semibold">{siteConfig.phone}</strong>
                    <small className="block text-[11px] tracking-[.16em] uppercase opacity-60 mt-[3px] font-semibold">
                      call or text
                    </small>
                  </div>
                  <span>→</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3.5 bg-white/[.08] border border-white/[.18] p-4 px-5 rounded-[14px] transition-all hover:bg-sun hover:text-ink hover:border-sun"
                >
                  <span className="font-hand text-[28px] text-sage leading-[.6] w-7 text-center">✉</span>
                  <div className="flex-1">
                    <strong className="font-semibold">{siteConfig.email}</strong>
                    <small className="block text-[11px] tracking-[.16em] uppercase opacity-60 mt-[3px] font-semibold">
                      same-day reply
                    </small>
                  </div>
                  <span>→</span>
                </a>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 bg-white/[.08] border border-white/[.18] p-4 px-5 rounded-[14px] transition-all hover:bg-sun hover:text-ink hover:border-sun"
                >
                  <span className="font-hand text-[28px] text-sage leading-[.6] w-7 text-center">f</span>
                  <div className="flex-1">
                    <strong className="font-semibold">@MurrysMaidService</strong>
                    <small className="block text-[11px] tracking-[.16em] uppercase opacity-60 mt-[3px] font-semibold">
                      message us on FB
                    </small>
                  </div>
                  <span>→</span>
                </a>
              </div>

              <div className="pt-[18px] mt-[18px] border-t border-white/[.18] font-hand text-[22px] text-sage leading-[1.3]">
                <strong className="block font-body text-[10px] tracking-[.24em] uppercase text-cream mb-1.5 font-bold">
                  Hours
                </strong>
                {siteConfig.hours.weekday}
                <br />
                {siteConfig.hours.weekend}
              </div>
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
