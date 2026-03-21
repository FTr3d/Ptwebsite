// Data for Prestige Travels MVP

const destinations = [
  {
    id: 'dest-1',
    name: 'Amsterdam',
    slug: 'amsterdam',
    tagline: 'Culture, Canals & Cosmopolitan Luxury',
    tagline_nl: 'Cultuur, grachten & kosmopolitische luxe',
    heroImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'A city of golden-age architecture, world-class museums, and intimate canal-side dining.',
    shortDescription_nl: 'Een stad van Gouden Eeuw-architectuur, wereldberoemde musea en intiem dineren aan de gracht.',
    featured: true
  },
  {
    id: 'dest-2',
    name: 'Dubai',
    slug: 'dubai',
    tagline: 'Skyline, Desert & Modern Extravagance',
    tagline_nl: 'Skyline, woestijn & moderne extravagantie',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Iconic towers, private beach clubs, and a desert landscape unlike anywhere else on Earth.',
    shortDescription_nl: 'Iconische torens, privébeachclubs en een woestijnlandschap zoals nergens anders ter wereld.',
    featured: true
  },
  {
    id: 'dest-3',
    name: 'Hurghada',
    slug: 'hurghada',
    tagline: 'Red Sea Reefs, All-Inclusive Luxury',
    tagline_nl: 'Rode Zee-riffen & all-inclusive luxe',
    heroImage: 'https://images.unsplash.com/photo-1562887245-f2fb0b28e672?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Pristine coral reefs, warm azure waters, and world-class all-inclusive resorts.',
    shortDescription_nl: 'Ongerepte koraalriffen, warm azuurblauw water en all-inclusive resorts van wereldklasse.',
    featured: true
  },
  {
    id: 'dest-4',
    name: 'Santorini',
    slug: 'santorini',
    tagline: 'Caldera Views, Clifftop Luxury',
    tagline_nl: 'Calderazichten & luxe op de kliffen',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1920',
    shortDescription: 'Iconic whitewashed villages, volcanic beaches, and some of the most spectacular sunsets in the world.',
    shortDescription_nl: 'Iconische witgekalkte dorpen, vulkanische stranden en enkele van de meest spectaculaire zonsondergangen ter wereld.',
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
  },
  {
    internalId: 'SAT-01',
    destination: 'Santorini',
    tier: 'Good',
    name: 'Santorini Escape',
    duration: '5 Nights',
    priceFrom: 1299,
    resortHotel: 'Andronis Concept Wellness Resort',
    boardBasis: 'B&B',
    flightsNote: 'Return flights from Amsterdam (AMS) included.',
    cardDescription: 'Classic Santorini caldera views, whitewashed villages, and Aegean sunsets.',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Andronis Concept Wellness Resort sits on the Oia cliffs with unobstructed caldera views. The infinity pool seems to merge with the Aegean, and the on-site spa draws on Greek botanical traditions. Rooms are carved into the volcanic rock with private terraces facing the sunset.',
    highlights: [
      '5 Nights B&B Accommodation',
      'Return Flights from Amsterdam',
      'Airport Transfers',
      'Caldera Sunset Catamaran Cruise',
      '24/7 WhatsApp Advisor Support'
    ],
    excursions: [
      { title: 'Sunset Catamaran Cruise', desc: 'A 5-hour sailing trip along the caldera with stops for swimming at Red Beach and the hot springs, with a BBQ dinner on board.' },
      { title: 'Oia Village Walking Tour', desc: 'A guided walk through the blue-domed lanes of Oia, visiting artisan workshops and hidden viewpoints away from the crowds.' },
      { title: 'Assyrtiko Wine Tasting', desc: 'A guided tasting at a traditional canava winery, sampling volcanic wines paired with local cheeses and sun-dried tomatoes.' }
    ],
    featured: false,
    subtitle_nl: 'Klassieke calderazichten, witgekalkte dorpen en Egeïsche zonsondergangen op Santorini.',
    resortDescription_nl: 'Andronis Concept Wellness Resort ligt op de kliffen van Oia met vrij uitzicht op de caldera. Het infinity zwembad lijkt samen te smelten met de Egeïsche Zee, en de spa maakt gebruik van Griekse botanische tradities. Kamers zijn uitgehouwen in het vulkanisch gesteente met privéterrassen richting de zonsondergang.',
    highlights_nl: [
      '5 nachten bed & breakfast',
      'Retourvluchten vanuit Amsterdam',
      'Luchthaventransfers',
      'Catamaran zonsondergangscruise over de caldera',
      '24/7 WhatsApp reisadviseur'
    ],
    excursions_nl: [
      { title: 'ZONSONDERGANG CATAMARAN CRUISE', desc: 'Een 5 uur durende zeiltocht langs de caldera met zwemstops bij Red Beach en de warmwaterbronnen, inclusief BBQ-diner aan boord.' },
      { title: 'WANDELTOUR DOOR OIA', desc: 'Een begeleide wandeling door de blauwgekoepelde straatjes van Oia, langs ambachtelijke ateliers en verborgen uitzichtpunten.' },
      { title: 'ASSYRTIKO WIJNPROEVERIJ', desc: 'Een begeleide proeverij bij een traditionele canava-wijnmakerij met vulkanische wijnen, lokale kazen en zongedroogde tomaten.' }
    ],
    flightsNote_nl: 'Retourvluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText: "Hi Prestige Travels, I'd like to enquire about the Santorini Escape package.",
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Santorini Escape pakket.'
  },
  {
    internalId: 'SAT-02',
    destination: 'Santorini',
    tier: 'Better',
    name: 'Santorini Refined',
    duration: '7 Nights',
    priceFrom: 2199,
    resortHotel: 'Canaves Oia Epitome',
    boardBasis: 'Half Board',
    flightsNote: 'Return flights from Amsterdam (AMS) included.',
    cardDescription: 'Cliffside infinity pools, private sunset terraces, and wine country exploration.',
    heroImage: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Canaves Oia Epitome is a boutique retreat perched above the caldera with private plunge pools in every suite. The restaurant serves contemporary Greek cuisine with ingredients sourced from the hotel\'s own garden. Its location at the quiet end of Oia offers caldera views without the foot traffic.',
    highlights: [
      '7 Nights Half Board in a Suite with Plunge Pool',
      'Return Flights from Amsterdam',
      'Private Airport Transfers',
      'Private Wine Tour of Santorini Vineyards',
      'Dedicated Travel Advisor'
    ],
    excursions: [
      { title: 'Private Wine Country Tour', desc: 'A chauffeured half-day tour visiting three boutique wineries including Venetsanos and Santo Wines, with a sommelier guiding each tasting.' },
      { title: 'Akrotiri Archaeological Site', desc: 'A private guided tour of the Bronze Age settlement preserved under volcanic ash, followed by lunch at a traditional taverna in Megalochori.' },
      { title: 'Thirassia Island Day Trip', desc: 'A private boat to the unspoiled island of Thirassia for hiking, swimming in secluded coves, and a seafood lunch at a cliffside taverna.' }
    ],
    featured: true,
    subtitle_nl: 'Infinity pools aan de klif, privéterrassen bij zonsondergang en wijnlandschappen.',
    resortDescription_nl: 'Canaves Oia Epitome is een boetiekresort boven de caldera met een privé plonsbad in elke suite. Het restaurant serveert eigentijdse Griekse keuken met ingrediënten uit de eigen tuin van het hotel. De rustige ligging aan het uiteinde van Oia biedt calderazicht zonder de drukte.',
    highlights_nl: [
      '7 nachten halfpension in suite met plonsbad',
      'Retourvluchten vanuit Amsterdam',
      'Privé luchthaventransfers',
      'Privé wijntour langs Santorini wijngaarden',
      'Persoonlijke reisadviseur'
    ],
    excursions_nl: [
      { title: 'PRIVÉ WIJNTOUR', desc: 'Een halvedaagse tour met chauffeur langs drie boetiekwijngaarden waaronder Venetsanos en Santo Wines, begeleid door een sommelier.' },
      { title: 'AKROTIRI ARCHEOLOGISCHE SITE', desc: 'Een privébegeleide rondleiding door de Bronstijdnederzetting bewaard onder vulkanische as, gevolgd door lunch in een traditionele taverna in Megalochori.' },
      { title: 'DAGTRIP THIRASSIA', desc: 'Een privéboot naar het ongerepte eiland Thirassia voor wandelen, zwemmen in afgelegen baaien en een vismaaltijd bij een taverna aan de klif.' }
    ],
    flightsNote_nl: 'Retourvluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText: "Hi Prestige Travels, I'd like to enquire about the Santorini Refined package.",
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Santorini Refined pakket.'
  },
  {
    internalId: 'SAT-03',
    destination: 'Santorini',
    tier: 'Best',
    name: 'Santorini Prestige',
    duration: '7 Nights',
    priceFrom: 3499,
    resortHotel: 'Grace Hotel Santorini',
    boardBasis: 'Full Board + Extras',
    flightsNote: 'Business class flights from Amsterdam (AMS) included.',
    cardDescription: 'The pinnacle of Greek island luxury with private concierge and helicopter transfers.',
    heroImage: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&q=80&w=800',
    hotelImage: 'https://images.unsplash.com/photo-1601581875039-e899893d520c?auto=format&fit=crop&q=80&w=800',
    resortDescription: 'Grace Hotel Santorini is an Auberge property carved into the Imerovigli cliffs at the highest point of the caldera rim. The champagne lounge, infinity pool, and Grace restaurant set the standard for luxury in the Greek islands. Every room faces the sunset with uninterrupted caldera views.',
    highlights: [
      '7 Nights Full Board in a Suite with Private Pool',
      'Business Class Flights from Amsterdam',
      'Helicopter Transfer from Airport',
      'Private Concierge Service',
      'Couples Spa Ritual at Grace Spa'
    ],
    excursions: [
      { title: 'Private Yacht Charter', desc: 'A full-day private yacht cruise around the caldera and neighbouring islands with a personal chef, open bar, and stops at volcanic hot springs.' },
      { title: 'Helicopter Tour of the Caldera', desc: 'A 20-minute private helicopter flight over the volcanic crater, Oia, and the surrounding Cycladic islands with champagne on landing.' },
      { title: 'Private Chef Dinner on Your Terrace', desc: 'A Michelin-trained chef prepares a multi-course Greek tasting menu on your private terrace as the sun sets over the caldera.' }
    ],
    featured: false,
    subtitle_nl: 'Het hoogtepunt van Grieks eilandluxe met privéconcierge en helikoptertransfers.',
    resortDescription_nl: 'Grace Hotel Santorini is een Auberge-eigendom uitgehouwen in de kliffen van Imerovigli, op het hoogste punt van de calderarand. De champagnelounge, het infinity zwembad en restaurant Grace zetten de standaard voor luxe op de Griekse eilanden. Elke kamer kijkt uit op de zonsondergang met ononderbroken calderazicht.',
    highlights_nl: [
      '7 nachten volpension in suite met privézwembad',
      'Business class vluchten vanuit Amsterdam',
      'Helikoptertransfer vanaf de luchthaven',
      'Privéconciergeservice',
      'Koppelspa-ritueel bij Grace Spa'
    ],
    excursions_nl: [
      { title: 'PRIVÉ JACHTCHARTER', desc: 'Een hele dag privéjachtcruise rond de caldera en naburige eilanden met een persoonlijke chef, open bar en stops bij vulkanische warmwaterbronnen.' },
      { title: 'HELIKOPTERTOUR OVER DE CALDERA', desc: 'Een 20 minuten durende privéhelikoptervlucht over de vulkanische krater, Oia en de omliggende Cycladische eilanden met champagne bij landing.' },
      { title: 'PRIVÉCHEF-DINER OP UW TERRAS', desc: 'Een Michelin-opgeleide chef bereidt een meergangenmenu met Griekse smaken op uw privéterras terwijl de zon ondergaat boven de caldera.' }
    ],
    flightsNote_nl: 'Business class vluchten vanuit Amsterdam (AMS) inbegrepen.',
    whatsappText: "Hi Prestige Travels, I'd like to enquire about the Santorini Prestige package.",
    whatsappText_nl: 'Hallo Prestige Travels, ik wil meer weten over het Santorini Prestige pakket.'
  }
];

