// Mock Data for Prestige Travels MVP

const destinations = [
  {
    id: 'dest-1',
    name: 'Amsterdam',
    slug: 'amsterdam',
    tagline: 'The Refined Capital',
    heroImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Experience the historic charm and modern luxury of Amsterdam through a curated local lens.'
  },
  {
    id: 'dest-2',
    name: 'Dubai',
    slug: 'dubai',
    tagline: 'Limitless Luxury',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Discover the pinnacle of modern opulence, desert adventures, and world-class hospitality.'
  },
  {
    id: 'dest-3',
    name: 'Hurghada',
    slug: 'hurghada',
    tagline: 'Red Sea Riviera',
    heroImage: 'https://images.unsplash.com/photo-1570660090461-a35a90de7a25?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Unwind on pristine beaches and explore vibrant coral reefs in Egypt’s premier coastal retreat.'
  },
  {
    id: 'dest-4',
    name: 'Santorini',
    slug: 'santorini',
    tagline: 'Aegean Elegance',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Experience the iconic blue domes and breathtaking sunsets of Greece’s most romantic island.'
  },
  {
    id: 'dest-5',
    name: 'Maldives',
    slug: 'maldives',
    tagline: 'Paradise Found',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Overwater villas, crystal clear lagoons, and the ultimate in tropical luxury.'
  },
  {
    id: 'dest-6',
    name: 'Bali',
    slug: 'bali',
    tagline: 'Island of the Gods',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Lush jungles, ancient temples, and serene beachfront retreats in Indonesia.'
  },
  {
    id: 'dest-7',
    name: 'Japan',
    slug: 'japan',
    tagline: 'Timeless Tradition',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'A perfect blend of ancient culture, futuristic cities, and refined hospitality.'
  },
  {
    id: 'dest-8',
    name: 'Morocco',
    slug: 'morocco',
    tagline: 'Desert Dreams',
    heroImage: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Vibrant souks, majestic palaces, and the golden dunes of the Sahara.'
  }
];

