// Data for Prestige Travels MVP

const destinations = [
  {
    id: 'dest-1',
    name: 'Amsterdam',
    slug: 'amsterdam',
    tagline: 'Culture, Canals & Cosmopolitan Luxury',
    heroImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'A city of golden-age architecture, world-class museums, and intimate canal-side dining.',
    featured: true
  },
  {
    id: 'dest-2',
    name: 'Dubai',
    slug: 'dubai',
    tagline: 'Skyline, Desert & Modern Extravagance',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Iconic towers, private beach clubs, and a desert landscape unlike anywhere else on Earth.',
    featured: true
  },
  {
    id: 'dest-3',
    name: 'Hurghada',
    slug: 'hurghada',
    tagline: 'Red Sea Reefs, All-Inclusive Luxury',
    heroImage: 'https://images.unsplash.com/photo-1562887245-f2fb0b28e672?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Pristine coral reefs, warm azure waters, and world-class all-inclusive resorts.',
    featured: true
  }
];

const itineraries = [
  {
    internalId: 'AMS-01',
    destination: 'Amsterdam',
    tier: 'Good',
    name: 'Amsterdam Essentials',
    duration: '3 Nights',
    priceFrom: 599,
    resortHotel: 'Hotel V Nesplein',
    boardBasis: 'B&B',
    flightsNote: 'Flights from AMS not included. Can be arranged on request.',
    cardDescription: 'A perfect introduction to Amsterdam with handpicked local highlights.',
    heroImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Hotel V Nesplein is a design-led boutique hotel on the edge of Amsterdam\'s Nine Streets district. Its rooftop bar offers panoramic views of the city, and the central location puts you minutes from Dam Square and the canals.',
    highlights: [
      '3 Nights Boutique Accommodation',
      'Daily Artisan Breakfast',
      'Private Canal Cruise (90 min)',
      'Guided Walking Tour of the Jordaan',
      '24/7 WhatsApp Advisor Support'
    ],
    excursions: [
      { title: 'Private Canal Cruise', desc: 'A 90-minute private boat tour through the UNESCO-listed canal ring with local snacks and drinks.' },
      { title: 'Jordaan Hidden Gems Tour', desc: 'A walking tour led by a local expert focusing on secret courtyards, independent galleries, and local history.' },
      { title: 'Vondelpark & Museum Quarter Walk', desc: 'A self-guided audio walk through Amsterdam\'s cultural heart, passing the Rijksmuseum, Van Gogh Museum, and Concertgebouw.' }
    ],
    featured: false,
    subtitle_nl: 'Een perfecte kennismaking met Amsterdam met zorgvuldig geselecteerde lokale hoogtepunten.',
    resortDescription_nl: 'Hotel V Nesplein is een design-gedreven boutiquehotel aan de rand van de Negen Straatjes in Amsterdam. Het dakterras biedt panoramisch uitzicht over de stad, en de centrale ligging brengt u binnen enkele minuten bij de Dam en de grachten.',
    highlights_nl: [
      '3 nachten boutiqueaccommodatie',
      'Dagelijks ambachtelijk ontbijt',
      'Privé rondvaart (90 min)',
      'Begeleide wandeltour door de Jordaan',
      '24/7 WhatsApp reisadviseur'
    ],
    excursions_nl: [
      { title: 'PRIVÉ RONDVAART', desc: 'Een 90 minuten durende privéboottocht door de UNESCO-werelderfgoed grachtenring met lokale hapjes en drankjes.' },
      { title: 'VERBORGEN PARELS VAN DE JORDAAN', desc: 'Een wandeltour met een lokale gids langs geheime hofjes, onafhankelijke galerijen en lokale geschiedenis.' },
      { title: 'VONDELPARK & MUSEUMKWARTIER', desc: 'Een zelfgeleide audiotour door het culturele hart van Amsterdam, langs het Rijksmuseum, Van Gogh Museum en Concertgebouw.' }
    ],
    flightsNote_nl: 'Vluchten vanuit AMS niet inbegrepen. Op aanvraag te regelen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Amsterdam Essentials pakket.'
  },
  {
    internalId: 'AMS-02',
    destination: 'Amsterdam',
    tier: 'Better',
    name: 'Amsterdam Refined',
    duration: '4 Nights',
    priceFrom: 899,
    resortHotel: 'Pulitzer Amsterdam',
    boardBasis: 'Half Board',
    flightsNote: 'Flights from AMS not included. Can be arranged on request.',
    cardDescription: 'Elevated canal-side luxury with private museum access and fine dining.',
    heroImage: 'https://images.unsplash.com/photo-1576924542622-772281b13aa3?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'The Pulitzer Amsterdam occupies 25 restored Golden Age canal houses on the Prinsengracht. With its private garden, canal-side terrace, and award-winning restaurant Jansz, it is one of the city\'s most iconic luxury hotels.',
    highlights: [
      '4 Nights in a Canal View Room',
      'Daily Gourmet Breakfast & Dinner',
      'Private After-Hours Rijksmuseum Tour',
      'Michelin-Star Dining Experience',
      'Dedicated Travel Advisor'
    ],
    excursions: [
      { title: 'Rijksmuseum After Hours', desc: 'A private guided tour of the Rijksmuseum before public opening hours, including the Night Watch gallery.' },
      { title: 'Michelin Dining Experience', desc: 'A curated 5-course tasting menu at one of Amsterdam\'s premier Michelin-starred restaurants with wine pairing.' },
      { title: 'Artisan Cheese & Wine Cruise', desc: 'A private evening canal cruise with a curated selection of Dutch artisan cheeses and local wines.' }
    ],
    featured: true,
    subtitle_nl: 'Verhoogde luxe aan de gracht met privétoegang tot musea en fine dining.',
    resortDescription_nl: 'Het Pulitzer Amsterdam is een iconisch vijfsterrenhotel dat 25 historische grachtenpanden verenigt tot een uniek verblijf. De schilderachtige tuin, de eigen rondvaartboot en de gerenommeerde restaurants maken dit een onvergetelijke ervaring.',
    highlights_nl: [
      '4 nachten halfpension in historisch grachtenpand',
      'Privé museumtour (Rijksmuseum of Van Gogh)',
      'Klassieke rondvaart met champagne',
      'Fine dining diner voor twee personen',
      'Premium transfers'
    ],
    excursions_nl: [
      { title: 'PRIVÉ MUSEUMTOUR', desc: 'Exclusieve toegang buiten openingstijden tot het Rijksmuseum of Van Gogh Museum, begeleid door een privékurator.' },
      { title: 'CHAMPAGNE RONDVAART', desc: 'Een romantische vaartocht door de verlichte grachten aan boord van een klassieke sloep met champagne en canapés.' },
      { title: 'FINE DINING AMSTERDAM', desc: 'Een diner bij een van Amsterdams meest gelauwerde restaurants, inclusief wijnpairing op maat.' }
    ],
    flightsNote_nl: 'Vluchten vanuit AMS niet inbegrepen. Op aanvraag te regelen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Amsterdam Refined pakket.'
  },
  {
    internalId: 'AMS-03',
    destination: 'Amsterdam',
    tier: 'Best',
    name: 'Amsterdam Prestige',
    duration: '5 Nights',
    priceFrom: 1499,
    resortHotel: 'Hotel de l\'Europe',
    boardBasis: 'Full Board + Extras',
    flightsNote: 'Flights from AMS not included. Premium transfers included.',
    cardDescription: 'The ultimate Amsterdam experience with dedicated concierge and exclusive access.',
    heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Hotel de l\'Europe is a five-star landmark on the Amstel river, blending 19th-century grandeur with contemporary Dutch design. Its Michelin-starred restaurant Flore and Elemis spa make it the pinnacle of Amsterdam luxury.',
    highlights: [
      '5 Nights in a River View Suite',
      'Full Board with Michelin Dining',
      'Personal Concierge Service',
      'Private Art Masterclass',
      'Premium Airport Transfers'
    ],
    excursions: [
      { title: 'Private Art Masterclass', desc: 'A private session with a renowned local artist in their canal-house studio, including art history insights and your own work to take home.' },
      { title: 'Exclusive Garden Dinner', desc: 'A private multi-course dinner served in the hotel\'s magnificent courtyard garden, the largest private garden in central Amsterdam.' },
      { title: 'Helicopter Tour over Holland', desc: 'A 30-minute private helicopter flight over the Amsterdam canal ring, tulip fields, and windmills of Zaanse Schans.' }
    ],
    featured: false,
    subtitle_nl: 'De ultieme Amsterdam-ervaring met een persoonlijke conciërge en exclusieve toegang.',
    resortDescription_nl: 'Hotel De L\'Europe is het meest iconische luxehotel van Amsterdam, gelegen aan de Amstel met uitzicht op de grachten. Het combineert 19e-eeuwse grandeur met moderne verfijning, inclusief een Michelin-restaurant en een privéspa.',
    highlights_nl: [
      '5 nachten volpension inclusief extras',
      'Persoonlijke conciërge voor de gehele reis',
      'Privétransfers inclusief helikopteroptie',
      'Exclusieve toegang tot besloten evenementen',
      'VIP diner bij Michelin-restaurant Bord\'Eau'
    ],
    excursions_nl: [
      { title: 'HELIKOPTERVLUCHT OVER AMSTERDAM', desc: 'Een privévlucht over de Amsterdam Metropolitan Area met uitzicht op de grachtenring, havens en polders.' },
      { title: 'PRIVÉ ATELIER BEZOEK', desc: 'Exclusieve toegang tot een gerenommeerd Amsterdams kunstenaarsstudio, inclusief ontmoeting met de kunstenaar.' },
      { title: 'KONINKLIJK AMSTERDAM DINER', desc: 'Een meercijferig diner in een van de meest exclusieve privé eetkamers van de stad, gereserveerd via uw conciërge.' }
    ],
    flightsNote_nl: 'Vluchten vanuit AMS niet inbegrepen. Premium transfers inbegrepen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Amsterdam Prestige pakket.'
  },
  {
    internalId: 'DXB-01',
    destination: 'Dubai',
    tier: 'Good',
    name: 'Dubai Discovery',
    duration: '5 Nights',
    priceFrom: 1099,
    resortHotel: 'Rove Downtown Dubai',
    boardBasis: 'B&B',
    flightsNote: 'Return flights from Amsterdam (AMS) included.',
    cardDescription: 'Experience the vibrant energy of downtown Dubai with desert safari included.',
    heroImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Rove Downtown is a modern, design-forward hotel steps from the Dubai Mall and Burj Khalifa. Its rooftop pool offers stunning skyline views, and the central location makes it perfect for first-time visitors.',
    highlights: [
      '5 Nights Modern Accommodation',
      'Daily Breakfast',
      'Return Flights from Amsterdam',
      'Evening Desert Safari with BBQ Dinner',
      'Airport Transfers'
    ],
    excursions: [
      { title: 'Evening Desert Safari', desc: 'Dune bashing in a 4x4, camel riding, henna painting, and a traditional BBQ dinner under the stars.' },
      { title: 'Dubai Marina Dhow Cruise', desc: 'A relaxing 2-hour evening cruise through the marina with an international buffet dinner and live entertainment.' },
      { title: 'Old Dubai Heritage Walk', desc: 'A guided walking tour through Al Fahidi, the Gold Souk, and the Spice Souk with traditional Arabic coffee.' }
    ],
    featured: false,
    subtitle_nl: 'Beleef de bruisende energie van het stadscentrum van Dubai inclusief woestijnsafari.',
    resortDescription_nl: 'Rove Downtown Dubai is een stijlvol, modern hotel op loopafstand van de Burj Khalifa en Dubai Mall. Het biedt eigentijdse kamers, een dakteras en een ideale ligging voor stadverkenning.',
    highlights_nl: [
      '5 nachten bed & breakfast',
      'Retourvluchten vanuit Amsterdam',
      'Privétransfer luchthaven',
      'Woestijnsafari met diner',
      'Rondleiding Burj Khalifa (At The Top)'
    ],
    excursions_nl: [
      { title: 'WOESTIJNSAFARI MET DINER', desc: 'Een privé duinsafari in de Arabische woestijn, gevolgd door een authentiek Bedoeïenen-diner onder de sterren.' },
      { title: 'BURJ KHALIFA AT THE TOP', desc: 'Toegang tot het 148e verdieping observatiedek met zonsondergang en panoramisch uitzicht over Dubai.' },
      { title: 'DUBAI MALL & FONTEINSHOW', desc: 'Een avond bij \'s werelds grootste winkelcentrum, afgesloten met de spectaculaire Dubai Fountain show.' }
    ],
    flightsNote_nl: 'Retourvluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Dubai Discovery pakket.'
  },
  {
    internalId: 'DXB-02',
    destination: 'Dubai',
    tier: 'Better',
    name: 'Dubai Elevated',
    duration: '7 Nights',
    priceFrom: 1799,
    resortHotel: 'Atlantis The Palm',
    boardBasis: 'Half Board',
    flightsNote: 'Return flights from Amsterdam (AMS) included.',
    cardDescription: 'Beachfront luxury on the Palm with premium desert and skyline experiences.',
    heroImage: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Atlantis The Palm is an iconic resort at the crescent of Palm Jumeirah. With its private beach, Aquaventure waterpark, the Lost Chambers aquarium, and celebrity chef restaurants, it delivers an unforgettable Dubai experience.',
    highlights: [
      '7 Nights Beachfront Luxury',
      'Half Board with Celebrity Chef Dining',
      'Return Flights from Amsterdam',
      'Private Airport Transfers',
      'Aquaventure Waterpark Access'
    ],
    excursions: [
      { title: 'Luxury Desert Safari', desc: 'A private desert safari in a luxury Land Rover with a gourmet dinner at a private Bedouin-style camp.' },
      { title: 'Burj Khalifa At The Top', desc: 'Fast-track entry to the 148th floor observation deck with premium lounge access and champagne.' },
      { title: 'Palm Jumeirah Speedboat Tour', desc: 'A 90-minute private speedboat tour around the Palm and Dubai Marina with skyline photo opportunities.' }
    ],
    featured: true,
    subtitle_nl: 'Luxe aan het strand op Palm Jumeirah met exclusieve woestijn- en skylinebelevenissen.',
    resortDescription_nl: 'Atlantis The Palm is het meest iconische resort van Dubai, gelegen op het punt van Palm Jumeirah. Het biedt toegang tot Aquaventure Waterpark, het privéstrand, wereldklasse restaurants en spectaculaire uitzichten over de Arabische Golf.',
    highlights_nl: [
      '7 nachten halfpension',
      'Retourvluchten vanuit Amsterdam',
      'Privétransfer luchthaven-hotel',
      'Aquaventure Waterpark dagtoegang',
      'Privé woestijnsafari (premium)'
    ],
    excursions_nl: [
      { title: 'PRIVÉ WOESTIJNSAFARI (PREMIUM)', desc: 'Een exclusieve overnacht woestijnsafari met luxe glamping, sterrenkijken en een privéchef in de Arabische woestijn.' },
      { title: 'DUBAI MARINA BOOTTOCHT', desc: 'Een zonsondergangscruise langs de skyline van Dubai Marina aan boord van een privéjacht, inclusief diner.' },
      { title: 'PALMHELI TOUR', desc: 'Een helikoptervlucht boven Palm Jumeirah en de Dubai skyline voor een onvergetelijk perspectief op de stad.' }
    ],
    flightsNote_nl: 'Retourvluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Dubai Elevated pakket.'
  },
  {
    internalId: 'DXB-03',
    destination: 'Dubai',
    tier: 'Best',
    name: 'Dubai Pinnacle',
    duration: '7 Nights',
    priceFrom: 2999,
    resortHotel: 'Burj Al Arab',
    boardBasis: 'Full Board + Private Transfers',
    flightsNote: 'Business class flights from Amsterdam (AMS) included.',
    cardDescription: 'Unmatched opulence in the world\'s most luxurious hotel with private butler.',
    heroImage: 'https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'The Burj Al Arab Jumeirah is the world\'s most iconic luxury hotel. Every duplex suite comes with a private butler, panoramic Arabian Gulf views, and access to a private beach, terrace pool, and the exclusive Summersalt Beach Club.',
    highlights: [
      '7 Nights in a Duplex Suite',
      'Business Class Flights from Amsterdam',
      'Full Board + 24/7 Private Butler',
      'Helicopter or Rolls-Royce Transfer',
      'Access to Summersalt Beach Club'
    ],
    excursions: [
      { title: 'Private Yacht Charter', desc: 'A half-day luxury yacht charter around the Palm Jumeirah and World Islands with a personal chef and open bar.' },
      { title: 'Helicopter City Tour', desc: 'A 25-minute private helicopter tour over Dubai\'s most iconic landmarks including the Burj Khalifa and Palm Jumeirah.' },
      { title: 'Royal Desert Experience', desc: 'A private overnight glamping experience in the desert with stargazing, falconry, and a Michelin-quality dinner.' }
    ],
    featured: true,
    subtitle_nl: 'Ongeëvenaarde weelde in het meest luxueuze hotel ter wereld met een privébutler.',
    resortDescription_nl: 'Het Burj Al Arab Jumeirah is het enige echte zevensterry-hotel ter wereld, gebouwd op een kunstmatig eiland. Uw privébutler, helikopter-check-in, suites van minimaal 170m² en culinaire ervaringen van wereldniveau maken dit de ultieme luxe-ervaring.',
    highlights_nl: [
      '7 nachten volpension met privétransfers',
      'Business class vluchten vanuit Amsterdam',
      'Privébutler 24/7',
      'Helikoptertransfer naar het hotel',
      'Spa-behandeling voor twee personen'
    ],
    excursions_nl: [
      { title: 'PRIVÉDINEREN OP HET DAKTERRAS', desc: 'Een exclusief diner op het gereserveerde dakterras van het Burj Al Arab, samengesteld door uw privéchef.' },
      { title: 'DUBAIS GOUDEN SOUK TOUR', desc: 'Een begeleide privétour door de historische souks van Deira, inclusief gepersonaliseerd goudsieraden-atelier bezoek.' },
      { title: 'ABRA-TOCHT OVER DUBAI CREEK', desc: 'Een romantische zonsondergangsvaart over de historische Dubai Creek in een traditionele houten abra, gevolgd door een diner in Bastakiya.' }
    ],
    flightsNote_nl: 'Business class vluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Dubai Pinnacle pakket.'
  },
  {
    internalId: 'HRG-01',
    destination: 'Hurghada',
    tier: 'Good',
    name: 'Hurghada Escape',
    duration: '7 Nights',
    priceFrom: 799,
    resortHotel: 'Steigenberger Aqua Magic',
    boardBasis: 'All Inclusive',
    flightsNote: 'Return flights from Amsterdam (AMS) included.',
    cardDescription: 'Relaxing all-inclusive beach holiday with Red Sea snorkeling.',
    heroImage: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Steigenberger Aqua Magic is a family-friendly all-inclusive resort on the Hurghada coastline. With multiple pools, a private sandy beach, water slides, and an on-site reef for snorkeling, it offers outstanding value on the Red Sea.',
    highlights: [
      '7 Nights All Inclusive',
      'Return Flights from Amsterdam',
      'Airport Transfers',
      'Giftun Island Snorkeling Trip',
      'Access to Aqua Park & Private Beach'
    ],
    excursions: [
      { title: 'Giftun Island Boat Trip', desc: 'A full-day boat trip to the protected Giftun Island for snorkeling over coral reefs, beach time, and a buffet lunch.' },
      { title: 'Glass Bottom Boat Tour', desc: 'Explore the vibrant coral reefs and tropical fish without getting wet on a guided glass-bottom boat tour.' },
      { title: 'Quad Bike Desert Safari', desc: 'A 2-hour sunset quad bike safari through the Eastern Desert with Bedouin tea and stargazing.' }
    ],
    featured: false,
    subtitle_nl: 'Ontspannende all-inclusive strandvakantie met snorkelen in de Rode Zee.',
    resortDescription_nl: 'Steigenberger Aqua Magic is een levendig all-inclusive resort direct aan het strand van Hurghada, met een uitgebreid waterpark, meerdere restaurants en een privéstrand aan de Rode Zee. Ideaal voor ontspanning en wateravontuur.',
    highlights_nl: [
      '7 nachten all-inclusive',
      'Retourvluchten vanuit Amsterdam',
      'Privétransfer luchthaven-hotel',
      'Snorkeluitrusting en begeleide rif-tour',
      'Toegang waterpark'
    ],
    excursions_nl: [
      { title: 'BEGELEIDE RIFF SNORKELTOUR', desc: 'Een begeleide snorkelexcursie naar het House Reef van Hurghada, een van de rijkste koraalgebieden van de Rode Zee.' },
      { title: 'DAGTRIP LUXOR', desc: 'Een optionele dagtour naar de Vallei der Koningen, de Karnak Tempel en de Colossi van Memnon vanuit Hurghada.' },
      { title: 'ZONSONDERGANG OP DE RODE ZEE', desc: 'Een ontspannen boottocht bij zonsondergang langs de kust van Hurghada met drankjes en hapjes aan boord.' }
    ],
    flightsNote_nl: 'Retourvluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Hurghada Escape pakket.'
  },
  {
    internalId: 'HRG-02',
    destination: 'Hurghada',
    tier: 'Better',
    name: 'Hurghada Azure',
    duration: '10 Nights',
    priceFrom: 1199,
    resortHotel: 'Rixos Premium Magawish',
    boardBasis: 'All Inclusive Ultra',
    flightsNote: 'Return flights from Amsterdam (AMS) included.',
    cardDescription: 'Premium beachfront resort with private boat charter and Luxor day trip.',
    heroImage: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Rixos Premium Magawish Suites & Villas offers ultra all-inclusive luxury on a private stretch of Red Sea beach. With a world-class spa, multiple à la carte restaurants, and a kids\' club, it suits couples and families alike.',
    highlights: [
      '10 Nights Ultra All Inclusive',
      'Return Flights from Amsterdam',
      'Private Airport Transfers',
      'Private Boat Charter Day',
      'Spa Credit (1 Treatment per Person)'
    ],
    excursions: [
      { title: 'Private Boat Charter', desc: 'A full-day private boat on the Red Sea with a dedicated crew, snorkeling gear, fishing equipment, and a fresh seafood lunch.' },
      { title: 'Luxor Day Trip', desc: 'A private guided day trip to Luxor to visit the Valley of the Kings, Karnak Temple, and Hatshepsut Temple.' },
      { title: 'Dolphin House Reef Snorkeling', desc: 'A half-day trip to Sha\'ab El Erg reef, famous for its resident pod of wild spinner dolphins.' }
    ],
    featured: true,
    subtitle_nl: 'Premium strandresort met een privéboottocht en een dagtrip naar Luxor.',
    resortDescription_nl: 'Rixos Premium Magawish is een exclusief all-inclusive ultra resort op een privéeiland voor de kust van Hurghada. Met meerdere restaurants, een volledig spa-centrum, een privéstrand en een eigen duikcentrum biedt het totale luxe aan de Rode Zee.',
    highlights_nl: [
      '10 nachten ultra all-inclusive',
      'Retourvluchten vanuit Amsterdam',
      'Privétransfer luchthaven-hotel',
      'Privé boottocht voor een dag',
      'Spa-tegoed (1 behandeling per persoon)'
    ],
    excursions_nl: [
      { title: 'PRIVÉ BOOTTOCHT', desc: 'Een hele dag varen op de Rode Zee met een eigen crew, snorkeluitrusting, visuitrusting en een verse vismaaltijd.' },
      { title: 'DAGTRIP LUXOR', desc: 'Een privé begeleide dagtour naar Luxor met bezoek aan de Vallei der Koningen, de Karnak Tempel en de Tempel van Hatsjepsoet.' },
      { title: 'DOLPHIN HOUSE SNORKELEN', desc: 'Een halvedaagse snorkeltrip naar Sha\'ab El Erg, beroemd om de residente groep wilde spinnerdolfijnen.' }
    ],
    flightsNote_nl: 'Retourvluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Hurghada Azure pakket.'
  },
  {
    internalId: 'HRG-03',
    destination: 'Hurghada',
    tier: 'Best',
    name: 'Hurghada Royal',
    duration: '14 Nights',
    priceFrom: 1899,
    resortHotel: 'Sahl Hasheesh Beach Resort',
    boardBasis: 'All Inclusive Prestige',
    flightsNote: 'Premium flights from Amsterdam (AMS) included.',
    cardDescription: 'Exclusive suite living with private diving and desert stargazing.',
    heroImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Set within the exclusive Sahl Hasheesh Bay, this resort offers spacious suites with sea views, a private coral reef just offshore, and beautifully landscaped gardens. Its Prestige package includes premium spirits, private dining, and priority reservations.',
    highlights: [
      '14 Nights in a Sea View Suite',
      'All Inclusive Prestige Package',
      'Premium Flights from Amsterdam',
      'Private Diving Sessions (3 dives)',
      'VIP Lounge & Private Beach Cabana'
    ],
    excursions: [
      { title: 'Private Scuba Diving', desc: 'Three one-on-one scuba diving sessions with a master PADI instructor at exclusive reef sites including Abu Ramada and Giftun.' },
      { title: 'Desert Stargazing Dinner', desc: 'A private gourmet dinner in the Eastern Desert with a professional astronomer, telescope, and Bedouin campfire.' },
      { title: 'Cairo & Pyramids Overnight', desc: 'A private overnight trip to Cairo including the Pyramids of Giza, the Sphinx, the Egyptian Museum, and a Nile dinner cruise.' }
    ],
    featured: false,
    subtitle_nl: 'Exclusieve suite aan zee met privéduiken en woestijn onder de sterren.',
    resortDescription_nl: 'Gelegen in de exclusieve Sahl Hasheesh Bay biedt dit resort ruime suites met zeezicht, een privé koraalrif direct voor de kust en prachtig aangelegde tuinen. Het Prestige-pakket omvat premium dranken, privé-dining en prioriteitsreserveringen.',
    highlights_nl: [
      '14 nachten in een suite met zeezicht',
      'All Inclusive Prestige-pakket',
      'Premium vluchten vanuit Amsterdam',
      'Privé duiksessies (3 duiken)',
      'VIP lounge & privé strandcabana'
    ],
    excursions_nl: [
      { title: 'PRIVÉ SCUBADUIKEN', desc: 'Drie persoonlijke scubaduiksessies met een PADI-master instructeur op exclusieve riflocaties, waaronder Abu Ramada en Giftun.' },
      { title: 'WOESTIJNDINER ONDER DE STERREN', desc: 'Een privé gastronomisch diner in de Oostelijke Woestijn met een professionele sterrenkundige, telescoop en Bedoeïenen kampvuur.' },
      { title: 'CAÏRO & PIRAMIDES OVERNACHTING', desc: 'Een privé overnachtingsreis naar Caïro inclusief de Piramides van Gizeh, de Sfinx, het Egyptisch Museum en een Nijl-dinercruise.' }
    ],
    flightsNote_nl: 'Premium vluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Hurghada Royal pakket.'
  }
];

