import { gql } from "@apollo/client";

export const TOURS = [
  {
    slug: "gobi-desert-expedition",
    title: "Gobi Desert Expedition",
    duration: 8,
    basePrice: 1890,
    image: "/images/tour-gobi.jpg",
    excerpt: "Cross the legendary Gobi by camel and 4x4, sleep under stars in traditional ger camps.",
    highlights: [
      "Flaming Cliffs of Bayanzag",
      "Singing dunes of Khongoryn Els",
      "Ice-filled Yolyn Am canyon",
      "Traditional ger camps under the stars",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Ulaanbaatar", description: "Meet your guide and attend a welcome dinner with a trip briefing." },
      { day: 2, title: "Fly to Dalanzadgad", description: "Short flight to the Gobi gateway, then drive into the desert." },
      { day: 3, title: "Bayanzag Flaming Cliffs", description: "Walk where dinosaur fossils were first discovered and watch the sunset paint the cliffs." },
      { day: 4, title: "Khongoryn Els Dunes", description: "Ride a Bactrian camel and climb the singing dunes at golden hour." },
      { day: 5, title: "Yolyn Am Canyon", description: "Hike the narrow canyon that holds ice deep into summer." },
      { day: 6, title: "Nomadic Family Visit", description: "Share tea and hear stories from a local herding family." },
      { day: 7, title: "Return to Dalanzadgad", description: "Evening flight back to Ulaanbaatar." },
      { day: 8, title: "Departure", description: "Airport transfer and farewell." },
    ],
  },
  {
    slug: "naadam-festival-tour",
    title: "Naadam Festival Tour",
    duration: 10,
    basePrice: 2450,
    image: "/images/tour-naadam.jpg",
    excerpt: "Experience Mongolia's ancient games with local guides in the heart of summer.",
    highlights: [
      "Ulaanbaatar national Naadam",
      "Rural provincial festival",
      "Wrestling, horse racing, archery",
      "July departure only",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Ulaanbaatar", description: "Welcome dinner and Naadam introduction." },
      { day: 2, title: "Opening Ceremony", description: "Watch the grand parade and the first rounds of wrestling." },
      { day: 3, title: "Horse Racing & Archery", description: "Travel to the horse racing steppes and try archery." },
      { day: 4, title: "Wrestling Finals", description: "Cheer on the final rounds of Mongolia's national sport." },
      { day: 5, title: "Drive to Countryside", description: "Leave the city for a rural Naadam festival with locals." },
      { day: 6, title: "Local Festival Day", description: "Experience smaller, more intimate traditional games." },
      { day: 7, title: "Nomadic Culture", description: "Visit a herder family and learn about traditional life." },
      { day: 8, title: "Scenic Steppe Drive", description: "Cross open grasslands on the return to the capital." },
      { day: 9, title: "Ulaanbaatar City Tour", description: "Explore Gandantegchinlen Monastery and the National Museum." },
      { day: 10, title: "Departure", description: "Airport transfer and farewell." },
    ],
  },
  {
    slug: "lake-khovsgol-escape",
    title: "Lake Khovsgol Escape",
    duration: 7,
    basePrice: 1650,
    image: "/images/tour-khovsgol.jpg",
    excerpt: "Blue pearl of Mongolia. Hiking, kayaking, and reindeer herder encounters.",
    highlights: [
      "Lake Khovsgol, the Blue Pearl",
      "Taiga forest camping",
      "Tsaatan reindeer herder visit",
      "Small-group horseback riding",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Ulaanbaatar", description: "Trip briefing and welcome dinner." },
      { day: 2, title: "Fly to Murun", description: "Domestic flight north to the Khovsgol gateway." },
      { day: 3, title: "Lake Khovsgol", description: "Arrive at the lakeshore and settle into a lakeside ger camp." },
      { day: 4, title: "Kayaking & Hiking", description: "Paddle crystal-clear waters and hike shoreline trails." },
      { day: 5, title: "Reindeer Herder Visit", description: "Meet the Tsaatan people and their reindeer in the taiga." },
      { day: 6, title: "Horseback Ride", description: "Half-day ride through larch forests and mountain meadows." },
      { day: 7, title: "Return & Departure", description: "Fly back to Ulaanbaatar and transfer to the airport." },
    ],
  },
  {
    slug: "mongolia-photography-safari",
    title: "Mongolia Photography Safari",
    duration: 9,
    basePrice: 2150,
    image: "/images/tour-photo.jpg",
    excerpt: "Golden-hour landscapes, nomadic portraits, and wildlife across the steppe.",
    highlights: [
      "Golden-hour landscape shoots",
      "Wild horses and eagle encounters",
      "Nomadic family portraits",
      "Pro guide tips on light and composition",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Ulaanbaatar", description: "Gear check and welcome dinner." },
      { day: 2, title: "Gorkhi-Terelj", description: "Sunrise shoot among granite rock formations." },
      { day: 3, title: "Elsen Tasarkhai", description: "Sand dunes and steppe transitions at sunset." },
      { day: 4, title: "Kharkhorin", description: "Ancient capital and Erdene Zuu monastery." },
      { day: 5, title: "Orkhon Waterfall", description: "Long-exposure waterfall and canyon views." },
      { day: 6, title: "Nomadic Family", description: "Portrait session with a herding family and their animals." },
      { day: 7, title: "Wild Horses", description: "Photograph Przewalski horses in their natural habitat." },
      { day: 8, title: "Return to Ulaanbaatar", description: "Evening cityscape and critique session." },
      { day: 9, title: "Departure", description: "Airport transfer." },
    ],
  },
  {
    slug: "northern-mongolia-horse-trek",
    title: "Northern Mongolia Horse Trek",
    duration: 10,
    basePrice: 2450,
    image: "/images/tour-khovsgol.jpg",
    excerpt: "Multi-day horseback trek through taiga forests, alpine lakes, and remote valleys.",
    highlights: [
      "Lake Khovsgol, the Blue Pearl",
      "Taiga forest camping",
      "Tsaatan reindeer herder visit",
      "Small-group horseback riding",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Ulaanbaatar", description: "Trip briefing and welcome dinner." },
      { day: 2, title: "Fly to Murun", description: "Domestic flight north to the Khovsgol gateway." },
      { day: 3, title: "Horse Trek Start", description: "Meet the horse guides and begin the trek into the taiga." },
      { day: 4, title: "Alpine Lakes", description: "Camp beside a remote mountain lake and fish for dinner." },
      { day: 5, title: "Forest Pass", description: "Cross a high pass with sweeping views of the Siberian border." },
      { day: 6, title: "Reindeer Herder Visit", description: "Meet the Tsaatan people and their reindeer herds." },
      { day: 7, title: "Valley Ride", description: "Descend through wildflower meadows and open valleys." },
      { day: 8, title: "Return to Lake Khovsgol", description: "Rest day by the lake with optional kayaking." },
      { day: 9, title: "Fly to Ulaanbaatar", description: "Return flight and farewell dinner." },
      { day: 10, title: "Departure", description: "Airport transfer." },
    ],
  },
];

export function getTourBySlug(slug: string) {
  return TOURS.find((t) => t.slug === slug);
}

export type Tour = (typeof TOURS)[number];

export const CP_BMS_TOURS = gql`
  query CpBmsTours($limit: Int) {
    cpBmsTours(limit: $limit) {
      _id
      name
      slug
      duration
      description
    }
  }
`;

export const CP_BMS_TOUR_DETAIL = gql`
  query CpBmsTourDetail($slug: String!) {
    cpBmsTourDetail(slug: $slug) {
      _id
      name
      slug
      duration
      description
      price
    }
  }
`;
