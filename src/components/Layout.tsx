import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Home, Calendar, User, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Layout: React.FC = () => {
  const location = useLocation();
  const hideNav = ['/login', '/signup', '/splash', '/'].includes(location.pathname) && location.pathname !== '/home';

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Sparkles, label: 'AI Style', path: '/ai-analysis' },
    { icon: Calendar, label: 'Bookings', path: '/bookings' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="max-w-md mx-auto h-screen bg-[#FAFAFA] flex flex-col relative overflow-hidden shadow-2xl">
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="h-full">
          <Outlet />
        </div>
      </main>

      {!hideNav && (
        <nav className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex flex-col items-center gap-1 transition-all",
                isActive ? "text-[#FF2D55]" : "text-gray-400"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-bold">{item.label}</span>
            </NavLink>
          ))}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <div className="w-12 h-12 bg-[#FF2D55] rounded-full flex items-center justify-center shadow-lg shadow-[#FF2D55]/30 border-4 border-white">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};
