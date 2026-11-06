export const EXPERIENCE_CATEGORIES = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
] as const;

export type ExperienceCategory = (typeof EXPERIENCE_CATEGORIES)[number];

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
  imageAlt: string;
  duration: string;
  groupSize: string;
  highlights: string[];
}

const DESTINATIONS = [
  ["Lisbon", "Portugal"],
  ["Marrakech", "Morocco"],
  ["Kyoto", "Japan"],
  ["Mexico City", "Mexico"],
  ["Cape Town", "South Africa"],
  ["Istanbul", "Turkiye"],
  ["Bangkok", "Thailand"],
  ["Reykjavik", "Iceland"],
  ["Naples", "Italy"],
  ["Medellin", "Colombia"],
  ["Hanoi", "Vietnam"],
  ["Athens", "Greece"],
  ["Cusco", "Peru"],
  ["Copenhagen", "Denmark"],
  ["Ubud", "Indonesia"],
  ["Dubrovnik", "Croatia"],
  ["New Orleans", "United States"],
  ["Queenstown", "New Zealand"],
  ["Jaipur", "India"],
  ["Buenos Aires", "Argentina"],
] as const;

const IMAGE_SETS: Record<ExperienceCategory, string[]> = {
  Adventure: [
    "photo-1530789253388-582c481c54b0",
    "photo-1500530855697-b586d89ba3ee",
  ],
  Culture: [
    "photo-1516483638261-f4dbaf036963",
    "photo-1499856871958-5b9627545d1a",
  ],
  Food: [
    "photo-1504674900247-0877df9cc836",
    "photo-1414235077428-338989a2e8c0",
  ],
  Wellness: [
    "photo-1540555700478-4be289fbecef",
    "photo-1545205597-3d9d02c29597",
  ],
  Nature: [
    "photo-1470770841072-f978cf4d019e",
    "photo-1501785888041-af3ef285b470",
  ],
};

