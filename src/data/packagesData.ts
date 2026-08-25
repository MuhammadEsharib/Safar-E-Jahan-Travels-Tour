import { PackageDetail, SanctuaryFeature } from "../types";

export const APP_IMAGES = {
  // Primary images matching the uploaded mockups
  heroMakkah:
    "https://cdn.pixabay.com/photo/2018/11/07/16/12/makkah-3800665_1280.jpg", // Majestic Kaaba & Haram
  madinahNight:
    "https://images.pexels.com/photos/21563667/pexels-photo-21563667/free-photo-of-cityscape-of-medina-with-prophets-mosque-at-night.jpeg", // Masjid an-Nabawi Night Minarets
  makkahSuiteKaaba:
    "https://images.unsplash.com/photo-1738762051728-b83857743e77?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Royal Makkah Clock Tower & Suites
  madinahLobby:
    "https://media-cdn.tripadvisor.com/media/photo-s/05/e3/8a/27/hotel-lobby.jpg", // Luxury Grand Hotel Lobby
  gourmetDining:
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z291cm1ldCUyMGZvb2R8ZW58MHx8MHx8fDA%3D", // Luxury Fine Dining Buffet with views
  airplaneSunset:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpV_k7uBnLFHwxT45oO1wKEN-U0fjNt0kYH5XJKMiaTzgHdcUjKSaP4Svl&s=10", // Airplane sunset wing
  haramainTrain:
    "https://cdn.arabsstock.com/uploads/images/60019/al-haramain-express-train-in-makkah-thumbnail-60019.webp", // High Speed Rail
  gmcYukon:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rS8uWyGpDhvWqHWq2_AfqJYA14i93ptSkSTnde_zGklbSTiQsB42s2zx&s=10", // VIP Luxury Transport
  ziyaratCave:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5BUC6h2OGKSFeKLslfTYhVUxKZmAWIFOxtD-yHA3Jw&s", // Mount Noor / Cave Hira
  clockTower:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGOzMq0V1lAKzXAMQJSrTZkWAMa4oOj1eSIbJ8ygoKQ&s", // Makkah Clock Royal Tower
};

