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

  const isAuthPage = ['/login', '/signup', '/'].includes(location.pathname);

  return (
    <div className="max-w-md mx-auto h-screen bg-[#FAFAFA] flex flex-col relative overflow-hidden shadow-2xl">
      <main className="flex-1 overflow-y-auto">
        <div className="h-full">
          <Outlet />
        </div>
      </main>

      {!isAuthPage && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 backdrop-blur-xl border-t border-gray-100 px-6 py-4 flex justify-between items-center z-50">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex flex-col items-center gap-1 transition-all relative",
                isActive ? "text-[#FF2D55]" : "text-gray-400"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] font-bold">{item.label}</span>
              {location.pathname === item.path && (
                <motion.div 
                  layoutId="nav-indicator"
                  className="absolute -top-4 w-1 h-1 bg-[#FF2D55] rounded-full"
                />
              )}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};
