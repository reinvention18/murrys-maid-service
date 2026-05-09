import Image from "next/image";
import { Reveal } from "./reveal";

export function MeetTheSisters() {
  return (
    <section className="py-[160px] px-9 max-md:py-[90px] max-md:px-[22px] relative overflow-hidden" id="story">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 max-md:gap-12 items-center">
        {/* Photos */}
        <Reveal className="relative h-[520px] md:h-[680px]">
          {/* Main polaroid */}
          <div className="absolute w-[74%] left-0 top-[6%] bg-cream p-3.5 pb-[60px] shadow-md -rotate-3 z-[2] transition-transform duration-500 hover:rotate-0 hover:scale-[1.04] hover:z-[5]">
            <span className="absolute bg-blush/85 w-[90px] h-6 top-[-12px] left-1/2 -translate-x-1/2 -rotate-3 shadow-sm" />
            <div className="w-full aspect-[.82] relative overflow-hidden">
              <Image src="/images/sarah.jpg" alt="Sarah Murry, founder" fill className="object-cover object-top" sizes="(max-width: 768px) 70vw, 35vw" />
            </div>
            <div className="absolute bottom-3.5 left-0 right-0 text-center font-hand text-2xl text-ink leading-none">
              — Sarah Murry, founder
            </div>
          </div>

          {/* Second polaroid */}
          <div className="absolute w-[48%] right-[-4%] bottom-[8%] bg-cream p-3.5 pb-[60px] shadow-md rotate-[5deg] z-[3] transition-transform duration-500 hover:rotate-0 hover:scale-[1.04] hover:z-[5]">
            <span className="absolute bg-sun/85 w-[90px] h-6 top-[-12px] left-1/2 -translate-x-1/2 -rotate-3 shadow-sm" />
            <div className="w-full aspect-[.82] relative overflow-hidden">
              <Image src="/images/bedroom.jpg" alt="Freshly made bed" fill className="object-cover" sizes="(max-width: 768px) 45vw, 25vw" />
            </div>
            <div className="absolute bottom-3.5 left-0 right-0 text-center font-hand text-2xl text-ink leading-none">
              freshly made bed
            </div>
          </div>

          {/* Sticky note */}
          <div className="absolute top-[-2%] right-[6%] bg-sun p-[18px] pr-[22px] font-hand text-[28px] text-ink -rotate-6 shadow-md z-[4] max-w-[260px] leading-[1.05]">
            <span className="absolute top-[-8px] left-1/2 w-3.5 h-3.5 rounded-full bg-blush-deep -translate-x-1/2 shadow-[0_2px_4px_rgba(0,0,0,.2)]" />
            it started with one mop bucket &amp; a sister.
          </div>
        </Reveal>

        {/* Text */}
        <Reveal>
          <span className="font-hand text-4xl text-blush-deep -rotate-1 block mb-2">meet your maids</span>
          <h2 className="font-display text-[clamp(56px,6.4vw,104px)] leading-[.94] tracking-tight mb-7">
            Just two{" "}
            <em className="font-hand not-italic text-leaf text-[1.05em] inline-block -rotate-2">sisters</em>
            <br />&amp; one shared standard.
          </h2>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-ink-2">
              At Murry&apos;s Maid Service, we take great pride in being a family-owned and operated business. Founded by{" "}
              <strong>Sarah Murry</strong> and her sister <strong>Hannah Hancock</strong>, our company is built on the values of{" "}
              <em className="not-italic text-forest font-semibold bg-sun px-1">trust, hard work, and a deep commitment to exceptional service.</em>
            </p>
            <p className="text-lg leading-relaxed text-ink-2">
              We treat every home like our own — using safe products, paying attention to the little details, and showing up on time. When clients say we cleaned{" "}
              <em className="not-italic text-forest font-semibold bg-sun px-1">&ldquo;top to bottom,&rdquo;</em> that&apos;s exactly the standard we measure ourselves against.
            </p>
          </div>

          {/* Badges */}
          <div className="flex gap-3.5 mt-[30px] flex-wrap">
            <span className="bg-cream border-[1.5px] border-dashed border-leaf px-3.5 py-2 rounded-full text-[13px] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-leaf-bright" />Insured &amp; bonded
            </span>
            <span className="bg-cream border-[1.5px] border-dashed border-blush-deep px-3.5 py-2 rounded-full text-[13px] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blush-deep" />Pet &amp; baby safe
            </span>
            <span className="bg-cream border-[1.5px] border-dashed border-gold px-3.5 py-2 rounded-full text-[13px] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />Same-team guarantee
            </span>
          </div>

          {/* Signature */}
          <div className="mt-9 pt-6 border-t border-ink/[.16] flex justify-between items-end gap-6 flex-wrap">
            <div>
              <div className="font-script text-[32px] text-forest leading-[.9]">Sarah &amp; Hannah</div>
              <small className="block font-body text-[11px] tracking-[.24em] uppercase text-ink-2 mt-3.5 font-semibold">
                Owners · Murry&apos;s Maid Service
              </small>
            </div>
            <div className="font-hand text-[28px] text-blush-deep text-right leading-none">
              St. Louis,<br />Missouri.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