export const PACKAGES_DATA: PackageDetail[] = [
  {
    id: "economy-umrah-15",
    name: "Economy Package",
    category: "umrah",
    tag: "Makkah & Madinah",
    isPopular: false,
    duration: "15 Days",
    makkahNights: 8,
    madinahNights: 7,
    hotelRating: "3-Star Accommodations",
    makkahHotel: "Al Kiswah Towers / Emaar Grand (or similar)",
    madinahHotel: "Artal Taiba / Emaar Taiba (or similar)",
    distanceMakkah: "800m (with continuous 24/7 dedicated shuttle)",
    distanceMadinah: "400m from Haram courtyard",
    mealPlan: "Breakfast Included",
    transportType: "Air-Conditioned Luxury Bus",
    description:
      "Focused on affordability without compromising comfort. Ideal for families and individuals seeking a spiritually fulfilling journey with reliable logistics and attentive guidance.",
    priceStartingFrom: {
      pkr: 295000,
      usd: 1050,
      sar: 3950,
    },
    image: APP_IMAGES.madinahNight,
    galleryImages: [
      APP_IMAGES.madinahNight,
      APP_IMAGES.heroMakkah,
      APP_IMAGES.gmcYukon,
    ],
    inclusions: [
      "Saudi Umrah Electronic Visa processing & insurance",
      "8 Nights accommodation in Makkah (3-Star)",
      "7 Nights accommodation in Madinah (3-Star)",
      "Daily authentic breakfast buffet",
      "Complete ground transport in luxury AC coaches",
      "Guided historical Ziyarat in Makkah & Madinah",
      "Dedicated 24/7 multilingual ground support coordinator",
      "Complimentary 5L Zamzam water container",
    ],
    exclusions: [
      "Return international airfare (available as add-on)",
      "Lunch and Dinner (can be upgraded to full-board)",
      "Personal laundry & room service charges",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jeddah & Transfer to Makkah",
        location: "Jeddah / Makkah",
        description:
          "Meet & greet at King Abdulaziz International Airport Jeddah by our team. Seamless transfer to Makkah hotel. Check-in, brief rest, and collective performance of initial Umrah under expert guidance.",
      },
      {
        day: 2,
        title: "Spiritual Reflections & Ibadah in Masjid al-Haram",
        location: "Masjid al-Haram, Makkah",
        description:
          "Dedicated time for personal prayers, Tawaf, and recitation inside the Grand Mosque. Evening orientation on proper pilgrimage etiquette.",
      },
      {
        day: 4,
        title: "Historical Makkah Ziyarat Tour",
        location: "Makkah Landmarks",
        description:
          "Guided visit to Jabal al-Noor (Cave Hira), Jabal Thawr, Mina, Muzdalifah, Plain of Arafat (Jabal al-Rahmah), and Jannat al-Mualla cemetery.",
      },
      {
        day: 8,
        title: "Departure for Madinah al-Munawwarah",
        location: "Makkah to Madinah",
        description:
          "Perform farewell Tawaf (Tawaf al-Wada). Transfer to the City of the Prophet ﷺ via luxury air-conditioned bus. Check into Madinah hotel.",
      },
      {
        day: 9,
        title: "Salam at Rawdah Sharif & Bab as-Salam",
        location: "Masjid an-Nabawi, Madinah",
        description:
          "Assistance with booking official Rawdah permits via Nusuk app. Presentation of Salam at the holy resting place of the Beloved Prophet ﷺ.",
      },
      {
        day: 11,
        title: "Madinah Historical Sites & Holy Landmarks",
        location: "Madinah Landmarks",
        description:
          "Visit to Masjid Quba (first mosque of Islam), Mount Uhud & Martyrs Cemetery, Masjid al-Qiblatayn, and the site of Battle of the Trench (Khandaq).",
      },
      {
        day: 15,
        title: "Final Reflections & Departure to Airport",
        location: "Madinah / Jeddah",
        description:
          "Final prayers in Masjid an-Nabawi, checkout assistance, and private transfer to Prince Mohammad Bin Abdulaziz Airport Madinah for departure home.",
      },
    ],
  },
  {
    id: "star-umrah-15",
    name: "Star Package",
    category: "umrah",
    tag: "Makkah & Madinah",
    isPopular: true,
    duration: "15 Days",
    makkahNights: 8,
    madinahNights: 7,
    hotelRating: "4-Star Hotels (Near Haram)",
    makkahHotel:
      "Makkah Millennium Towers / Voco Makkah / DoubleTree by Hilton",
    madinahHotel: "Raqi Al Madinah / Leader Al Muna Kareem / Saja Al Madinah",
    distanceMakkah: "150-250m direct walk to Haram courtyard",
    distanceMadinah: "100m from Masjid an-Nabawi gates",
    mealPlan: "Full Board Meals",
    transportType: "Haramain High-Speed Train & VIP HiAce",
    description:
      "Balanced luxury with closer proximity to the Haram for effortless access to every prayer. Enjoy delicious full-board dining and seamless high-speed intercity transfers.",
    priceStartingFrom: {
      pkr: 485000,
      usd: 1750,
      sar: 6550,
    },
    image: APP_IMAGES.madinahLobby,
    galleryImages: [
      APP_IMAGES.madinahLobby,
      APP_IMAGES.gourmetDining,
      APP_IMAGES.heroMakkah,
    ],
    inclusions: [
      "Express Saudi Umrah Electronic Visa with VIP Fast-Track assistance",
      "8 Nights in 4-Star Makkah Hotel (Under 250m from Haram)",
      "7 Nights in 4-Star Madinah Hotel (Under 100m from Nabawi Courtyard)",
      "Full-board buffet: Breakfast, Lunch, and Dinner with international & desi choices",
      "Haramain High-Speed Business/Economy Train between Makkah & Madinah",
      "VIP private transfers between airport and hotels",
      "Private air-conditioned Ziyarat coach with scholarly history guide",
      "24/7 dedicated concierge manager on WhatsApp",
      "Zamzam 5L provided upon departure",
    ],
    exclusions: [
      "International flights (can be bundled with PIA, Saudia, Emirates, Qatar Airways)",
      "Personal shopping & tipping",
    ],
    itinerary: [
      {
        day: 1,
        title: "VIP Arrival & Luxury Transfer to Makkah",
        location: "Jeddah to Makkah",
        description:
          "Expedited airport assistance at Jeddah Terminal. Private luxury vehicle transfer straight to your 4-star hotel in Makkah. Guided Umrah performance.",
      },
      {
        day: 2,
        title: "Praise & Devotion in the Holy Sanctuary",
        location: "Masjid al-Haram",
        description:
          "Easy 3-minute walking distance allows effortless attendance at all 5 daily prayers in the Haram. Full-board dining in hotel restaurant.",
      },
      {
        day: 5,
        title: "Exclusive In-Depth Makkah Ziyarat",
        location: "Holy Sites",
        description:
          "Private tour to Cave of Hira, Cave of Thawr, Mina, Muzdalifah, Mount of Mercy (Arafat), and the Kiswa Factory Exhibition (subject to access).",
      },
      {
        day: 8,
        title: "Haramain High-Speed Bullet Train to Madinah",
        location: "Haramain Railway",
        description:
          "Experience the 300 km/h world-class bullet train from Makkah to Madinah in under 2 hours with panoramic desert views. VIP luggage transfer.",
      },
      {
        day: 9,
        title: "Noble Rawdah Sharif Visits with VIP Scheduling",
        location: "Masjid an-Nabawi",
        description:
          "Pre-scheduled guaranteed appointment support for Rawdah Al-Sharifah (Riyad ul-Jannah). Presentation of Darood & Salam at the Roza-e-Rasool ﷺ.",
      },
      {
        day: 12,
        title: "Madinah Historical Sites & Date Farm Excursion",
        location: "Madinah al-Munawwarah",
        description:
          "Visit Masjid Quba, Mount Uhud, Seven Mosques (Battle of the Trench), and an authentic organic Ajwa Date Farm with fresh date tasting.",
      },
      {
        day: 15,
        title: "Spiritual Farewell & Airport Departure",
        location: "Madinah Airport",
        description:
          "Farewell prayers at the Prophet’s Mosque. Private luxury transfer to Madinah Prince Mohammad Airport with luggage assistance.",
      },
    ],
  },
  {
    id: "premium-umrah-10",
    name: "Premium Package",
    category: "umrah",
    tag: "Makkah & Madinah",
    isPopular: false,
    duration: "10 Days",
    makkahNights: 5,
    madinahNights: 5,
    hotelRating: "5-Star Front Row (Fairmont/Raffles)",
    makkahHotel:
      "Fairmont Makkah Clock Royal Tower / Raffles Makkah Palace / Swissôtel Al Maqam",
    madinahHotel: "The Oberoi Madinah / Dar Al Taqwa / Pullman Zamzam Madinah",
    distanceMakkah: "0m (Direct Haram Front Row with private lifts to Mataf)",
    distanceMadinah: "Directly on the main northern plaza facing Green Dome",
    mealPlan: "Gourmet Full Board / Royal Buffet",
    transportType: "Private GMC Yukon XL VIP Fleet",
    description:
      "The elite experience. Front-row luxury accommodations and VIP services crafted for discerning pilgrims demanding the utmost spiritual intimacy, comfort, and distinction.",
    priceStartingFrom: {
      pkr: 890000,
      usd: 3200,
      sar: 12000,
    },
    image: APP_IMAGES.makkahSuiteKaaba,
    galleryImages: [
      APP_IMAGES.makkahSuiteKaaba,
      APP_IMAGES.gourmetDining,
      APP_IMAGES.madinahLobby,
      APP_IMAGES.clockTower,
    ],
    inclusions: [
      "VIP Umrah Visa processing with expedited consular endorsement",
      "5 Nights in 5-Star Kaaba View / Haram View Suites (Fairmont / Raffles)",
      "5 Nights in 5-Star Luxury Madinah Hotel (Oberoi / Dar Al Taqwa front row)",
      "Daily 5-star international gourmet buffet & chef-curated dining",
      "Private luxury GMC Yukon XL for all airport, intercity, and Ziyarat journeys",
      "Haramain High-Speed Train VIP First-Class Cabin option",
      "Private Islamic scholar guide accompanying all Ziyarat excursions",
      "Dedicated 24/7 personal butler and logistics manager",
      "Special wheelchair & elderly assistance if required",
      "Executive departure gift box and pure 5L Zamzam water container",
    ],
    exclusions: [
      "International business/first class flights (available upon request)",
    ],
    itinerary: [
      {
        day: 1,
        title: "VIP Chauffeur Arrival & Kaaba View Suite Check-in",
        location: "Jeddah to Makkah Clock Tower",
        description:
          "Tarmac/terminal fast-track pickup in Jeddah. Chauffeur-driven private GMC Yukon XL transfer directly to Fairmont / Raffles. Check into your Kaaba View Suite with audio link to Haram prayers.",
      },
      {
        day: 2,
        title: "Private Umrah Pilgrimage with Scholarly Mentor",
        location: "Masjid al-Haram",
        description:
          "Perform your Umrah with a dedicated Islamic guide ensuring seamless adherence to Sunnah, tranquility during Tawaf and Sa’i.",
      },
      {
        day: 4,
        title: "Private Historical Journey Through Makkah",
        location: "Holy Sites",
        description:
          "Executive Ziyarat in private GMC Yukon: Jabal al-Noor, Jabal Thawr, Mina, Arafat, Muzdalifah, and private historic museums.",
      },
      {
        day: 6,
        title: "VIP High-Speed First-Class Train to Madinah",
        location: "Makkah to Madinah",
        description:
          "First-Class Haramain train journey with butler-managed baggage transfer directly into The Oberoi or Dar Al Taqwa Madinah suite.",
      },
      {
        day: 7,
        title: "Spiritual Devotion at Roza-e-Rasool ﷺ & Rawdah",
        location: "Masjid an-Nabawi",
        description:
          "Personalized coordination for visits to the Rawdah Sharif. Private meditation and reflection in the serene courtyards of the Prophet’s Mosque.",
      },
      {
        day: 9,
        title: "Private VIP Madinah & Badr Valley Excursion",
        location: "Madinah & Historical Valley",
        description:
          "Private tour of Mount Uhud, Masjid Quba, Masjid al-Qiblatayn, and an optional private excursion to the historic battlefield of Badr.",
      },
      {
        day: 10,
        title: "Royal Departure & Airport Farewell",
        location: "Madinah / Jeddah",
        description:
          "Farewell prayers at Masjid an-Nabawi, check-out with porter service, and private chauffeur transfer to Prince Mohammad Airport VIP lounge.",
      },
    ],
  },
  {
    id: "executive-hajj-package",
    name: "Executive VIP Hajj",
    category: "hajj",
    tag: "Makkah, Mina & Madinah",
    isPopular: true,
    duration: "21 Days",
    makkahNights: 10,
    madinahNights: 6,
    hotelRating: "5-Star Front Row & VIP Mina Maktab",
    makkahHotel: "Fairmont Makkah Clock Tower / Swissôtel Al Maqam",
    madinahHotel: "Dar Al Taqwa / Pullman Zamzam Madinah",
    distanceMakkah: "0m Front row Haram access",
    distanceMadinah: "Facing Northern courtyard",
    mealPlan: "Royal Full Board & Mina 24/7 Buffet",
    transportType: "Private VIP Luxury Coach & Mashaaer Train",
    description:
      "A completely uncompromised Hajj pilgrimage with air-conditioned luxury European tents in Mina (Maktab A), direct access to Jamarat, and 5-star front-row hotels in Makkah and Madinah.",
    priceStartingFrom: {
      pkr: 2650000,
      usd: 9500,
      sar: 35600,
    },
    image: APP_IMAGES.heroMakkah,
    galleryImages: [
      APP_IMAGES.heroMakkah,
      APP_IMAGES.makkahSuiteKaaba,
      APP_IMAGES.madinahNight,
    ],
    inclusions: [
      "Official Saudi Hajj Electronic Visa & Ministry Registration assistance",
      "VIP Category-A Air-Conditioned Tents in Mina with sofa-beds and private washrooms",
      "VIP Air-conditioned European Tents in Arafat with continuous refreshments",
      "5-Star Makkah Hotel stay in Clock Tower before and after Manasik",
      "5-Star Madinah Hotel facing Masjid an-Nabawi",
      "All meals included: 5-Star buffet dining + 24/7 hot beverage & snack service in Mina/Arafat",
      "Mashaaer High Speed Electric Train for Mina, Arafat, and Muzdalifah transfers",
      "Renowned scholarly religious guide conducting daily lectures and Manasik orientation",
      "Qurbani (Hady) included & supervised",
      "24/7 medical doctor and logistical team accompanying the delegation",
    ],
    exclusions: ["Personal emergency insurance upgrades"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jeddah & Welcome to Makkah",
        location: "Jeddah to Makkah",
        description:
          "VIP airport reception, private luxury transfer to 5-star Makkah hotel, welcome banquet and Umrah orientation.",
      },
      {
        day: 8,
        title: "Day of Tarwiyah - Move to Mina VIP Camp",
        location: "Mina Camps (Maktab A)",
        description:
          "Transfer to private VIP air-conditioned tents in Mina. Prayers in Mina and spiritual preparation for the Day of Arafat.",
      },
      {
        day: 9,
        title: "The Day of Arafat & Night at Muzdalifah",
        location: "Arafat & Muzdalifah",
        description:
          "Journey to the Plain of Arafat. Khutbah and combined Dhuhr/Asr prayers. Deep supplication on Jabal al-Rahmah until sunset. Proceed to Muzdalifah for night stay under the open sky and pebble collection.",
      },
      {
        day: 10,
        title: "Yawm an-Nahr - Rami Jamarat, Qurbani, Tawaf al-Ifadah",
        location: "Jamarat, Mina & Haram",
        description:
          "Pebble throwing at Jamarat al-Aqaba, supervised Qurbani, Halq/Taqseer (shaving/trimming), and transfer to Haram for Tawaf al-Ifadah and Sa’i.",
      },
      {
        day: 11,
        title: "Days of Tashreeq in Mina",
        location: "Mina & Jamarat",
        description:
          "Stoning of all three Jamarat, religious lectures, dhikr sessions, and spiritual brotherhood in Mina VIP maktab.",
      },
      {
        day: 14,
        title: "Tawaf al-Wada & Journey to Madinah",
        location: "Makkah to Madinah",
        description:
          "Farewell circumambulation of the Kaaba. Transfer via high-speed train or luxury coach to 5-star hotel in Madinah al-Munawwarah.",
      },
      {
        day: 21,
        title: "Return to Homeland",
        location: "Madinah Airport",
        description:
          "Final prayers at the Prophet’s Mosque, checkout, and flight departure with unforgettable spiritual memories.",
      },
    ],
  },
];