const itineraries = [
  {
    internalId: 'AMS-01',
    destination: 'Amsterdam',
    tier: 'Good',
    name: 'Amsterdam Essentials',
    duration: '3 Nights',
    priceFrom: 850,
    resort: 'Boutique Canal Hotel',
    boardBasis: 'Bed & Breakfast',
    flightsNote: 'Flights not included. Can be arranged on request.',
    cardDescription: 'A perfect introduction to the city’s highlights.',
    heroImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Stay in a charming, hand-selected boutique hotel overlooking the historic canals. Perfect for those who want an authentic Amsterdam experience with modern comforts.',
    inclusions: ['3 Nights Boutique Accommodation', 'Daily Artisan Breakfast', 'Private Canal Cruise', 'Guided Walking Tour'],
    experiences: [
      { title: 'Private Canal Cruise', desc: 'A 90-minute private boat tour through the UNESCO-listed canal ring with local snacks.' },
      { title: 'Hidden Gems Tour', desc: 'A walking tour led by a local expert focusing on secret courtyards and local history.' }
    ]
  },
  {
    internalId: 'AMS-02',
    destination: 'Amsterdam',
    tier: 'Better',
    name: 'Amsterdam Refined',
    duration: '4 Nights',
    priceFrom: 1450,
    resort: 'Luxury Heritage Hotel',
    boardBasis: 'Bed & Breakfast',
    flightsNote: 'Flights included from select European hubs.',
    cardDescription: 'Elevated stays and exclusive private tours.',
    heroImage: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'A grand heritage hotel combining 17th-century architecture with contemporary luxury. Located in the heart of the city, offering exceptional service and refined interiors.',
    inclusions: ['4 Nights Luxury Accommodation', 'Daily Gourmet Breakfast', 'Private Museum Entry', 'Fine Dining Experience'],
    experiences: [
      { title: 'Rijksmuseum After Hours', desc: 'A private guided tour of the Rijksmuseum before or after public opening hours.' },
      { title: 'Michelin Dining', desc: 'A curated 5-course tasting menu at one of Amsterdam’s premier Michelin-starred restaurants.' }
    ]
  },
  {
    internalId: 'AMS-03',
    destination: 'Amsterdam',
    tier: 'Best',
    name: 'Amsterdam Prestige',
    duration: '5 Nights',
    priceFrom: 2900,
    resort: 'Waldorf Astoria Amsterdam',
    boardBasis: 'Bed & Breakfast',
    flightsNote: 'Premium flights and private transfers included.',
    cardDescription: 'The ultimate luxury experience with dedicated concierge.',
    heroImage: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'The pinnacle of Amsterdam luxury. Six historic 17th and 18th-century palaces on the Herengracht canal, offering unparalleled elegance and the city’s finest spa.',
    inclusions: ['5 Nights in a Canal View Suite', 'Personal Concierge Service', 'Private Jet/First Class Flights', 'Elite Private Tours'],
    experiences: [
      { title: 'Private Art Masterclass', desc: 'A private session with a renowned local artist in their studio, including art history insights.' },
      { title: 'Exclusive Garden Dinner', desc: 'A private dinner served in the hotel’s magnificent private garden, the largest in the city.' }
    ]
  },
  {
    internalId: 'DXB-01',
    destination: 'Dubai',
    tier: 'Good',
    name: 'Dubai Discovery',
    duration: '5 Nights',
    priceFrom: 1200,
    resort: 'Marina View Hotel',
    boardBasis: 'Half Board',
    flightsNote: 'Flights included from AMS.',
    cardDescription: 'Experience the vibrant energy of Dubai Marina.',
    heroImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'A modern, stylish hotel located in the heart of Dubai Marina. Enjoy easy access to the beach, shopping malls, and the city’s best nightlife.',
    inclusions: ['5 Nights Modern Accommodation', 'Half Board Dining', 'Return Flights', 'Desert Safari Experience'],
    experiences: [
      { title: 'Evening Desert Safari', desc: 'Dune bashing, camel riding, and a traditional BBQ dinner under the stars.' },
      { title: 'Marina Dhow Cruise', desc: 'A relaxing evening cruise through the marina with international buffet dinner.' }
    ]
  },
  {
    internalId: 'DXB-02',
    destination: 'Dubai',
    tier: 'Better',
    name: 'Dubai Elevated',
    duration: '7 Nights',
    priceFrom: 2200,
    resort: 'Palm Jumeirah Resort',
    boardBasis: 'Half Board',
    flightsNote: 'Flights and private transfers included.',
    cardDescription: 'Beachfront luxury and desert safari adventures.',
    heroImage: 'https://images.unsplash.com/photo-1582672060624-ac926d15274c?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'An iconic beachfront resort on the Palm Jumeirah. Offering stunning views of the Arabian Gulf and the Dubai skyline, with world-class facilities.',
    inclusions: ['7 Nights Beachfront Luxury', 'Half Board Dining', 'Private Airport Transfers', 'Premium Desert Experience'],
    experiences: [
      { title: 'Luxury Desert Safari', desc: 'A private desert safari in a luxury vehicle with a gourmet dinner in a private camp.' },
      { title: 'Burj Khalifa At The Top', desc: 'Fast-track entry to the world’s highest observation deck with lounge access.' }
    ]
  },
  {
    internalId: 'DXB-03',
    destination: 'Dubai',
    tier: 'Best',
    name: 'Dubai Pinnacle',
    duration: '7 Nights',
    priceFrom: 4500,
    resort: 'Burj Al Arab Jumeirah',
    boardBasis: 'All Inclusive',
    flightsNote: 'Business class flights and helicopter transfer.',
    cardDescription: 'Unmatched opulence in the world’s most luxurious hotel.',
    heroImage: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Experience the epitome of Arabian luxury. The Burj Al Arab Jumeirah offers duplex suites with panoramic views, private butler service, and access to a private beach.',
    inclusions: ['7 Nights in a Deluxe Suite', 'Business Class Flights', 'Helicopter Transfer', '24/7 Private Butler'],
    experiences: [
      { title: 'Private Yacht Charter', desc: 'A half-day private luxury yacht charter around the Palm Jumeirah with a personal chef.' },
      { title: 'Helicopter City Tour', desc: 'A private helicopter tour over Dubai’s most iconic landmarks.' }
    ]
  },
  {
    internalId: 'HRG-01',
    destination: 'Hurghada',
    tier: 'Good',
    name: 'Hurghada Escape',
    duration: '7 Nights',
    priceFrom: 950,
    resort: 'Red Sea Beach Resort',
    boardBasis: 'All Inclusive',
    flightsNote: 'Direct flights included.',
    cardDescription: 'Relaxing beach holiday with excellent value.',
    heroImage: 'https://images.unsplash.com/photo-1583217874534-581393fd5325?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'A family-friendly all-inclusive resort on the shores of the Red Sea. Perfect for sun-seekers and water sports enthusiasts.',
    inclusions: ['7 Nights All Inclusive', 'Return Flights', 'Airport Transfers', 'Snorkeling Trip'],
    experiences: [
      { title: 'Giftun Island Trip', desc: 'A full-day boat trip to the beautiful Giftun Island for snorkeling and beach time.' },
      { title: 'Glass Bottom Boat', desc: 'Explore the vibrant coral reefs without getting wet on a guided glass-bottom boat tour.' }
    ]
  },
  {
    internalId: 'HRG-02',
    destination: 'Hurghada',
    tier: 'Better',
    name: 'Hurghada Azure',
    duration: '10 Nights',
    priceFrom: 1600,
    resort: 'Steigenberger ALDAU Beach',
    boardBasis: 'Ultra All Inclusive',
    flightsNote: 'Direct flights and private transfers included.',
    cardDescription: 'Premium beachfront resort with private boat charter.',
    heroImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'A premier luxury resort offering a private beach, a lazy river, and a world-class golf course. Known for its exceptional service and dining.',
    inclusions: ['10 Nights Ultra All Inclusive', 'Direct Flights', 'Private Transfers', 'Private Boat Charter'],
    experiences: [
      { title: 'Private Boat Charter', desc: 'A private day on the Red Sea with a dedicated crew, snorkeling gear, and lunch.' },
      { title: 'Luxor Day Trip', desc: 'A private guided day trip to Luxor to visit the Valley of the Kings and Karnak Temple.' }
    ]
  },
  {
    internalId: 'HRG-03',
    destination: 'Hurghada',
    tier: 'Best',
    name: 'Hurghada Royal',
    duration: '10 Nights',
    priceFrom: 2800,
    resort: 'The Oberoi Beach Resort, Sahl Hasheesh',
    boardBasis: 'Premium All Inclusive',
    flightsNote: 'Premium flights and luxury transfers.',
    cardDescription: 'Exclusive suite living and private diving experiences.',
    heroImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'An all-suite luxury resort set in 48 acres of palm-filled gardens. Offering the ultimate in privacy and serenity on the Red Sea coast.',
    inclusions: ['10 Nights in a Grand Suite', 'Premium Flights', 'Luxury Transfers', 'Private Diving Sessions'],
    experiences: [
      { title: 'Private Scuba Diving', desc: 'One-on-one scuba diving sessions with a master instructor at exclusive reef sites.' },
      { title: 'Stargazing Dinner', desc: 'A private gourmet dinner in the desert with a professional astronomer and telescope.' }
    ]
  },
  {
    internalId: 'SAN-01',
    destination: 'Santorini',
    tier: 'Better',
    name: 'Santorini Sunset',
    duration: '5 Nights',
    priceFrom: 1850,
    resort: 'Luxury Caldera Suite',
    boardBasis: 'Bed & Breakfast',
    flightsNote: 'Flights included from major hubs.',
    cardDescription: 'Breathtaking views and private infinity pools.',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'A stunning boutique hotel perched on the cliffs of Oia. Each suite features a private infinity pool and panoramic views of the Aegean Sea.',
    inclusions: ['5 Nights Caldera View Suite', 'Daily Champagne Breakfast', 'Private Sunset Cruise', 'Wine Tasting Tour'],
    experiences: [
      { title: 'Private Sunset Cruise', desc: 'A 4-hour private catamaran cruise with dinner and drinks as the sun sets over the caldera.' },
      { title: 'Volcanic Wine Tour', desc: 'A private tour of Santorini’s unique volcanic vineyards with a professional sommelier.' }
    ]
  },
  {
    internalId: 'SAN-02',
    destination: 'Santorini',
    tier: 'Best',
    name: 'Santorini Prestige',
    duration: '7 Nights',
    priceFrom: 3500,
    resort: 'Canaves Oia Epitome',
    boardBasis: 'Bed & Breakfast',
    flightsNote: 'Business class flights and private transfers.',
    cardDescription: 'The ultimate Greek island luxury experience.',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Experience unparalleled luxury at one of the world’s most awarded resorts. Offering privacy, space, and world-class service in a serene setting.',
    inclusions: ['7 Nights in a Private Villa', 'Business Class Flights', 'Private Helicopter Transfer', 'Dedicated Villa Host'],
    experiences: [
      { title: 'Helicopter Island Tour', desc: 'A private helicopter tour over Santorini and the surrounding Cycladic islands.' },
      { title: 'Private Chef Dinner', desc: 'A bespoke multi-course dinner prepared in your villa by a private chef.' }
    ]
  },
  {
    internalId: 'MAL-01',
    destination: 'Maldives',
    tier: 'Best',
    name: 'Maldives Overwater Bliss',
    duration: '7 Nights',
    priceFrom: 4999,
    resort: 'Soneva Jani',
    boardBasis: 'Half Board',
    flightsNote: 'Premium flights and seaplane transfers included.',
    cardDescription: 'The ultimate overwater villa experience.',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Soneva Jani is located on the island of Medhufaru in the Maldives’ Noonu Atoll. It features overwater and island villas, each with its own private pool and retractable roof.',
    inclusions: ['7 Nights in an Overwater Retreat', 'Half Board Dining', 'Seaplane Transfers', 'Personal Butler'],
    experiences: [
      { title: 'Private Starlight Cinema', desc: 'A private movie screening on a floating screen in the lagoon.' },
      { title: 'Dolphin Cruise', desc: 'A sunset cruise to spot wild dolphins in the Indian Ocean.' }
    ]
  },
  {
    internalId: 'BAL-01',
    destination: 'Bali',
    tier: 'Better',
    name: 'Bali Jungle & Beach',
    duration: '10 Nights',
    priceFrom: 2499,
    resort: 'Four Seasons Bali at Sayan',
    boardBasis: 'Bed & Breakfast',
    flightsNote: 'Flights and private driver included.',
    cardDescription: 'Lush jungle retreats and serene beaches.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Experience the spiritual heart of Bali in Ubud’s lush jungle, followed by a relaxing stay at a world-class beachfront resort.',
    inclusions: ['5 Nights Jungle Suite', '5 Nights Beachfront Villa', 'Private Driver for 10 Days', 'Daily Yoga Sessions'],
    experiences: [
      { title: 'Sacred Monkey Forest', desc: 'A private guided tour of Ubud’s famous monkey forest and ancient temples.' },
      { title: 'Balinese Cooking Class', desc: 'Learn the secrets of Balinese cuisine in a private traditional kitchen.' }
    ]
  },
  {
    internalId: 'JPN-01',
    destination: 'Japan',
    tier: 'Best',
    name: 'Japan Cultural Immersion',
    duration: '12 Nights',
    priceFrom: 8999,
    resort: 'Aman Tokyo & Ryokan Stays',
    boardBasis: 'Mixed',
    flightsNote: 'Business class flights and Shinkansen passes included.',
    cardDescription: 'A refined journey through Tokyo, Kyoto, and Hakone.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Stay at the iconic Aman Tokyo before heading to Kyoto for a traditional Ryokan experience with private onsen.',
    inclusions: ['12 Nights Ultra-Luxury Accommodation', 'Business Class Flights', 'Green Car Rail Pass', 'Private Cultural Guides'],
    experiences: [
      { title: 'Private Tea Ceremony', desc: 'A private tea ceremony with a master in a historic Kyoto tea house.' },
      { title: 'Sumo Training Visit', desc: 'An exclusive morning visit to a traditional Sumo stable to watch training.' }
    ]
  }
];

