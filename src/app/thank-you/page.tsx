import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Thank You — Murry's Maid Service",
  description: "Your booking request has been received. We'll be in touch soon!",
};

export default function ThankYouPage() {
  return (
    <main className="pt-24">
      <section className="py-[140px] px-9 bg-gradient-to-b from-paper to-pale-leaf text-center">
        <div className="max-w-[600px] mx-auto">
          <div className="font-script text-[60px] text-leaf leading-[.9] mb-6">thank you!</div>
          <p className="font-display text-[30px] text-ink leading-[1.2] mb-6">
            We&apos;ve got your request. <em className="text-blush-deep">Sarah or Hannah</em> will text you back within the hour with your quote.
          </p>
          <p className="font-hand text-2xl text-ink-2 mb-10">
            — in the meantime, call us anytime at{" "}
            <a href={siteConfig.phoneHref} className="text-leaf font-semibold">
              {siteConfig.phone}
            </a>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 px-[30px] py-[18px] rounded-full bg-forest text-cream font-semibold text-[13px] tracking-[.18em] uppercase transition-all duration-[350ms] hover:bg-leaf hover:-translate-y-0.5 hover:shadow-md"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