const faqs = [
  // HOME FAQs (H-1 to H-5)
  {
    id: 'H-1',
    question: 'Do you have a booking engine?',
    answer: 'No — and intentionally so. Every trip is built by a human advisor, not an algorithm. Use our quote form or WhatsApp to get started.',
    tag: 'home'
  },
  {
    id: 'H-2',
    question: 'How quickly will you respond to a quote request?',
    answer: 'Within 24 hours on working days. WhatsApp responses are typically faster — most clients hear back the same day.',
    tag: 'home'
  },
  {
    id: 'H-3',
    question: 'Is Prestige Travels a registered travel agency?',
    answer: 'Yes. Prestige Travels is registered with the Dutch Chamber of Commerce (KvK: 97890677) and operates in full compliance with Dutch consumer travel regulations and the EU Package Travel Directive.',
    tag: 'home'
  },
  {
    id: 'H-4',
    question: 'Which destinations do you currently offer?',
    answer: 'Our MVP launch focuses on Amsterdam, Dubai, and Hurghada — three destinations our team knows inside out. We plan to expand to additional destinations based on client demand.',
    tag: 'home'
  },
  {
    id: 'H-5',
    question: 'Can you arrange a trip to a destination not listed on your website?',
    answer: 'Absolutely. Our itineraries are starting points. If you have a specific destination in mind, contact us and we will design a bespoke proposal tailored to your wishes.',
    tag: 'home'
  },

  // HOW IT WORKS FAQs (W-1 to W-7)
  {
    id: 'W-1',
    question: 'How does the quote process work?',
    answer: 'You fill in our quote form or contact us via WhatsApp. Your advisor reviews your request and sends a personalised proposal within 24 hours — including itinerary, pricing, and payment schedule.',
    tag: 'how-it-works'
  },
  {
    id: 'W-2',
    question: 'Is the quote free and non-binding?',
    answer: 'Completely. There is no obligation until you confirm with a deposit. We will never pressure you to commit.',
    tag: 'how-it-works'
  },
  {
    id: 'W-3',
    question: 'How do payments work?',
    answer: 'Typically 25% deposit to confirm, with the remaining balance spread across milestones leading up to departure. All payment schedules are confirmed in writing per booking.',
    tag: 'how-it-works'
  },
  {
    id: 'W-4',
    question: 'Are there any hidden fees?',
    answer: 'No. Our pricing is completely transparent. The quote you receive is the final price you pay — no booking fees, no admin charges, no surprises.',
    tag: 'how-it-works'
  },
  {
    id: 'W-5',
    question: 'Can I make changes after receiving my proposal?',
    answer: 'Of course. Unlimited revisions are included at no extra charge before you confirm your booking. We want you to be completely happy with every detail.',
    tag: 'how-it-works'
  },
  {
    id: 'W-6',
    question: 'How long does it take to finalise a booking?',
    answer: 'Most bookings are finalised within 3–5 days of the initial enquiry. Complex multi-destination trips may take a little longer, but your advisor will keep you informed at every step.',
    tag: 'how-it-works'
  },
  {
    id: 'W-7',
    question: 'What is included in every Prestige Travels booking?',
    answer: 'Every booking includes a dedicated travel advisor, a fully detailed itinerary document, 24/7 WhatsApp support during your trip, and all arrangements confirmed in writing before you travel.',
    tag: 'how-it-works'
  },

  // PAYMENT PLANS FAQs (PP-1 to PP-6)
  {
    id: 'PP-1',
    question: 'What is the minimum deposit to secure a booking?',
    answer: 'For departures more than 3 months away, the deposit is 25% of the total travel sum. For departures under 3 months, a 50% deposit is required. Bookings within 28 days of departure require full payment.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-2',
    question: 'Is there interest or admin fees on payment plans?',
    answer: 'No. Our payment plans are completely interest-free with no admin fees. The price you are quoted is the price you pay, regardless of how many milestones your payments are split across.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-3',
    question: 'What happens if I miss a payment milestone?',
    answer: 'Your advisor will contact you proactively. A 14-day grace period applies from the original due date. Repeated non-payment beyond the grace period may, in rare cases, result in the booking being released.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-4',
    question: 'Can I pay the full amount upfront instead?',
    answer: 'Yes. You are welcome to pay the full travel sum at any time. The payment plan is simply an option we offer — there is no obligation to use it.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-5',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfer (SEPA), credit card, and iDEAL. All payment details and instructions are included in your booking confirmation.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-6',
    question: 'Is everyone eligible for a payment plan?',
    answer: 'Payment plans are offered at our discretion and are subject to approval per booking. This will always be communicated clearly before you confirm your booking. We reserve the right to decline or withdraw a payment plan.',
    tag: 'payment-plans'
  },

  // ITINERARIES FAQs (I-1 to I-8)
  {
    id: 'I-1',
    question: 'Can I customise one of your listed itineraries?',
    answer: 'Absolutely. Every itinerary on our website is a starting point. Your advisor will tailor it to your exact preferences — different hotels, longer stays, extra excursions, dietary requirements, you name it.',
    tag: 'itineraries'
  },
  {
    id: 'I-2',
    question: 'What do the tier levels (Curated, Premier, Prestige) mean?',
    answer: 'Our tiers reflect the level of luxury and inclusions. Curated offers excellent quality and value. Premier adds upgraded hotels and exclusive experiences. Prestige is our top tier with the finest hotels, private transfers, and VIP access.',
    tag: 'itineraries'
  },
  {
    id: 'I-3',
    question: 'Are flights always included?',
    answer: 'It depends on the itinerary. Amsterdam packages do not include flights (since most clients are local). Dubai and Hurghada packages include return flights from Amsterdam Schiphol (AMS). This is clearly noted on each itinerary.',
    tag: 'itineraries'
  },
  {
    id: 'I-4',
    question: 'Can I book for a group or family?',
    answer: 'Yes. Our itineraries can be adapted for couples, families, and groups. Tell us how many travellers and any specific requirements (child-friendly hotels, interconnecting rooms, etc.) and we will adjust the proposal accordingly.',
    tag: 'itineraries'
  },
  {
    id: 'I-5',
    question: 'Do prices change depending on the season?',
    answer: 'Yes. Prices on our website reflect starting rates and may vary based on travel dates, availability, and seasonal demand. Your advisor will provide exact pricing based on your preferred dates.',
    tag: 'itineraries'
  },
  {
    id: 'I-6',
    question: 'Can I upgrade my hotel or add extra nights?',
    answer: 'Of course. Upgrades, extensions, and add-ons are always available. Let your advisor know your preferences and they will include the options and pricing in your proposal.',
    tag: 'itineraries'
  },
  {
    id: 'I-7',
    question: 'Do you arrange visas or travel documents?',
    answer: 'We provide guidance on visa requirements for your destination and can recommend visa services. However, it remains the traveller\'s responsibility to ensure they have valid travel documents before departure.',
    tag: 'itineraries'
  },
  {
    id: 'I-8',
    question: 'Is travel insurance included?',
    answer: 'Travel insurance is not included in our packages but is strongly recommended. We can advise on suitable policies and providers. Some credit cards also offer travel insurance — check with your bank.',
    tag: 'itineraries'
  },

  // TRAVEL INFO FAQs (T-1 to T-6)
  {
    id: 'T-1',
    question: 'Do I need a visa for Dubai or Egypt?',
    answer: 'EU/EEA passport holders receive a visa on arrival in both the UAE and Egypt. For other nationalities, requirements vary. Your advisor will confirm the specific visa requirements based on your passport.',
    tag: 'travel-info'
  },
  {
    id: 'T-2',
    question: 'Are any vaccinations required?',
    answer: 'No mandatory vaccinations are currently required for Amsterdam, Dubai, or Hurghada for most travellers. We recommend checking the latest advice from your GP or the RIVM (Dutch National Institute for Public Health) before travelling.',
    tag: 'travel-info'
  },
  {
    id: 'T-3',
    question: 'How do airport transfers work?',
    answer: 'Where transfers are included, a driver will meet you at arrivals with a name sign. Transfer details and driver contact information are shared via WhatsApp before you land.',
    tag: 'travel-info'
  },
  {
    id: 'T-4',
    question: 'What is the baggage allowance?',
    answer: 'Baggage allowances depend on the airline and fare class. Your booking confirmation will include full details. Most packages include 23kg checked luggage plus a cabin bag.',
    tag: 'travel-info'
  },
  {
    id: 'T-5',
    question: 'What currency should I bring?',
    answer: 'Amsterdam uses Euros (€), Dubai uses Dirhams (AED), and Hurghada uses Egyptian Pounds (EGP). Credit cards are widely accepted in all three destinations. Your advisor will provide currency tips in your pre-departure guide.',
    tag: 'travel-info'
  },
  {
    id: 'T-6',
    question: 'What happens if my flight is delayed or cancelled?',
    answer: 'Your advisor monitors your flights and will proactively reach out if there are disruptions. We will coordinate with the airline and your hotel to adjust transfers and check-in times as needed.',
    tag: 'travel-info'
  },

  // GENERAL FAQs (G-1 to G-6)
  {
    id: 'G-1',
    question: 'How do I contact Prestige Travels?',
    answer: 'You can reach us via WhatsApp at +31 6 57196097, email at info@prestigetravels.nl, or through the quote form on our website. WhatsApp is the fastest way to reach us.',
    tag: 'general'
  },
  {
    id: 'G-2',
    question: 'How large is the Prestige Travels team?',
    answer: 'We are a small, dedicated team — and that is intentional. Every client is personally looked after by a senior advisor. We do not outsource or use call centres.',
    tag: 'general'
  },
  {
    id: 'G-3',
    question: 'Do you speak languages other than English?',
    answer: 'Yes. Our team speaks Dutch, English, and Arabic. We are happy to communicate in whichever language you prefer.',
    tag: 'general'
  },
  {
    id: 'G-4',
    question: 'What are your office hours?',
    answer: 'Our standard hours are Monday to Friday, 9:00–18:00 CET. WhatsApp messages outside these hours are read and responded to as soon as possible the next working day.',
    tag: 'general'
  },
  {
    id: 'G-5',
    question: 'Do you have a sustainability policy?',
    answer: 'We are committed to responsible travel. We work with locally owned suppliers where possible, recommend carbon offset programmes, and avoid promoting activities that exploit animals or damage ecosystems.',
    tag: 'general'
  },
  {
    id: 'G-6',
    question: 'How do I make a complaint?',
    answer: 'We take complaints seriously. Email info@prestigetravels.nl with the subject line "Complaint" and your booking reference. We aim to acknowledge complaints within 24 hours and resolve them within 14 working days.',
    tag: 'general'
  }
];

