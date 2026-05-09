import { ribbonItems } from "@/lib/content";

export function Marquee() {
  const items = [...ribbonItems, ...ribbonItems];

  return (
    <div className="bg-forest text-cream py-[26px] border-t-[3px] border-b-[3px] border-leaf-bright overflow-hidden relative">
      <div className="flex gap-12 whitespace-nowrap animate-roll items-center">
        {items.map((item, i) => (
          <span key={i} className="contents">
            <span className="font-display text-[42px] tracking-[.01em]">{item}</span>
            <span className={`inline-block w-3.5 h-3.5 rounded-full ${i % 2 === 0 ? "bg-blush" : "bg-sun"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}
