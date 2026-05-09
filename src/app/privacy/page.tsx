import type { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Murry's Maid Service",
  description: "Privacy policy for Murry's Maid Service.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-24">
      <section className="py-[100px] px-9 bg-paper">
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-display text-5xl text-ink mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-ink-2 space-y-4">
            <p>
              <strong>Last updated:</strong> January 2026
            </p>
            <p>
              Murry&apos;s Maid Service (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This policy explains how we collect, use, and protect your personal information when you use our website or services.
            </p>
            <h2 className="font-display text-2xl text-ink mt-8 mb-3">Information We Collect</h2>
            <p>When you submit a booking form, we collect your name, phone number, email address, location, and details about the cleaning service you need. We use this information solely to provide you with a quote and schedule services.</p>
            <h2 className="font-display text-2xl text-ink mt-8 mb-3">How We Use Your Information</h2>
            <p>We use your information to respond to your inquiries, provide our services, and communicate with you about your bookings. We do not sell, trade, or share your personal information with third parties.</p>
            <h2 className="font-display text-2xl text-ink mt-8 mb-3">Contact Us</h2>
            <p>
              If you have questions about this policy, contact us at{" "}
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
