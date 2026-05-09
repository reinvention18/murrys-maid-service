export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://murrysmaids.com",
    name: "Murry's Maid Service",
    description:
      "A family-owned cleaning service for the St. Louis Metro & Metro East — founded by sisters Sarah Murry & Hannah Hancock.",
    url: "https://murrysmaids.com",
    telephone: "+1-314-333-9958",
    email: "murrysmaidservice@outlook.com",
    image: "https://murrysmaids.com/images/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Louis",
      addressRegion: "MO",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.627,
      longitude: -90.1994,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: ["https://www.facebook.com/MurrysMaidService"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "7",
      bestRating: "5",
    },
    founder: [
      { "@type": "Person", name: "Sarah Murry" },
      { "@type": "Person", name: "Hannah Hancock" },
    ],
    areaServed: [
      { "@type": "City", name: "St. Louis" },
      { "@type": "State", name: "Missouri" },
      { "@type": "State", name: "Illinois" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
