import { siteConfig } from "@/lib/content";

export function CallFab() {
  return (
    <a
      href={siteConfig.phoneHref}
      className="fixed bottom-6 right-6 z-[80] flex items-center gap-3 bg-forest text-cream px-[22px] py-4 rounded-full shadow-md text-[13px] font-semibold tracking-[.18em] uppercase transition-all duration-300 hover:bg-leaf hover:-translate-y-[3px] hover:scale-[1.04]"
      aria-label={`Call ${siteConfig.phone}`}
    >
      <span className="relative w-2.5 h-2.5 rounded-full bg-sun">
        <span className="absolute inset-0 rounded-full bg-sun animate-pulse" />
      </span>
      {siteConfig.phone}
    </a>
  );
}
