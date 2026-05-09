import { Hero } from "@/components/hero";
import { BeforeAfter } from "@/components/before-after";
import { ServicesGrid } from "@/components/services-grid";
import { MeetTheSisters } from "@/components/meet-the-sisters";
import { Counters } from "@/components/counters";
import { PhotoGallery } from "@/components/photo-gallery";
import { ReviewsSection } from "@/components/reviews-section";
import { BookingForm } from "@/components/booking-form";
import { ServiceArea } from "@/components/service-area";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BeforeAfter />
      <ServicesGrid />
      <MeetTheSisters />
      <Counters />
      <PhotoGallery />
      <ReviewsSection />
      <BookingForm />
      <ServiceArea />
      <Footer />
    </main>
  );
}
