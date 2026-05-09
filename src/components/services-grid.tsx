import { services } from "@/lib/content";
import { Reveal } from "./reveal";

const bgClasses: Record<number, string> = {
  0: "bg-cream",
  1: "bg-pale-leaf",
  2: "bg-[#fde8d4]",
  3: "bg-cream",
  4: "bg-cream border-blush",
  5: "bg-[#fef3c8]",
};

export function ServicesGrid() {
  return (
    <section className="py-[140px] px-9 max-md:py-[90px] max-md:px-[22px] bg-paper-deep relative overflow-hidden" id="services">
      <Reveal>
        <div className="max-w-[1240px] mx-auto mb-20 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
          <h2 className="font-display text-[clamp(54px,7vw,104px)] leading-[.96] tracking-tight">
            Pick the level of{" "}
            <em className="font-hand not-italic text-leaf text-[1.05em] inline-block -rotate-1 ml-1">clean</em>
            <br />your home is asking for.
          </h2>
          <p className="text-[17px] text-ink-2 max-w-[340px] leading-relaxed">
            Every service is fully customizable. Tell us what to skip, what to focus on, what your dog&apos;s name is — we&apos;ll do the rest.
          </p>
        </div>
      </Reveal>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <Reveal key={svc.num} delay={i * 0.08}>
            <article
              className={`${bgClasses[i] || "bg-cream"} p-9 rounded-[18px] relative overflow-hidden border border-ink/[.06] transition-all duration-[400ms] ease-[cubic-bezier(.2,.8,.3,1)] hover:rotate-0 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-md hover:z-[2] ${
                i % 2 === 0 ? "rotate-[.4deg]" : "-rotate-[.5deg]"
              }`}
            >
              <span className="font-hand text-[28px] text-leaf leading-none block mb-2.5">{svc.num}.</span>
              <h3 className="font-display text-4xl leading-none tracking-tight mb-3 text-ink">{svc.title}</h3>
              <p className="text-[14.5px] text-ink-2 leading-relaxed mb-6">{svc.desc}</p>
              <ul className="flex flex-col gap-2 text-sm text-ink mb-6">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="text-leaf text-[11px]">✿</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center pt-5 border-t border-dashed border-ink/[.18]">
                <span className="font-hand text-[22px] text-blush-deep -rotate-2">{svc.note}</span>
                <span className="w-[42px] h-[42px] rounded-full bg-ink text-cream flex items-center justify-center text-sm transition-transform duration-300 group-hover:rotate-[-30deg] group-hover:scale-110 group-hover:bg-leaf">
                  →
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
