import { ReactNode } from "react";

export interface CardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  onClick?: () => void;
}

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface PropertyCardProps {
  property: PropertyProps;
  key: string | number;
}

export interface PropertyProps {
  id: string;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  images: ImagesProps;
  image?: Images;
  discount: string;
  reviews: Review[];
  description: string;
  offerOne: OfferOne[];
  offerTwo: OfferTwo[];
}

export interface OfferOne {
  offerImage: string;
  offerText: string;
}

export interface OfferTwo {
  offerImage: string;
  offerText: string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface Images {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
}

export interface Review {
  id: string
  propertyId: string;
  avatar: string;
  name: string;
  date: string;
  occasion: string;
  rating: number;
  years: string;
  comment: string;
}

export interface ImagesProps {
  imageSrc: string;
  name?: string;
}

export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface BookingDatailsProps {
  propertyName: string,
  startDate: string,
  totalNights: number, 
  bookingFee: number,
  price: number,
}