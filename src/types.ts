export type Role = 'customer' | 'owner';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description?: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Salon {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  distance: string;
  startingPrice: number;
  orders: number;
  services: Service[];
  reviews: Review[];
  isOpen: boolean;
}

export interface Booking {
  id: string;
  salonId: string;
  salonName: string;
  serviceName: string;
  date: string;
  time: string;
  price: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}
