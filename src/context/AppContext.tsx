import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Booking, Salon } from '../types';
import { DUMMY_BOOKINGS, SALONS } from '../data';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
  salons: Salon[];
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [bookings, setBookings] = useState<Booking[]>(DUMMY_BOOKINGS);
  const [salons] = useState<Salon[]>(SALONS);

  const addBooking = (booking: Booking) => {
    setBookings(prev => [booking, ...prev]);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, setUser, bookings, addBooking, salons, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
