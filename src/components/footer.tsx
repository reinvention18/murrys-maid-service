import Image from "next/image";
import { siteConfig, footerLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-white/70 pt-[100px] pb-8 px-9 relative overflow-hidden">
      {/* Top border stripe */}
      <span className="absolute top-0 left-0 right-0 h-[3px] bg-[repeating-linear-gradient(90deg,#65c537_0_24px,#f0bdb0_24px_48px,#f4d76b_48px_72px)]" />

      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 max-md:gap-8 pb-12 border-b border-white/[.12]">
        <div>
          <Image
            src="/images/logo.png"
            alt="Murry's Maid Service"
            width={96}
            height={96}
            className="h-24 w-auto mb-[18px] brightness-[1.06]"
          />
          <p className="font-hand text-2xl text-white/80 max-w-[340px] leading-[1.3]">
            family-owned cleaning,<br />by Sarah &amp; Hannah ✿
          </p>
        </div>

        <div>
          <h5 className="font-display text-[22px] text-cream mb-3.5">Visit</h5>
          <ul className="flex flex-col gap-2 text-sm">
            {footerLinks.visit.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-sage transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-display text-[22px] text-cream mb-3.5">Connect</h5>
          <ul className="flex flex-col gap-2 text-sm">
            {footerLinks.connect.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="hover:text-sage transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-display text-[22px] text-cream mb-3.5">Hours</h5>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Mon-Sat · 8am-6pm</li>
            <li>Sundays by appt.</li>
            <li>Greater St. Louis</li>
            <li>+ Metro East</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-8 flex justify-between text-[11px] tracking-[.2em] uppercase text-white/45 font-semibold flex-wrap gap-3.5">
        <span>&copy; {new Date().getFullYear()} {siteConfig.name} · All rights reserved</span>
        <span>
          made with <span className="font-hand text-lg text-blush tracking-normal normal-case">love</span> in St. Louis
        </span>
      </div>
    </footer>
  );
}
