import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { SalonCard } from '../components/ui/Cards';
import { Search, Filter, Bell, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { user, salons } = useAppContext();

  return (
    <div className="p-6 space-y-6">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF2D55]/20">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anas" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Hi {user?.name || 'Guest'}</h2>
            <p className="text-[10px] text-[#FF2D55] font-medium">Discover your favorite salons</p>
          </div>
        </div>
        <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
          <Bell className="w-5 h-5 text-gray-900" />
        </button>
      </header>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search for salons or services"
          className="w-full h-14 bg-white rounded-2xl pl-12 pr-12 shadow-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/10"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#FF2D55]">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-gradient-to-br from-[#FF2D55] to-[#FF758F] rounded-3xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <h3 className="text-2xl font-black">UP TO 50% OFF</h3>
          <p className="text-sm opacity-90">On your first AI-recommended style</p>
          <button className="bg-white text-[#FF2D55] px-4 py-2 rounded-xl text-xs font-bold mt-2">Claim Now</button>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] opacity-20">
          <SparklesIcon className="w-40 h-40" />
        </div>
      </div>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-black text-lg text-gray-900">Featured Salons</h3>
          <button className="text-[#FF2D55] text-xs font-bold">See All</button>
        </div>
        <div className="grid gap-6">
          {salons.map((salon) => (
            <SalonCard 
              key={salon.id} 
              salon={salon} 
              onClick={() => navigate(`/salon/${salon.id}`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);