const EXPERIENCE_SEEDS: Array<{
  title: string;
  category: ExperienceCategory;
  description: string;
  highlights: string[];
}> = [
  { title: "Coastal cliffside hike", category: "Adventure", description: "Follow a local trail guide along ocean paths, hidden coves, and unforgettable viewpoints.", highlights: ["Small-group local guide", "Scenic coastal route", "Photo stops"] },
  { title: "Sunrise balloon flight", category: "Adventure", description: "Rise above the landscape at first light for a quiet, wide-open view of the region.", highlights: ["Early-morning pickup", "Panoramic flight", "Celebration after landing"] },
  { title: "Sea-kayak expedition", category: "Adventure", description: "Paddle sheltered water and discover shoreline details best seen from the sea.", highlights: ["All gear included", "Beginner-friendly briefing", "Hidden beach stop"] },
  { title: "Old-town cycling loop", category: "Adventure", description: "Ride neighborhood streets and waterfront paths with a host who knows every turn.", highlights: ["Comfortable city bike", "Neighborhood route", "Local cafe pause"] },
  { title: "Mountain via ferrata", category: "Adventure", description: "Climb a dramatic mountain route with an experienced guide and all safety equipment.", highlights: ["Certified guide", "Safety equipment provided", "Summit views"] },
  { title: "Architecture walk", category: "Culture", description: "Read the city through its buildings, from everyday courtyards to landmark facades.", highlights: ["Architecture specialist", "Small group", "Historic district"] },
  { title: "Artist-studio visit", category: "Culture", description: "Meet independent makers, hear how their practice took shape, and see work in progress.", highlights: ["Meet a local artist", "Private studio access", "Make a small keepsake"] },
  { title: "Market stories tour", category: "Culture", description: "Explore a lively neighborhood market through its vendors, ingredients, and traditions.", highlights: ["Market tastings", "Local history", "Meet the vendors"] },
  { title: "After-hours museum tour", category: "Culture", description: "Spend an unhurried evening with a guide among the stories behind the collection.", highlights: ["Expert-led visit", "Quieter galleries", "Curated highlights"] },
  { title: "Traditional craft workshop", category: "Culture", description: "Learn a regional craft from a working artisan and leave with something you made.", highlights: ["Materials included", "One-to-one instruction", "Take-home piece"] },
  { title: "Neighborhood noodle crawl", category: "Food", description: "Taste beloved bowls at family-run counters and learn the rituals behind each recipe.", highlights: ["Four tasting stops", "Local food host", "Vegetarian options"] },
  { title: "Sunset wine-table supper", category: "Food", description: "Share a seasonal dinner and regional wines at a table with a view.", highlights: ["Seasonal menu", "Regional wine pairing", "Unhurried sunset seating"] },
  { title: "Hands-on pasta class", category: "Food", description: "Turn a few simple ingredients into a meal, guided by a home cook or local chef.", highlights: ["Small cooking group", "Recipes to take home", "Shared meal included"] },
  { title: "Street-food night walk", category: "Food", description: "Follow the aromas through a lively evening district and sample the local favorites.", highlights: ["Five street-food tastings", "Neighborhood guide", "All food included"] },
  { title: "Coffee roastery session", category: "Food", description: "Meet a local roaster, compare origins, and learn how to taste a better cup.", highlights: ["Roastery tour", "Guided tasting flight", "Brewing tips"] },
  { title: "Rooftop yoga at dawn", category: "Wellness", description: "Move through a grounding practice as the city wakes around you.", highlights: ["All levels welcome", "Mat provided", "Herbal tea after class"] },
  { title: "Thermal-spring reset", category: "Wellness", description: "Slow down in mineral-rich waters with time to rest between warm pools.", highlights: ["Bath access included", "Towel provided", "Quiet rest area"] },
  { title: "Forest bathing walk", category: "Wellness", description: "Trade the busy streets for a guided sensory walk among old trees and open air.", highlights: ["Mindful nature guide", "Gentle walking pace", "Tea ceremony"] },
  { title: "Sound-bath evening", category: "Wellness", description: "Settle into a restorative sound session in a calm, intimate studio.", highlights: ["Small-group session", "Comfortable mats", "Relaxation tea"] },
  { title: "Seaside breathwork", category: "Wellness", description: "Practice simple breathwork and stretching beside the water with a local teacher.", highlights: ["Certified instructor", "Oceanfront setting", "All levels welcome"] },
  { title: "Wildlife dawn safari", category: "Nature", description: "Set out with a naturalist to notice the region's wildlife in its quietest hours.", highlights: ["Naturalist guide", "Small-group outing", "Binoculars provided"] },
  { title: "Waterfall valley trek", category: "Nature", description: "Walk a green valley trail to cascading water, with time to stop and take it in.", highlights: ["Local trail guide", "Waterfall swim stop", "Trail snacks included"] },
  { title: "Night-sky observatory", category: "Nature", description: "Look beyond the city lights and learn to navigate the night sky with an astronomer.", highlights: ["Telescope viewing", "Astronomy guide", "Warm drink included"] },
  { title: "Coastal conservation day", category: "Nature", description: "Join a local team for a hands-on morning restoring a special stretch of coastline.", highlights: ["Community-led project", "Equipment included", "Conservation briefing"] },
  { title: "Alpine lake picnic", category: "Nature", description: "Reach a clear mountain lake with a guide and settle in for a regional picnic.", highlights: ["Guided lake walk", "Local picnic basket", "Flexible walking pace"] },
];

function unsplashImage(photoId: string): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=85`;
}

export const experiences: Experience[] = EXPERIENCE_SEEDS.flatMap(
  (seed, seedIndex) =>
    Array.from({ length: 4 }, (_, destinationIndex) => {
      const index = seedIndex * 4 + destinationIndex;
      const [city, country] =
        DESTINATIONS[(seedIndex * 3 + destinationIndex * 5) % DESTINATIONS.length];
      const imageSet = IMAGE_SETS[seed.category];

      return {
        id: `experience-${String(index + 1).padStart(3, "0")}`,
        title: `${seed.title} in ${city}`,
        description: `${seed.description} In ${city}, ${country}, this experience is shaped by the people and place that make it memorable. Come curious; leave with a story worth keeping.`,
        category: seed.category,
        destination: `${city}, ${country}`,
        price: 48 + ((index * 19) % 228),
        rating: Number((4.6 + ((index * 7) % 5) / 10).toFixed(1)),
        imageUrl: unsplashImage(imageSet[seedIndex % imageSet.length]),
        imageAlt: `${seed.title} in ${city}, ${country}`,
        duration: ["2 hours", "3 hours", "Half day", "4 hours"][index % 4],
        groupSize: ["Up to 6 guests", "Up to 8 guests", "Up to 10 guests"][index % 3],
        highlights: seed.highlights,
      };
    }),
);