const blogPosts = [
  {
    slug: 'dubai-winter',
    title: 'The Ultimate Guide to Dubai in Winter',
    category: 'Destination Guides',
    excerpt: 'Why November to March is the perfect time to visit the UAE.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    date: 'March 16, 2026',
    readTime: 5,
    tags: ['Dubai', 'Winter Travel', 'Destination Guide', 'UAE'],
    content: `<p class="mb-8">Dubai is a city of superlatives, but its summer heat can be overwhelming. That's why the winter months—from November to March—are widely considered the best time to visit. With temperatures hovering between a comfortable 20°C and 28°C, the city truly comes alive, offering the perfect climate for both beach relaxation and desert exploration.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Perfect Beach Weather</h2>
<p class="mb-8">During winter, the Arabian Gulf is warm enough for swimming, and the sun is gentle enough for long days lounging at luxury beach clubs. Whether you're staying at the iconic Palm Jumeirah or exploring the vibrant JBR beach, the conditions are flawless.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Desert Adventures</h2>
<p class="mb-8">Winter is the only time of year when a desert safari is truly enjoyable. The cooler evenings make for magical nights under the stars at a Bedouin camp, complete with traditional dining and entertainment.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"Dubai in winter is a completely different city — one where the outdoors becomes your playground and every evening feels like a celebration."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Outdoor Dining and Events</h2>
<p class="mb-8">Dubai's culinary scene spills outdoors during these months. Rooftop bars, terrace restaurants, and outdoor festivals like the Dubai Shopping Festival (usually held in January) take full advantage of the beautiful weather.</p>`
  },
  {
    slug: 'european-packing',
    title: 'How to Pack for a European City Break',
    category: 'Travel Planning',
    excerpt: 'Essential packing tips for a stylish and comfortable trip.',
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=800',
    date: 'March 10, 2026',
    readTime: 4,
    tags: ['Europe', 'Packing Tips', 'Travel Planning', 'City Break'],
    content: `<p class="mb-8">A European city break calls for versatile packing — you want to look stylish in restaurants and galleries while staying comfortable on cobblestone streets. The key is to pack light, layer smart, and choose pieces that work together.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Start with a Capsule Wardrobe</h2>
<p class="mb-8">Choose a neutral colour palette — navy, black, cream, and grey — and build around 3–4 tops, 2 bottoms, and one versatile jacket. Every item should pair with at least two others. This approach keeps your luggage lean without sacrificing variety.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Footwear Matters</h2>
<p class="mb-8">Your shoes will make or break the trip. Bring one pair of comfortable walking shoes (leather sneakers work well) and one pair for evenings out. Avoid brand-new shoes — break them in before you travel.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"The best-dressed travellers are the ones who pack less and choose well."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Tech & Essentials</h2>
<p class="mb-8">Don't forget a universal adapter, a portable charger, and a reusable water bottle. A small crossbody bag is ideal for day trips — it keeps your hands free and deters pickpockets.</p>`
  },
  {
    slug: 'red-sea-diving',
    title: 'Diving in the Red Sea: What to Expect',
    category: 'Destination Guides',
    excerpt: "A beginner's guide to the vibrant reefs of Hurghada.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    date: 'March 5, 2026',
    readTime: 6,
    tags: ['Hurghada', 'Diving', 'Red Sea', 'Destination Guide'],
    content: `<p class="mb-8">The Red Sea is one of the world's premier diving destinations, and Hurghada sits at the heart of it. With warm, crystal-clear waters, extraordinary coral reefs, and marine life ranging from tiny clownfish to whale sharks, it offers something for every level of diver.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Why the Red Sea Is Special</h2>
<p class="mb-8">The Red Sea's unique geography — warm temperatures, high salinity, and minimal river runoff — creates perfect conditions for coral growth. The result is some of the most vibrant and diverse reef systems on the planet, with visibility often exceeding 30 metres.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Best Sites for Beginners</h2>
<p class="mb-8">Giftun Island is the go-to spot for first-time divers and snorkellers. The sheltered bays offer calm waters and shallow reefs teeming with colour. For a more immersive experience, Sha'ab El Erg (Dolphin House) is famous for its resident pod of spinner dolphins.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"There's nothing quite like your first breath underwater on a Red Sea reef — it's a moment that stays with you forever."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Practical Tips</h2>
<p class="mb-8">Most resorts in Hurghada have on-site dive centres with PADI-certified instructors. A Discover Scuba session takes about 3 hours and includes a theory briefing, pool practice, and a guided reef dive. No prior certification is needed.</p>`
  },
  {
    slug: 'santorini-beyond-sunsets',
    title: 'Santorini: Beyond the Sunsets',
    category: 'Travel Planning',
    excerpt: 'Exploring the hidden villages and local flavors of the island.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    date: 'February 28, 2026',
    readTime: 5,
    tags: ['Santorini', 'Greece', 'Travel Planning', 'Islands'],
    content: `<p class="mb-8">Santorini is famous for its caldera views and fiery sunsets, but the island has so much more to offer beyond the Instagram spots. Step away from Oia's crowded viewpoints and you'll discover a quieter, more authentic side of this volcanic island.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">The Hidden Villages</h2>
<p class="mb-8">Pyrgos, perched on the island's highest point, offers panoramic views without the crowds. Its medieval castle ruins and winding alleyways are a photographer's dream. Megalochori is another gem — a traditional wine village where time seems to stand still.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Wine and Gastronomy</h2>
<p class="mb-8">Santorini's volcanic soil produces some of Greece's finest wines, particularly the crisp Assyrtiko. Visit a local winery like Santo Wines or Venetsanos for tastings with caldera views. Pair it with fava (yellow split pea purée), white aubergine, and cherry tomatoes — all local specialities.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"Santorini rewards the curious traveller — the ones who wander past the postcard views and into the heart of the island."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Red Beach and Akrotiri</h2>
<p class="mb-8">The ancient Minoan settlement of Akrotiri, often called the 'Pompeii of the Aegean', is a must-visit. Just nearby, Red Beach stuns with its dramatic crimson cliffs against turquoise water. Visit early in the morning to have it almost to yourself.</p>`
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

// Export for use in app.js
window.PT_DATA = { destinations, itineraries, faqs, blogPosts, getTierDisplay };