const faqs = [
  // HOME FAQs (H-1 to H-5)
  {
    id: 'H-1',
    question: 'Do you have a booking engine?',
    answer: 'No — and intentionally so. Every trip is built by a human advisor, not an algorithm. Use our quote form or WhatsApp to get started.',
    question_nl: 'Heeft u een boekingssysteem?',
    answer_nl: 'Nee, en dat is bewust. Elke reis wordt samengesteld door een persoonlijke adviseur, niet door een algoritme. Gebruik ons offerteformulier of WhatsApp om te beginnen.',
    tag: 'home'
  },
  {
    id: 'H-2',
    question: 'How quickly will you respond to a quote request?',
    answer: 'Within 24 hours on working days. WhatsApp responses are typically faster — most clients hear back the same day.',
    question_nl: 'Hoe snel reageren jullie op een offerteverzoek?',
    answer_nl: 'Binnen 24 uur op werkdagen. WhatsApp-reacties zijn doorgaans sneller. De meeste klanten horen dezelfde dag nog van ons.',
    tag: 'home'
  },
  {
    id: 'H-3',
    question: 'Is Prestige Travels a registered travel agency?',
    answer: 'Yes. Prestige Travels is registered with the Dutch Chamber of Commerce (KvK: 97890677) and operates in full compliance with Dutch consumer travel regulations and the EU Package Travel Directive.',
    question_nl: 'Is Prestige Travels een geregistreerd reisbureau?',
    answer_nl: 'Ja. Prestige Travels is ingeschreven bij de Kamer van Koophandel (KvK: 97890677) en werkt volledig in overeenstemming met de Nederlandse consumentenreisregelgeving en de Europese Richtlijn Pakketreizen.',
    tag: 'home'
  },
  {
    id: 'H-4',
    question: 'Which destinations do you currently offer?',
    answer: 'Our MVP launch focuses on Amsterdam, Dubai, and Hurghada — three destinations our team knows inside out. We plan to expand to additional destinations based on client demand.',
    question_nl: 'Welke bestemmingen bieden jullie momenteel aan?',
    answer_nl: 'Onze lancering richt zich op Amsterdam, Dubai en Hurghada, drie bestemmingen die ons team door en door kent. We zijn van plan uit te breiden op basis van de vraag van onze klanten.',
    tag: 'home'
  },
  {
    id: 'H-5',
    question: 'Can you arrange a trip to a destination not listed on your website?',
    answer: 'Absolutely. Our itineraries are starting points. If you have a specific destination in mind, contact us and we will design a bespoke proposal tailored to your wishes.',
    question_nl: 'Kunnen jullie een reis naar een bestemming regelen die niet op de website staat?',
    answer_nl: 'Absoluut. Onze reisroutes zijn vertrekpunten. Als u een specifieke bestemming in gedachten heeft, neem dan contact met ons op en wij stellen een voorstel op maat samen.',
    tag: 'home'
  },

  // HOW IT WORKS FAQs (W-1 to W-7)
  {
    id: 'W-1',
    question: 'How does the quote process work?',
    answer: 'You fill in our quote form or contact us via WhatsApp. Your advisor reviews your request and sends a personalised proposal within 24 hours — including itinerary, pricing, and payment schedule.',
    question_nl: 'Hoe werkt het offerteproces?',
    answer_nl: 'U vult ons offerteformulier in of neemt contact op via WhatsApp. Uw adviseur beoordeelt uw aanvraag en stuurt binnen 24 uur een persoonlijk voorstel, inclusief reisroute, prijzen en betalingsschema.',
    tag: 'how-it-works'
  },
  {
    id: 'W-2',
    question: 'Is the quote free and non-binding?',
    answer: 'Completely. There is no obligation until you confirm with a deposit. We will never pressure you to commit.',
    question_nl: 'Is de offerte gratis en vrijblijvend?',
    answer_nl: 'Volledig. Er is geen verplichting totdat u bevestigt met een aanbetaling. Wij zullen u nooit onder druk zetten om te bevestigen.',
    tag: 'how-it-works'
  },
  {
    id: 'W-3',
    question: 'How do payments work?',
    answer: 'Typically 25% deposit to confirm, with the remaining balance spread across milestones leading up to departure. All payment schedules are confirmed in writing per booking.',
    question_nl: 'Hoe werken de betalingen?',
    answer_nl: 'Meestal 25% aanbetaling ter bevestiging, met het resterende bedrag verspreid over mijlpalen tot aan vertrek. Alle betalingsschema\'s worden per boeking schriftelijk bevestigd.',
    tag: 'how-it-works'
  },
  {
    id: 'W-4',
    question: 'Are there any hidden fees?',
    answer: 'No. Our pricing is completely transparent. The quote you receive is the final price you pay — no booking fees, no admin charges, no surprises.',
    question_nl: 'Zijn er verborgen kosten?',
    answer_nl: 'Nee. Onze prijzen zijn volledig transparant. De offerte die u ontvangt is de uiteindelijke prijs, zonder boekingskosten, administratiekosten of verrassingen.',
    tag: 'how-it-works'
  },
  {
    id: 'W-5',
    question: 'Can I make changes after receiving my proposal?',
    answer: 'Of course. Unlimited revisions are included at no extra charge before you confirm your booking. We want you to be completely happy with every detail.',
    question_nl: 'Kan ik wijzigingen aanbrengen na ontvangst van het voorstel?',
    answer_nl: 'Natuurlijk. Onbeperkte aanpassingen zijn kosteloos inbegrepen voordat u uw boeking bevestigt. Wij willen dat u volledig tevreden bent met elk detail.',
    tag: 'how-it-works'
  },
  {
    id: 'W-6',
    question: 'How long does it take to finalise a booking?',
    answer: 'Most bookings are finalised within 3–5 days of the initial enquiry. Complex multi-destination trips may take a little longer, but your advisor will keep you informed at every step.',
    question_nl: 'Hoe lang duurt het om een boeking af te ronden?',
    answer_nl: 'De meeste boekingen worden binnen 3 tot 5 dagen na de eerste aanvraag afgerond. Complexe reizen naar meerdere bestemmingen kunnen iets langer duren, maar uw adviseur houdt u bij elke stap op de hoogte.',
    tag: 'how-it-works'
  },
  {
    id: 'W-7',
    question: 'What is included in every Prestige Travels booking?',
    answer: 'Every booking includes a dedicated travel advisor, a fully detailed itinerary document, 24/7 WhatsApp support during your trip, and all arrangements confirmed in writing before you travel.',
    question_nl: 'Wat is inbegrepen bij elke Prestige Travels-boeking?',
    answer_nl: 'Elke boeking omvat een vaste reisadviseur, een volledig gedetailleerd reisdocument, 24/7 WhatsApp-ondersteuning tijdens uw reis en alle afspraken schriftelijk bevestigd voordat u vertrekt.',
    tag: 'how-it-works'
  },

  // PAYMENT PLANS FAQs (PP-1 to PP-6)
  {
    id: 'PP-1',
    question: 'What is the minimum deposit to secure a booking?',
    answer: 'For departures more than 3 months away, the deposit is 25% of the total travel sum. For departures under 3 months, a 50% deposit is required. Bookings within 28 days of departure require full payment.',
    question_nl: 'Wat is de minimale aanbetaling om een boeking te bevestigen?',
    answer_nl: 'Voor vertrek meer dan 3 maanden van tevoren bedraagt de aanbetaling 25% van de totale reissom. Voor vertrek binnen 3 maanden is 50% aanbetaling vereist. Boekingen binnen 28 dagen voor vertrek vereisen volledige betaling.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-2',
    question: 'Is there interest or admin fees on payment plans?',
    answer: 'No. Our payment plans are completely interest-free with no admin fees. The price you are quoted is the price you pay, regardless of how many milestones your payments are split across.',
    question_nl: 'Zijn er rente of administratiekosten op betalingsplannen?',
    answer_nl: 'Nee. Onze betalingsplannen zijn volledig rentevrij zonder administratiekosten. De prijs die u geoffreerd krijgt is de prijs die u betaalt, ongeacht het aantal termijnen.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-3',
    question: 'What happens if I miss a payment milestone?',
    answer: 'Your advisor will contact you proactively. A 14-day grace period applies from the original due date. Repeated non-payment beyond the grace period may, in rare cases, result in the booking being released.',
    question_nl: 'Wat gebeurt er als ik een betalingsmijlpaal mis?',
    answer_nl: 'Uw adviseur neemt proactief contact met u op. Er geldt een coulanceperiode van 14 dagen vanaf de oorspronkelijke vervaldatum. Herhaalde niet-betaling na de coulanceperiode kan in uitzonderlijke gevallen leiden tot het vrijgeven van de boeking.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-4',
    question: 'Can I pay the full amount upfront instead?',
    answer: 'Yes. You are welcome to pay the full travel sum at any time. The payment plan is simply an option we offer — there is no obligation to use it.',
    question_nl: 'Kan ik het volledige bedrag in één keer betalen?',
    answer_nl: 'Ja. U kunt de volledige reissom op elk moment betalen. Het betalingsplan is simpelweg een optie die wij bieden, er is geen verplichting om het te gebruiken.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-5',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfer (SEPA), credit card, and iDEAL. All payment details and instructions are included in your booking confirmation.',
    question_nl: 'Welke betaalmethoden accepteren jullie?',
    answer_nl: 'Wij accepteren bankoverschrijving (SEPA), creditcard en iDEAL. Alle betalingsgegevens en instructies zijn opgenomen in uw boekingsbevestiging.',
    tag: 'payment-plans'
  },
  {
    id: 'PP-6',
    question: 'Is everyone eligible for a payment plan?',
    answer: 'Payment plans are offered at our discretion and are subject to approval per booking. This will always be communicated clearly before you confirm your booking. We reserve the right to decline or withdraw a payment plan.',
    question_nl: 'Komt iedereen in aanmerking voor een betalingsplan?',
    answer_nl: 'Betalingsplannen worden naar eigen inzicht aangeboden en zijn onderhevig aan goedkeuring per boeking. Dit wordt altijd duidelijk gecommuniceerd voordat u uw boeking bevestigt. Wij behouden ons het recht voor een betalingsplan te weigeren of in te trekken.',
    tag: 'payment-plans'
  },

  // ITINERARIES FAQs (I-1 to I-8)
  {
    id: 'I-1',
    question: 'Can I customise one of your listed itineraries?',
    answer: 'Absolutely. Every itinerary on our website is a starting point. Your advisor will tailor it to your exact preferences — different hotels, longer stays, extra excursions, dietary requirements, you name it.',
    question_nl: 'Kan ik een van de vermelde reisroutes aanpassen?',
    answer_nl: 'Absoluut. Elke reisroute op onze website is een vertrekpunt. Uw adviseur stemt deze af op uw exacte voorkeuren: andere hotels, langere verblijven, extra excursies, dieetwensen, noem het maar.',
    tag: 'itineraries'
  },
  {
    id: 'I-2',
    question: 'What do the tier levels (Curated, Premier, Prestige) mean?',
    answer: 'Our tiers reflect the level of luxury and inclusions. Curated offers excellent quality and value. Premier adds upgraded hotels and exclusive experiences. Prestige is our top tier with the finest hotels, private transfers, and VIP access.',
    question_nl: 'Wat betekenen de categorieniveaus (Curated, Premier, Prestige)?',
    answer_nl: 'Onze categorie\u00ebn weerspiegelen het niveau van luxe en inclusies. Curated biedt uitstekende kwaliteit en waarde. Premier voegt ge\u00fcpgrade hotels en exclusieve ervaringen toe. Prestige is ons topniveau met de finest hotels, priv\u00e9transfers en VIP-toegang.',
    tag: 'itineraries'
  },
  {
    id: 'I-3',
    question: 'Are flights always included?',
    answer: 'It depends on the itinerary. Amsterdam packages do not include flights (since most clients are local). Dubai and Hurghada packages include return flights from Amsterdam Schiphol (AMS). This is clearly noted on each itinerary.',
    question_nl: 'Zijn vluchten altijd inbegrepen?',
    answer_nl: 'Dat hangt af van de reisroute. Amsterdam-pakketten bevatten geen vluchten (aangezien de meeste klanten lokaal zijn). Dubai- en Hurghada-pakketten bevatten retourvluchten vanuit Amsterdam Schiphol (AMS). Dit staat duidelijk vermeld bij elke reisroute.',
    tag: 'itineraries'
  },
  {
    id: 'I-4',
    question: 'Can I book for a group or family?',
    answer: 'Yes. Our itineraries can be adapted for couples, families, and groups. Tell us how many travellers and any specific requirements (child-friendly hotels, interconnecting rooms, etc.) and we will adjust the proposal accordingly.',
    question_nl: 'Kan ik boeken voor een groep of gezin?',
    answer_nl: 'Ja. Onze reisroutes kunnen worden aangepast voor koppels, gezinnen en groepen. Vertel ons het aantal reizigers en eventuele specifieke wensen (kindvriendelijke hotels, aangrenzende kamers, etc.) en wij passen het voorstel daarop aan.',
    tag: 'itineraries'
  },
  {
    id: 'I-5',
    question: 'Do prices change depending on the season?',
    answer: 'Yes. Prices on our website reflect starting rates and may vary based on travel dates, availability, and seasonal demand. Your advisor will provide exact pricing based on your preferred dates.',
    question_nl: 'Veranderen de prijzen afhankelijk van het seizoen?',
    answer_nl: 'Ja. De prijzen op onze website zijn vanafprijzen en kunnen vari\u00ebren op basis van reisdata, beschikbaarheid en seizoensvraag. Uw adviseur geeft u exacte prijzen op basis van uw voorkeursdata.',
    tag: 'itineraries'
  },
  {
    id: 'I-6',
    question: 'Can I upgrade my hotel or add extra nights?',
    answer: 'Of course. Upgrades, extensions, and add-ons are always available. Let your advisor know your preferences and they will include the options and pricing in your proposal.',
    question_nl: 'Kan ik mijn hotel upgraden of extra nachten toevoegen?',
    answer_nl: 'Natuurlijk. Upgrades, verlengingen en extra\'s zijn altijd mogelijk. Laat uw adviseur uw voorkeuren weten en deze worden met prijsopties opgenomen in uw voorstel.',
    tag: 'itineraries'
  },
  {
    id: 'I-7',
    question: 'Do you arrange visas or travel documents?',
    answer: 'We provide guidance on visa requirements for your destination and can recommend visa services. However, it remains the traveller\'s responsibility to ensure they have valid travel documents before departure.',
    question_nl: 'Regelen jullie visa of reisdocumenten?',
    answer_nl: 'Wij bieden begeleiding bij visumvereisten voor uw bestemming en kunnen visumdiensten aanbevelen. Het blijft echter de verantwoordelijkheid van de reiziger om geldige reisdocumenten te hebben voor vertrek.',
    tag: 'itineraries'
  },
  {
    id: 'I-8',
    question: 'Is travel insurance included?',
    answer: 'Travel insurance is not included in our packages but is strongly recommended. We can advise on suitable policies and providers. Some credit cards also offer travel insurance — check with your bank.',
    question_nl: 'Is een reisverzekering inbegrepen?',
    answer_nl: 'Een reisverzekering is niet inbegrepen in onze pakketten, maar wordt sterk aanbevolen. Wij kunnen u adviseren over geschikte polissen en aanbieders. Sommige creditcards bieden ook reisverzekeringen aan. Controleer dit bij uw bank.',
    tag: 'itineraries'
  },

  // TRAVEL INFO FAQs (T-1 to T-6)
  {
    id: 'T-1',
    question: 'Do I need a visa for Dubai or Egypt?',
    answer: 'EU/EEA passport holders receive a visa on arrival in both the UAE and Egypt. For other nationalities, requirements vary. Your advisor will confirm the specific visa requirements based on your passport.',
    question_nl: 'Heb ik een visum nodig voor Dubai of Egypte?',
    answer_nl: 'Houders van een EU/EER-paspoort ontvangen bij aankomst een visum in zowel de VAE als Egypte. Voor andere nationaliteiten gelden andere vereisten. Uw adviseur bevestigt de specifieke visumvereisten op basis van uw paspoort.',
    tag: 'travel-info'
  },
  {
    id: 'T-2',
    question: 'Are any vaccinations required?',
    answer: 'No mandatory vaccinations are currently required for Amsterdam, Dubai, or Hurghada for most travellers. We recommend checking the latest advice from your GP or the RIVM (Dutch National Institute for Public Health) before travelling.',
    question_nl: 'Zijn er vaccinaties vereist?',
    answer_nl: 'Er zijn momenteel geen verplichte vaccinaties vereist voor Amsterdam, Dubai of Hurghada voor de meeste reizigers. Wij raden aan het laatste advies van uw huisarts of het RIVM te raadplegen voor vertrek.',
    tag: 'travel-info'
  },
  {
    id: 'T-3',
    question: 'How do airport transfers work?',
    answer: 'Where transfers are included, a driver will meet you at arrivals with a name sign. Transfer details and driver contact information are shared via WhatsApp before you land.',
    question_nl: 'Hoe werken de luchthaventransfers?',
    answer_nl: 'Wanneer transfers zijn inbegrepen, staat een chauffeur u op te wachten bij de aankomsthal met een naambord. Transfergegevens en contactinformatie van de chauffeur worden voor landing via WhatsApp gedeeld.',
    tag: 'travel-info'
  },
  {
    id: 'T-4',
    question: 'What is the baggage allowance?',
    answer: 'Baggage allowances depend on the airline and fare class. Your booking confirmation will include full details. Most packages include 23kg checked luggage plus a cabin bag.',
    question_nl: 'Wat is de bagagetoelage?',
    answer_nl: 'Bagagetoelagen zijn afhankelijk van de luchtvaartmaatschappij en tariefklasse. Uw boekingsbevestiging bevat alle details. De meeste pakketten omvatten 23 kg ruimbagage plus een handbagage.',
    tag: 'travel-info'
  },
  {
    id: 'T-5',
    question: 'What currency should I bring?',
    answer: 'Amsterdam uses Euros (€), Dubai uses Dirhams (AED), and Hurghada uses Egyptian Pounds (EGP). Credit cards are widely accepted in all three destinations. Your advisor will provide currency tips in your pre-departure guide.',
    question_nl: 'Welke valuta moet ik meenemen?',
    answer_nl: 'Amsterdam gebruikt Euro\'s (\u20ac), Dubai gebruikt Dirhams (AED) en Hurghada gebruikt Egyptische ponden (EGP). Creditcards worden op alle drie bestemmingen breed geaccepteerd. Uw adviseur geeft valutatips in uw vertrekgids.',
    tag: 'travel-info'
  },
  {
    id: 'T-6',
    question: 'What happens if my flight is delayed or cancelled?',
    answer: 'Your advisor monitors your flights and will proactively reach out if there are disruptions. We will coordinate with the airline and your hotel to adjust transfers and check-in times as needed.',
    question_nl: 'Wat gebeurt er als mijn vlucht vertraagd of geannuleerd wordt?',
    answer_nl: 'Uw adviseur houdt uw vluchten in de gaten en neemt proactief contact op bij verstoringen. Wij co\u00f6rdineren met de luchtvaartmaatschappij en uw hotel om transfers en inchecktijden aan te passen.',
    tag: 'travel-info'
  },

  // GENERAL FAQs (G-1 to G-6)
  {
    id: 'G-1',
    question: 'How do I contact Prestige Travels?',
    answer: 'You can reach us via WhatsApp at +31 6 57196097, email at info@prestigetravels.nl, or through the quote form on our website. WhatsApp is the fastest way to reach us.',
    question_nl: 'Hoe kan ik contact opnemen met Prestige Travels?',
    answer_nl: 'U kunt ons bereiken via WhatsApp op +31 6 57196097, e-mail op info@prestige-travels.nl of via het offerteformulier op onze website. WhatsApp is de snelste manier om ons te bereiken.',
    tag: 'general'
  },
  {
    id: 'G-2',
    question: 'How large is the Prestige Travels team?',
    answer: 'We are a small, dedicated team — and that is intentional. Every client is personally looked after by a senior advisor. We do not outsource or use call centres.',
    question_nl: 'Hoe groot is het Prestige Travels-team?',
    answer_nl: 'Wij zijn een klein, toegewijd team, en dat is bewust. Elke klant wordt persoonlijk begeleid door een senior adviseur. Wij besteden niet uit en maken geen gebruik van callcenters.',
    tag: 'general'
  },
  {
    id: 'G-3',
    question: 'Do you speak languages other than English?',
    answer: 'Yes. Our team speaks Dutch, English, and Arabic. We are happy to communicate in whichever language you prefer.',
    question_nl: 'Spreken jullie andere talen dan Nederlands?',
    answer_nl: 'Ja. Ons team spreekt Nederlands, Engels en Arabisch. Wij communiceren graag in de taal van uw voorkeur.',
    tag: 'general'
  },
  {
    id: 'G-4',
    question: 'What are your office hours?',
    answer: 'Our standard hours are Monday to Friday, 9:00–18:00 CET. WhatsApp messages outside these hours are read and responded to as soon as possible the next working day.',
    question_nl: 'Wat zijn jullie kantooruren?',
    answer_nl: 'Onze standaard openingstijden zijn maandag tot en met vrijdag, 9:00-18:00 CET. WhatsApp-berichten buiten deze uren worden gelezen en zo snel mogelijk de volgende werkdag beantwoord.',
    tag: 'general'
  },
  {
    id: 'G-5',
    question: 'Do you have a sustainability policy?',
    answer: 'We are committed to responsible travel. We work with locally owned suppliers where possible, recommend carbon offset programmes, and avoid promoting activities that exploit animals or damage ecosystems.',
    question_nl: 'Hebben jullie een duurzaamheidsbeleid?',
    answer_nl: 'Wij zetten ons in voor verantwoord reizen. Wij werken waar mogelijk met lokale leveranciers, bevelen CO2-compensatieprogramma\'s aan en promoten geen activiteiten die dieren uitbuiten of ecosystemen beschadigen.',
    tag: 'general'
  },
  {
    id: 'G-6',
    question: 'How do I make a complaint?',
    answer: 'We take complaints seriously. Email info@prestigetravels.nl with the subject line "Complaint" and your booking reference. We aim to acknowledge complaints within 24 hours and resolve them within 14 working days.',
    question_nl: 'Hoe dien ik een klacht in?',
    answer_nl: 'Wij nemen klachten serieus. E-mail info@prestige-travels.nl met als onderwerp "Klacht" en uw boekingsreferentie. Wij streven ernaar klachten binnen 24 uur te bevestigen en binnen 14 werkdagen op te lossen.',
    tag: 'general'
  }
];

