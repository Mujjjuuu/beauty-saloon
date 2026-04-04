import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layout';
import { SplashScreen } from './screens/SplashScreen';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { SalonDetailScreen } from './screens/SalonDetailScreen';
import { BookingScreen } from './screens/BookingScreen';
import { MyBookingsScreen } from './screens/MyBookingsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { AIAnalysisScreen } from './screens/AIAnalysisScreen';
import { AnimatePresence, motion } from 'motion/react';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Routes location={location}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/salon/:id" element={<SalonDetailScreen />} />
            <Route path="/book/:salonId/:serviceId" element={<BookingScreen />} />
            <Route path="/bookings" element={<MyBookingsScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/ai-analysis" element={<AIAnalysisScreen />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}