export const SANCTUARY_FEATURES: SanctuaryFeature[] = [
  {
    id: "makkah-royal-views",
    title: "Makkah Royal Views",
    image: APP_IMAGES.makkahSuiteKaaba,
    points: ["Direct Kaaba Views", "Refined Islamic Decor", "Prime Proximity"],
  },
  {
    id: "madinah-serenity",
    title: "Spiritual Serenity in Madinah",
    image: APP_IMAGES.madinahLobby,
    points: [
      "Steps from Masjid an-Nabawi",
      "Grand Marble Architecture",
      "Calm & Spacious Lobbies",
    ],
  },
  {
    id: "gourmet-dining",
    title: "Gourmet Dining Experiences",
    image: APP_IMAGES.gourmetDining,
    points: [
      "International Cuisines",
      "Panoramic City Views",
      "Luxury Service",
    ],
  },
];

export const SERVICES_LIST = [
  {
    id: "personal-assistance",
    title: "Personal Assistance",
    shortDesc: "Dedicated support throughout your planning and travel.",
    icon: "Headset",
    image: APP_IMAGES.madinahLobby,
    fullDesc:
      "From your initial consultation until your safe return home, our experienced multilingual pilgrimage coordinators remain at your service 24 hours a day, 7 days a week.",
    features: [
      "Dedicated one-on-one pilgrimage advisor",
      "24/7 on-ground assistance in Makkah & Madinah",
      "Real-time Nusuk App booking & Rawdah permit support",
      "Specialized care for elderly pilgrims & wheelchair arrangements",
    ],
  },
  {
    id: "travel-services",
    title: "Travel Services",
    shortDesc: "End-to-end logistics from flights to accommodation.",
    icon: "Plane",
    image: APP_IMAGES.airplaneSunset,
    fullDesc:
      "We handle every logistical element with precision—including international flight ticketing, fast-track Umrah/Hajj visas, luxury airport transfers, Haramain train bookings, and premier hotel reservations.",
    features: [
      "Direct flights with leading international carriers",
      "Fast-track Saudi electronic visa approvals in 24–48 hours",
      "Guaranteed hotel confirmations with immediate voucher issuance",
      "Luggage handling and VIP airport transit assistance",
    ],
  },
  {
    id: "customized-options",
    title: "Customized Options",
    shortDesc: "Tailored packages to meet your specific requirements.",
    icon: "SlidersHorizontal",
    image: APP_IMAGES.makkahSuiteKaaba,
    fullDesc:
      "No two journeys are the same. Design your bespoke pilgrimage with flexible dates, custom nights in Makkah and Madinah, selected hotel tiers, private chauffeur fleets, and curated heritage tours.",
    features: [
      "Custom duration from 5 to 30 days",
      "Choice of quad, triple, twin sharing or private royal suites",
      "Private GMC Yukon, HiAce, or executive coach transport",
      "Custom historical Ziyarat tours in Taif, Badr, and Madinah",
    ],
  },
];

