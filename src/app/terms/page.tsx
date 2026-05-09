import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service — Murry's Maid Service",
  description: "Terms of service for Murry's Maid Service.",
};

export default function TermsPage() {
  return (
    <main className="pt-24">
      <section className="py-[100px] px-9 bg-paper">
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-display text-5xl text-ink mb-8">Terms of Service</h1>
          <div className="prose prose-lg text-ink-2 space-y-4">
            <p>
              <strong>Last updated:</strong> January 2026
            </p>
            <p>
              By using the Murry&apos;s Maid Service website and services, you agree to the following terms.
            </p>
            <h2 className="font-display text-2xl text-ink mt-8 mb-3">Services</h2>
            <p>Murry&apos;s Maid Service provides residential and commercial cleaning services in the greater St. Louis Metro and Metro East area. All quotes are estimates and final pricing may vary based on the condition and size of the property.</p>
            <h2 className="font-display text-2xl text-ink mt-8 mb-3">Cancellation</h2>
            <p>We request at least 24 hours notice for cancellations. Late cancellations may be subject to a fee.</p>
            <h2 className="font-display text-2xl text-ink mt-8 mb-3">Liability</h2>
            <p>Murry&apos;s Maid Service is fully insured and bonded. We take every precaution to protect your property during cleaning.</p>
            <h2 className="font-display text-2xl text-ink mt-8 mb-3">Contact</h2>
            <p>
              Questions? Contact us at{" "}
              <a href="mailto:murrysmaidservice@outlook.com" className="text-leaf underline">
                murrysmaidservice@outlook.com
              </a>{" "}
              or call <a href="tel:+13143339958" className="text-leaf underline">(314) 333-9958</a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
