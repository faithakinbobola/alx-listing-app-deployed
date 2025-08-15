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

export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[]; 
    price: number;
    offers: {
        bed: string;
        shower: string;
        occupants: string; 
    };
    image: string;
    discount: string; 
}

export interface ImagesProps {
  imageSrc: string;
  name: string;
}

export interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export interface PillProps {
  label:string;
  isActive: boolean;
  onClick: () => void;
}