const faqs = [
  {
    tag: 'home',
    q: 'Do you have a booking engine?',
    a: 'No — and intentionally so. Every trip is built by a human advisor, not an algorithm. Use our quote form or WhatsApp to get started.'
  },
  {
    tag: 'home',
    q: 'How quickly will you respond to a quote request?',
    a: 'Within 24 hours on working days. WhatsApp responses are typically faster — most clients hear back the same day.'
  },
  {
    tag: 'home',
    q: 'Is Prestige Travels a registered travel agency in the Netherlands?',
    a: 'Yes. Prestige Travels is registered with the Dutch Chamber of Commerce (KvK) and operates in full compliance with Dutch consumer travel regulations. Our KvK number is listed in the footer of this website.'
  },
  {
    tag: 'how-it-works',
    q: 'How does the quote process work?',
    a: 'You fill in our quote form or contact us via WhatsApp. Your advisor reviews your request and sends a personalised proposal within 24 hours — including itinerary and pricing.'
  },
  {
    tag: 'how-it-works',
    q: 'Is the quote free and non-binding?',
    a: 'Completely. There is no obligation until you confirm with a deposit. We\'ll never pressure you to commit.'
  },
  {
    tag: 'how-it-works',
    q: 'How do payments work?',
    a: 'Typically 25% deposit to confirm, 50% at 60 days before departure, and the final 25% balance at 30 days before departure. All payment schedules are confirmed in writing per booking.'
  },
  {
    tag: 'how-it-works',
    q: 'Are there any hidden fees?',
    a: 'No. Our pricing is completely transparent. The quote you receive is the final price you pay.'
  }
];

// Helper to map tiers
function getTierDisplay(tier) {
  const map = {
    'Good': { label: 'CURATED', className: 'tier-curated' },
    'Better': { label: 'PREMIER', className: 'tier-premier' },
    'Best': { label: 'PRESTIGE', className: 'tier-prestige' }
  };
  return map[tier] || { label: tier, className: '' };
}

// Export for use in app.js if modules were used, but we'll just load this script first.
window.PT_DATA = { destinations, itineraries, faqs, getTierDisplay };