const blogPosts = [
  {
    slug: 'dubai-winter',
    title: 'The Ultimate Guide to Dubai in Winter',
    category: 'Destination Guides',
    excerpt: 'November to March brings warm days, cool evenings, and Dubai at its outdoor best.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    date: 'March 16, 2026',
    readTime: 5,
    tags: ['Dubai', 'Winter Travel', 'Destination Guide', 'UAE'],
    content: `<p class="mb-8">We send more clients to Dubai between November and March than any other window, and for good reason. Summer temperatures regularly hit 45°C, which makes even a walk to the hotel pool feel punishing. But from late autumn through early spring, you get warm days around 24°C, cool evenings, and a city that moves outdoors.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Perfect Beach Weather</h2>
<p class="mb-8">The Arabian Gulf sits at a comfortable swimming temperature, and the sun is strong enough for a tan without burning you in twenty minutes. We love JBR beach for families and the quieter stretches near Al Sufouh for couples. Palm Jumeirah's beach clubs are at their best in January and February.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Desert Adventures</h2>
<p class="mb-8">Summer desert safaris are miserable. Winter ones are spectacular. The sand cools down after sunset, the sky fills with stars, and a Bedouin-style camp dinner with the temperature at 18°C is one of the most memorable evenings you can have in the UAE.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"We came for the skyline and stayed for the desert. That one evening under the stars changed how we think about Dubai."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Outdoor Dining and Events</h2>
<p class="mb-8">Dubai's restaurant scene shifts outdoors in winter. Rooftop bars open their terraces, hotel restaurants set up garden seating, and the Dubai Shopping Festival in January brings street food markets, live music, and late-night souk events. If you like eating well and being outside, this is your season.</p>`,
    title_nl: 'De ultieme gids voor Dubai in de winter',
    category_nl: 'Bestemmingsgidsen',
    excerpt_nl: 'November tot maart brengt warme dagen, koele avonden en Dubai op zijn best.',
    content_nl: `<p class="mb-8">Wij sturen meer klanten naar Dubai tussen november en maart dan in welke andere periode dan ook, en dat is niet zonder reden. Zomertemperaturen komen regelmatig boven de 45°C, wat zelfs een wandeling naar het hotelzwembad tot een beproeving maakt. Maar van de late herfst tot het vroege voorjaar krijgt u warme dagen rond 24°C, koele avonden en een stad die naar buiten trekt.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Perfect strandweer</h2>
<p class="mb-8">De Perzische Golf heeft een comfortabele zwemtemperatuur en de zon is sterk genoeg voor een bruine tint zonder dat u in twintig minuten verbrandt. Wij zijn dol op JBR beach voor gezinnen en de rustigere stukken bij Al Sufouh voor koppels. De beachclubs van Palm Jumeirah zijn op hun best in januari en februari.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Woestijnavonturen</h2>
<p class="mb-8">Woestijnsafari's in de zomer zijn ondraaglijk. In de winter zijn ze spectaculair. Het zand koelt af na zonsondergang, de hemel vult zich met sterren en een diner in Bedoeïenenstijl bij 18°C is een van de meest onvergetelijke avonden die u in de VAE kunt beleven.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"We kwamen voor de skyline en bleven voor de woestijn. Die ene avond onder de sterren heeft onze kijk op Dubai veranderd."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Buiten dineren en evenementen</h2>
<p class="mb-8">De restaurantscene van Dubai verplaatst zich in de winter naar buiten. Rooftopbars openen hun terrassen, hotelrestaurants zetten tuinstoelen neer en het Dubai Shopping Festival in januari brengt streetfoodmarkten, livemuziek en nachtelijke soukevenementen. Als u graag lekker eet en buiten bent, is dit uw seizoen.</p>`
  },
  {
    slug: 'european-packing',
    title: 'How to Pack for a European City Break',
    category: 'Travel Planning',
    excerpt: 'Pack light, layer smart, and skip the suitcase regret. Here is what we tell every client.',
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&q=80&w=800',
    date: 'March 10, 2026',
    readTime: 4,
    tags: ['Europe', 'Packing Tips', 'Travel Planning', 'City Break'],
    content: `<p class="mb-8">We get asked about packing more than almost anything else. European city breaks have a specific challenge: you want to look good at dinner, feel comfortable on cobblestones, and not lug a massive suitcase through narrow hotel corridors. Here is the approach we recommend to every client.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Start with a Capsule Wardrobe</h2>
<p class="mb-8">Pick a neutral base. Navy, black, cream, and grey all mix well. Pack 3 to 4 tops, 2 bottoms, and one jacket that works at both a museum and a rooftop bar. Every piece should pair with at least two others. You will be surprised how many outfits you can build from 8 items.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Footwear Matters</h2>
<p class="mb-8">Shoes make or break a city trip. Bring one pair of broken-in walking shoes (leather sneakers are a solid choice) and one smarter pair for evenings. Leave brand-new shoes at home. Blisters on day two will ruin an otherwise great trip.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"Our best-travelled clients all have one thing in common: a small suitcase and zero packing regret."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Tech and Essentials</h2>
<p class="mb-8">A universal adapter, a portable charger, and a reusable water bottle. Those three items solve 90% of travel annoyances. For daytime, a small crossbody bag keeps your hands free and sits close to your body in crowded streets.</p>`,
    title_nl: 'Inpakken voor een Europese stedentrip',
    category_nl: 'Reisplanning',
    excerpt_nl: 'Pak licht in, kleed u in lagen en vermijd inpakspijt. Dit is wat wij elke klant adviseren.',
    content_nl: `<p class="mb-8">We krijgen vaker vragen over inpakken dan over bijna wat dan ook. Europese stedentrips hebben een specifieke uitdaging: u wilt er goed uitzien bij het diner, comfortabel lopen over kinderkopjes en niet met een enorme koffer door smalle hotelgangen sjouwen. Dit is de aanpak die wij elke klant aanbevelen.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Begin met een capsulegarderobe</h2>
<p class="mb-8">Kies een neutrale basis. Navy, zwart, crème en grijs passen allemaal goed bij elkaar. Pak 3 tot 4 tops in, 2 broeken of rokken en één jas die zowel in een museum als op een rooftopbar werkt. Elk kledingstuk moet met minstens twee andere combineerbaar zijn. U zult verbaasd zijn hoeveel outfits u kunt samenstellen uit 8 items.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Schoeisel is essentieel</h2>
<p class="mb-8">Schoenen maken of breken een stedentrip. Neem één paar ingelopen wandelschoenen mee (leren sneakers zijn een goede keuze) en één netter paar voor de avond. Laat gloednieuwe schoenen thuis. Blaren op dag twee verpesten een verder geweldige trip.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"Onze meest bereisde klanten hebben één ding gemeen: een kleine koffer en nul inpakspijt."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Technologie en essentials</h2>
<p class="mb-8">Een universele adapter, een powerbank en een herbruikbare waterfles. Die drie items lossen 90% van de reisergernissen op. Overdag is een kleine crossbodytas ideaal: uw handen zijn vrij en de tas zit dicht tegen uw lichaam in drukke straten.</p>`
  },
  {
    slug: 'red-sea-diving',
    title: 'Diving in the Red Sea: What to Expect',
    category: 'Destination Guides',
    excerpt: 'What first-time divers need to know about Hurghada, from reef sites to PADI sessions.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    date: 'March 5, 2026',
    readTime: 6,
    tags: ['Hurghada', 'Diving', 'Red Sea', 'Destination Guide'],
    content: `<p class="mb-8">The Red Sea has some of the clearest, warmest water you will find anywhere, and Hurghada puts you right in the middle of it. The reefs here are dense with colour. You will see angelfish, clownfish, moray eels, and if you are lucky, a passing sea turtle or reef shark. We have sent complete beginners and experienced divers alike, and both come back raving.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Why the Red Sea Is Special</h2>
<p class="mb-8">The geography helps. Warm water, high salinity, and almost no river runoff means the coral grows thick and the visibility regularly exceeds 30 metres. On a calm morning, you can see the bottom from the boat before you even get in. It is one of those rare places where snorkelling alone is worth the trip.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Best Sites for Beginners</h2>
<p class="mb-8">Giftun Island is where we send first-timers. The bays are sheltered, the water is shallow, and the reef starts just a few metres from shore. For something more adventurous, Sha'ab El Erg (locals call it Dolphin House) has a resident pod of spinner dolphins. Swimming alongside them is one of those experiences you just do not forget.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"I was nervous about my first dive. Ten minutes in, I forgot about everything except the fish. The reef was so alive it felt like another planet."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Practical Tips</h2>
<p class="mb-8">Most Hurghada resorts have a PADI dive centre on site. A Discover Scuba session runs about 3 hours: a briefing, some pool practice, and then a guided reef dive. No certification needed. If you catch the bug (most people do), you can start your Open Water course the next day.</p>`,
    title_nl: 'Duiken in de Rode Zee: wat kunt u verwachten',
    category_nl: 'Bestemmingsgidsen',
    excerpt_nl: 'Wat beginnende duikers moeten weten over Hurghada, van riflocaties tot PADI-sessies.',
    content_nl: `<p class="mb-8">De Rode Zee heeft een van de helderste en warmste wateren die u waar dan ook zult vinden, en Hurghada brengt u er middenin. De riffen hier barsten van de kleur. U ziet keizervissen, clownvissen, murenen en als u geluk heeft een voorbijzwemmende zeeschildpad of rifhaai. Wij hebben zowel complete beginners als ervaren duikers gestuurd, en beide groepen komen enthousiast terug.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Waarom de Rode Zee bijzonder is</h2>
<p class="mb-8">De geografie helpt. Warm water, hoog zoutgehalte en vrijwel geen rivierafvoer zorgen ervoor dat het koraal dik groeit en het zicht regelmatig meer dan 30 meter bedraagt. Op een kalme ochtend kunt u de bodem zien vanaf de boot, nog voordat u erin springt. Het is een van die zeldzame plekken waar alleen al snorkelen de reis waard is.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Beste locaties voor beginners</h2>
<p class="mb-8">Giftun Island is waar wij beginners naartoe sturen. De baaien zijn beschut, het water is ondiep en het rif begint op slechts een paar meter van de kust. Voor iets avontuurlijkers heeft Sha'ab El Erg (lokaal bekend als Dolphin House) een vaste groep spinnerdolfijnen. Naast hen zwemmen is een ervaring die u niet snel vergeet.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"Ik was zenuwachtig voor mijn eerste duik. Na tien minuten vergat ik alles behalve de vissen. Het rif was zo levendig dat het aanvoelde als een andere planeet."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Praktische tips</h2>
<p class="mb-8">De meeste resorts in Hurghada hebben een PADI-duikcentrum op het terrein. Een Discover Scuba-sessie duurt ongeveer 3 uur: een briefing, wat oefenen in het zwembad en vervolgens een begeleide rifduik. Geen certificering nodig. Als u de smaak te pakken krijgt (en dat gebeurt bij de meesten), kunt u de volgende dag al beginnen met uw Open Water-cursus.</p>`
  },
  {
    slug: 'santorini-beyond-sunsets',
    title: 'Santorini: Beyond the Sunsets',
    category: 'Travel Planning',
    excerpt: 'Skip the crowded Oia viewpoints and find the Santorini that locals keep to themselves.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800',
    date: 'February 28, 2026',
    readTime: 5,
    tags: ['Santorini', 'Greece', 'Travel Planning', 'Islands'],
    content: `<p class="mb-8">Everyone knows Santorini for the caldera and the sunsets, and yes, they are gorgeous. But the island has a whole other side that most visitors never see. Step off the main path in Oia, rent a car for a day, and you will find villages, vineyards, and beaches that feel like a different island entirely.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">The Hidden Villages</h2>
<p class="mb-8">Pyrgos sits at the island's highest point, and from the ruins of its medieval castle, you get a 360-degree view with almost nobody around. The alleyways are narrow, the cats are friendly, and the light in the late afternoon is incredible. Megalochori is quieter still, a wine village with stone courtyards and old wooden doors. We always tell clients to have lunch here at least once.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Wine and Gastronomy</h2>
<p class="mb-8">The volcanic soil gives Santorini's wines a mineral edge that you will not find anywhere else in Greece. Assyrtiko is the star, crisp and dry with a salty finish. Santo Wines and Venetsanos both do tastings with caldera views (book ahead in peak season). Pair the wine with fava, local cherry tomatoes, and white aubergine. Simple food, but flavours that hit differently here.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"We spent a whole afternoon in Pyrgos with a bottle of Assyrtiko and nowhere to be. That was the day we fell in love with Santorini."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Red Beach and Akrotiri</h2>
<p class="mb-8">Akrotiri is a Bronze Age settlement preserved under volcanic ash, often compared to Pompeii. It is fascinating and well worth two hours. Just around the corner, Red Beach has dramatic crimson cliffs dropping into turquoise water. Go early in the morning, before 9am if you can. You will practically have the place to yourself.</p>`,
    title_nl: 'Santorini: meer dan alleen zonsondergangen',
    category_nl: 'Reisplanning',
    excerpt_nl: 'Sla de drukke uitzichtpunten van Oia over en ontdek het Santorini dat de locals voor zichzelf houden.',
    content_nl: `<p class="mb-8">Iedereen kent Santorini van de caldera en de zonsondergangen, en ja, die zijn prachtig. Maar het eiland heeft een hele andere kant die de meeste bezoekers nooit zien. Stap van het hoofdpad in Oia, huur een dag een auto en u vindt dorpen, wijngaarden en stranden die aanvoelen als een compleet ander eiland.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">De verborgen dorpen</h2>
<p class="mb-8">Pyrgos ligt op het hoogste punt van het eiland, en vanaf de ruïnes van het middeleeuwse kasteel heeft u een 360-graden uitzicht met vrijwel niemand in de buurt. De steegjes zijn smal, de katten zijn vriendelijk en het licht in de late namiddag is ongelooflijk. Megalochori is nog rustiger, een wijndorp met stenen binnenplaatsen en oude houten deuren. Wij raden klanten altijd aan hier minstens één keer te lunchen.</p>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Wijn en gastronomie</h2>
<p class="mb-8">De vulkanische bodem geeft de wijnen van Santorini een minerale scherpte die u nergens anders in Griekenland vindt. Assyrtiko is de ster, fris en droog met een zilte afdronk. Santo Wines en Venetsanos bieden beide proeverijen aan met uitzicht op de caldera (reserveer vooruit in het hoogseizoen). Combineer de wijn met fava, lokale kerstomaatjes en witte aubergine. Eenvoudig eten, maar smaken die hier anders uitpakken.</p>
<blockquote style="border-left: 3px solid var(--color-gold); padding-left: 24px; margin: 40px 0; font-style: italic; font-size: 20px;">
"We brachten een hele middag door in Pyrgos met een fles Assyrtiko en nergens heen te hoeven. Dat was de dag dat we verliefd werden op Santorini."
</blockquote>
<h2 style="margin-top: 40px; margin-bottom: 24px;">Red Beach en Akrotiri</h2>
<p class="mb-8">Akrotiri is een nederzetting uit de Bronstijd, bewaard gebleven onder vulkanische as en vaak vergeleken met Pompeji. Het is fascinerend en zeker twee uur waard. Om de hoek ligt Red Beach met dramatische karmozijnrode kliffen die in turquoise water vallen. Ga vroeg in de ochtend, voor 9 uur als het kan. U heeft de plek dan vrijwel voor uzelf.</p>`
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
