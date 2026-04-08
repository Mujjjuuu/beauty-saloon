import { Salon, Booking } from './types';

export const SALONS: Salon[] = [
  {
    id: '1',
    name: 'Tony And Guy',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewCount: 120,
    location: 'Main Boulevard, Gulberg, Lahore',
    distance: '8 km',
    startingPrice: 2000,
    orders: 1250,
    isOpen: true,
    services: [
      { id: 's1', name: 'Signature Hair Cut', price: 2000, duration: '60 min' },
      { id: 's2', name: 'Hair Styling', price: 1500, duration: '45 min' },
      { id: 's3', name: 'Hair Color', price: 5000, duration: '120 min' },
      { id: 's4', name: 'Facial', price: 3500, duration: '90 min' },
    ],
    reviews: [
      { id: 'r1', userName: 'Sarah Khan', rating: 5, comment: 'Best haircut I ever had!', date: '2 days ago' },
      { id: 'r2', userName: 'Ahmed Ali', rating: 4, comment: 'Great service, but a bit pricey.', date: '1 week ago' },
    ]
  },
  {
    id: '2',
    name: 'Men X Saloon',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviewCount: 85,
    location: 'DHA Phase 5, Lahore',
    distance: '12 km',
    startingPrice: 1500,
    orders: 840,
    isOpen: true,
    services: [
      { id: 's5', name: 'Classic Fade', price: 1500, duration: '45 min' },
      { id: 's6', name: 'Beard Trim', price: 800, duration: '30 min' },
    ],
    reviews: []
  },
  {
    id: '3',
    name: 'Cosmo Salon',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviewCount: 210,
    location: 'Model Town, Lahore',
    distance: '5 km',
    startingPrice: 2500,
    orders: 2100,
    isOpen: true,
    services: [
      { id: 's7', name: 'Bridal Makeup', price: 25000, duration: '240 min' },
      { id: 's8', name: 'Manicure', price: 2500, duration: '60 min' },
    ],
    reviews: []
  },
  {
    id: '4',
    name: 'The Barber Shop',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
    reviewCount: 150,
    location: 'Johar Town, Lahore',
    distance: '3 km',
    startingPrice: 1000,
    orders: 450,
    isOpen: true,
    services: [
      { id: 's9', name: 'Hair Cut', price: 1000, duration: '30 min' },
      { id: 's10', name: 'Shave', price: 500, duration: '20 min' },
    ],
    reviews: []
  },
  {
    id: '5',
    name: 'Glow Beauty Bar',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewCount: 320,
    location: 'Gulberg III, Lahore',
    distance: '7 km',
    startingPrice: 3000,
    orders: 3200,
    isOpen: true,
    services: [
      { id: 's11', name: 'Full Body Massage', price: 5000, duration: '60 min' },
      { id: 's12', name: 'Hydra Facial', price: 8000, duration: '45 min' },
    ],
    reviews: []
  },
  {
    id: '6',
    name: 'Urban Cut',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
    reviewCount: 95,
    location: 'Wapda Town, Lahore',
    distance: '15 km',
    startingPrice: 1200,
    orders: 150,
    isOpen: true,
    services: [
      { id: 's13', name: 'Hair Styling', price: 1200, duration: '40 min' },
    ],
    reviews: []
  }
];

export const DUMMY_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    salonId: '1',
    salonName: 'Tony And Guy',
    serviceName: 'Signature Hair Cut',
    date: '2024-03-25',
    time: '10:00 AM',
    price: 2000,
    status: 'upcoming'
  },
  {
    id: 'b2',
    salonId: '2',
    salonName: 'Men X Saloon',
    serviceName: 'Classic Fade',
    date: '2024-03-20',
    time: '02:30 PM',
    price: 1500,
    status: 'completed'
  }
];
