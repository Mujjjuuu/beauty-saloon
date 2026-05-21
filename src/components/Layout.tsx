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
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
          <nav className="bg-white/90 backdrop-blur-xl border border-gray-100 px-4 py-3 rounded-[32px] flex justify-between items-center shadow-2xl shadow-black/5 relative">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center justify-center gap-2 px-4 py-2 rounded-2xl transition-all duration-300 relative z-10",
                    isActive ? "text-[#FF2D55]" : "text-gray-400 hover:text-gray-600"
                  )}
                >
                  <item.icon className={cn("w-5 h-5 transition-transform duration-300", isActive && "scale-110")} />
                  {isActive && (
                    <motion.span 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      className="text-xs font-black whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#FF2D55]/5 rounded-2xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};
