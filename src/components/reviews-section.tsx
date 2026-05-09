import { reviews } from "@/lib/content";
import { Reveal } from "./reveal";

const colSpans = [
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];
const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-2", "-rotate-2", "rotate-1"];
const tapeColors = [
  "bg-sage/85",
  "bg-blush/85",
  "bg-sun/85",
  "bg-sage/85",
  "bg-sun/85",
  "bg-blush/85",
];

export function ReviewsSection() {
  return (
    <section
      className="py-[140px] px-9 max-md:py-[90px] max-md:px-[22px]"
      id="reviews"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(240,189,176,.15), transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(244,215,107,.18), transparent 50%),
          repeating-linear-gradient(45deg,transparent 0 28px,rgba(15,82,54,.012) 28px 30px),
          #f3ecd6
        `,
      }}
    >
      <Reveal>
        <div className="max-w-[1240px] mx-auto mb-20 text-center">
          <span className="font-hand text-[38px] text-leaf -rotate-2 inline-block mb-1.5">kind words</span>
          <br />
          <h2 className="font-display text-[clamp(54px,7vw,104px)] leading-[.96] tracking-tight">
            From real{" "}
            <em className="font-hand not-italic text-blush-deep text-[1.05em] inline-block -rotate-1">
              St. Louis homes.
            </em>
          </h2>
        </div>
      </Reveal>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-7">
        {reviews.map((rev, i) => (
          <Reveal
            key={rev.by}
            className={`col-span-1 ${colSpans[i]} ${rotations[i]} bg-cream p-8 shadow-md relative transition-transform duration-[350ms] hover:rotate-0 hover:scale-[1.02] hover:z-[5]`}
            delay={i * 0.06}
          >
            <span className={`absolute w-[90px] h-6 top-[-12px] left-1/2 -translate-x-1/2 -rotate-2 shadow-sm ${tapeColors[i]}`} />
            <div className="text-gold text-sm tracking-[3px] mb-3.5">★★★★★</div>
            <p
              className={
                rev.short
                  ? "font-script text-[30px] text-forest leading-[1.2] mb-6"
                  : "font-display text-[22px] leading-[1.4] text-ink mb-6"
              }
            >
              {rev.short ? rev.text : `\u201C${rev.text}\u201D`}
            </p>
            <div className="font-hand text-2xl text-leaf leading-none">
              {rev.by}
              <small className="block font-body text-[10px] tracking-[.2em] uppercase text-ink-2 mt-1.5 font-semibold">
                {rev.source}
              </small>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
