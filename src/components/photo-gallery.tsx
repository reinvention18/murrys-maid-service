import Image from "next/image";
import { galleryImages } from "@/lib/content";
import { Reveal } from "./reveal";

const rotations = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-[4deg]", "-rotate-3"];
const tapeColors = [
  "bg-blush/85",
  "bg-sun/85",
  "bg-sage/85",
  "bg-blush/85",
  "bg-sun/85",
];

export function PhotoGallery() {
  const images = [...galleryImages, ...galleryImages];

  return (
    <section className="py-[140px] max-md:py-[90px] overflow-hidden" id="gallery">
      <Reveal>
        <div className="max-w-[1240px] mx-auto mb-[60px] px-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
          <h2 className="font-display text-[clamp(54px,6.6vw,98px)] leading-[.96] tracking-tight">
            The proof is on the{" "}
            <em className="font-hand not-italic text-blush-deep text-[1.05em] inline-block -rotate-1">
              polaroid wall.
            </em>
          </h2>
          <div className="font-hand text-2xl text-leaf -rotate-1">drag · scroll · swipe →</div>
        </div>
      </Reveal>

      <div className="flex gap-9 px-[60px] max-md:px-6 animate-strip hover:[animation-play-state:paused] py-10">
        {images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className={`flex-none w-[340px] max-md:w-[280px] bg-cream p-3.5 pb-14 shadow-md transition-transform duration-[350ms] relative hover:rotate-0 hover:scale-[1.04] hover:z-[5] ${
              rotations[i % rotations.length]
            }`}
          >
            <span
              className={`absolute w-[88px] h-[22px] top-[-10px] left-1/2 -translate-x-1/2 -rotate-2 shadow-sm ${
                tapeColors[i % tapeColors.length]
              }`}
            />
            <div className="w-full aspect-[.82] relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.caption}
                fill
                className="object-cover"
                sizes="340px"
              />
            </div>
            <div className="absolute bottom-3.5 left-0 right-0 text-center font-hand text-[22px] text-ink">
              {img.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
