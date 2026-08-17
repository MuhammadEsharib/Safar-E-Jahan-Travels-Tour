export type NavScreen = 'home' | 'umrah' | 'hajj' | 'services' | 'packages' | 'heritage' | 'about' | 'contact';

export interface PackageDetail {
  id: string;
  name: string;
  category: 'umrah' | 'hajj' | 'heritage';
  tag: string;
  isPopular?: boolean;
  duration: string;
  makkahNights: number;
  madinahNights: number;
  hotelRating: string;
  makkahHotel: string;
  madinahHotel: string;
  distanceMakkah: string;
  distanceMadinah: string;
  mealPlan: string;
  transportType: string;
  description: string;
  priceStartingFrom: {
    pkr: number;
    usd: number;
    sar: number;
  };
  image: string;
  galleryImages: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    location: string;
  }[];
}

export interface SanctuaryFeature {
  id: string;
  title: string;
  image: string;
  points: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  fullDesc: string;
  features: string[];
  badge?: string;
  image: string;
}

export interface CustomPlanQuote {
  pilgrimageType: 'umrah' | 'hajj' | 'ziyarat';
  travelers: number;
  departureCity: string;
  travelDate: string;
  makkahNights: number;
  madinahNights: number;
  hotelTier: '3-star' | '4-star' | '5-star-standard' | '5-star-frontrow';
  roomType: 'sharing' | 'quad' | 'triple' | 'double' | 'single';
  transportType: 'sharing-bus' | 'private-hiace' | 'private-gmc-yukon';
  flightIncluded: boolean;
  ziyaratIncluded: boolean;
  specialRequests?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  packageType: string;
  travelDate: string;
  rating: number;
  title: string;
  comment: string;
  verified: boolean;
  badge?: string;
  avatarInitials: string;
  hotelMention?: string;
}