export const HERITAGE_TOURS = [
  {
    id: "makkah-ziyarat",
    title: "Makkah Historic Ziyarat",
    location: "Makkah al-Mukarramah",
    duration: "Half Day (4–5 Hours)",
    image: APP_IMAGES.ziyaratCave,
    description:
      "Journey into prophetic history visiting Cave Hira on Jabal al-Noor where the first Quranic revelation descended, Cave Thawr, Jabal al-Rahmah on the plains of Arafat, Mina, and Muzdalifah.",
    highlights: [
      "Cave Hira (Jabal al-Noor)",
      "Cave Thawr",
      "Plains of Arafat & Jabal al-Rahmah",
      "Mina & Muzdalifah",
      "Jannat al-Mualla Cemetery",
    ],
  },
  {
    id: "madinah-ziyarat",
    title: "Madinah City of Lights Tour",
    location: "Madinah al-Munawwarah",
    duration: "Half Day (4–5 Hours)",
    image: APP_IMAGES.madinahNight,
    description:
      "Visit the foundational landmarks of Islamic history including Masjid Quba (where prayer equals an Umrah), Mount Uhud and the blessed Martyrs cemetery, Masjid al-Qiblatayn, and the site of Battle of Trench.",
    highlights: [
      "Masjid Quba",
      "Mount Uhud & Shuhada Cemetery",
      "Masjid al-Qiblatayn",
      "The Seven Mosques (Khandaq)",
      "Organic Ajwa Date Farm & Gardens",
    ],
  },
  {
    id: "taif-excursion",
    title: "Historic Taif Day Excursion",
    location: "Taif Mountains",
    duration: "Full Day (8–9 Hours)",
    image: APP_IMAGES.heroMakkah,
    description:
      "Ascend the scenic Sarawat mountains to historic Taif. Visit Masjid Abdullah Ibn Abbas, the historic Addas garden, Masjid al-Kou’a, traditional Taif rose oil distilleries, and the Al-Hada cable car.",
    highlights: [
      "Masjid Ibn Abbas",
      "Garden of Addas",
      "Taif Rose Oil Factory",
      "Al-Hada Mountain Pass & Scenic Views",
      "Fruit & Honey Souk",
    ],
  },
  {
    id: "badr-expedition",
    title: "Battle of Badr Memorial Tour",
    location: "Badr Valley",
    duration: "Full Day (7–8 Hours)",
    image: APP_IMAGES.airplaneSunset,
    description:
      "An emotionally moving journey to the historic valley of Badr where the decisive battle took place in Ramadan 2 AH. Visit the cemetery of the 14 Badr martyrs and the Arish Mosque.",
    highlights: [
      "Badr Battlefield & Sand Dunes",
      "Martyrs of Badr Memorial",
      "Masjid al-Arish",
      "Scholarly Historical Commentary",
    ],
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    name: "Dr. Tariq Mahmood & Family",
    location: "Lahore, Pakistan",
    packageType: "Executive VIP Umrah (15 Days)",
    travelDate: "Shawwal 1445 / 2024",
    rating: 5,
    title:
      "Flawless Kaaba view and compassionate wheelchair support for my mother",
    comment:
      "Alhamdulillah, traveling with my elderly mother was our biggest concern. Safar-E-Jahan arranged the clock tower Fairmont suite with uninterrupted Haram views and provided a dedicated ground coordinator in Makkah who ensured our wheelchair permits and Rawdah access were seamlessly managed without a minute of stress.",
    verified: true,
    badge: "Family VIP Pilgrims",
    avatarInitials: "TM",
    hotelMention: "Makkah Clock Royal Tower & Oberoi Madinah",
  },
  {
    id: "test-2",
    name: "Chaudhry Salman Farooq",
    location: "Islamabad / Rawalpindi",
    packageType: "VIP Executive Hajj Dossier",
    travelDate: "Dhul-Hijjah 1445 / 2024",
    rating: 5,
    title: "Uncompromising VIP camps in Mina & private bullet train transit",
    comment:
      "The logistics during the 5 days of Hajj were military grade precision. Our air-conditioned VIP tents in Zone-A Mina, direct private bus access to Arafat, and the Haramain bullet train from Madinah to Makkah made the entire journey a spiritually transcendent experience. The team is thoroughly dependable.",
    verified: true,
    badge: "VIP Hajj 2024",
    avatarInitials: "SF",
    hotelMention: "Swissôtel Al Maqam & Dar Al Taqwa",
  },
  {
    id: "test-3",
    name: "Mrs. Saima & Rehan Qureshi",
    location: "Karachi, Pakistan",
    packageType: "Ramadan Last 10 Days Itinerary",
    travelDate: "Ramadan 1445 / 2024",
    rating: 5,
    title: "The best Iftar & Suhoor arrangements right at the Haram courtyard",
    comment:
      "Experiencing the 27th night in Makkah was a lifelong dream. Despite the immense crowds, our hotel proximity was literally 50 meters from King Fahd Gate. Having 24/7 WhatsApp assistance from Brother Faisal in Saudi Arabia gave us immense peace of mind.",
    verified: true,
    badge: "Ramadan Special",
    avatarInitials: "RQ",
    hotelMention: "Pullman Zamzam Makkah",
  },
  {
    id: "test-4",
    name: "Zubair Ahmed Siddiqui",
    location: "London, United Kingdom",
    packageType: "Customized Heritage & Ziyarat Plan",
    travelDate: "Muharram 1446 / 2024",
    rating: 5,
    title: "Knowledgeable scholar guides who brought the Seerah to life",
    comment:
      "The Ziyarat tour to Cave Hira, Mount Uhud, and the historic battle site of Badr was exceptionally curated. The scholars provided profound historical commentary rather than just a hurried taxi ride. Five-star transport with private GMC Yukon was immaculate.",
    verified: true,
    badge: "Overseas Pilgrim",
    avatarInitials: "ZS",
    hotelMention: "Madinah Hilton & Raffles Makkah",
  },
  {
    id: "test-5",
    name: "Haji Muhammad Iqbal & Group (12 pax)",
    location: "Faisalabad, Pakistan",
    packageType: "Economy Deluxe Umrah (21 Days)",
    travelDate: "Rajab 1446 / 2025",
    rating: 5,
    title: "Honest pricing with no hidden charges, exact hotel as promised",
    comment:
      "In the travel industry, agencies often promise one hotel and provide another. Safar-E-Jahan delivered the exact rooms, shuttle schedules, and buffet breakfasts they wrote in our signed agreement. Our entire group of 12 prayed for their prosperity.",
    verified: true,
    badge: "Group Leader (12 Pax)",
    avatarInitials: "MI",
    hotelMention: "Al Kiswah Towers Makkah",
  },
  {
    id: "test-6",
    name: "Barrister Amina Al-Hassan",
    location: "Dubai, UAE",
    packageType: "Solo Executive Weekend Umrah",
    travelDate: "Safar 1446 / 2024",
    rating: 5,
    title: "Fast-track visa in 4 hours and instant luxury airport pick-up",
    comment:
      "I booked a spontaneous 4-day Umrah over the weekend. Safar-E-Jahan processed my electronic visa within hours and had a private chauffeur waiting at Terminal 1 Jeddah. Supreme efficiency and utmost respect for the pilgrim.",
    verified: true,
    badge: "Executive Solo",
    avatarInitials: "AA",
    hotelMention: "Address Jabal Omar Makkah",
  },
];
