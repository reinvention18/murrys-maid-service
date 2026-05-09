import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Book a Cleaning — Murry's Maid Service",
  description: "Request a free quote from Murry's Maid Service. We serve the greater St. Louis Metro & Metro East area.",
};

export default function BookPage() {
  return (
    <main className="pt-24">
      <BookingForm />
      <Footer />
    </main>
  );
}
