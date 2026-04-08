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
    <div className="pb-24 space-y-8">
      <header className="flex justify-between items-center px-6 pt-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF2D55]/20 shadow-inner">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mujtaba" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-bold text-gray-900 leading-tight">Hi Mujtaba</h2>
            <p className="text-[10px] text-[#FF2D55] font-bold tracking-wider uppercase">Beauty Enthusiast</p>
          </div>
        </div>
        <button className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 active:scale-95 transition-transform">
          <Bell className="w-5 h-5 text-gray-900" />
        </button>
      </header>

      <div className="px-6 relative">
        <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
          placeholder="Search for salons or services"
          className="w-full h-14 bg-white rounded-2xl pl-14 pr-12 shadow-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/10 transition-all"
        />
        <button className="absolute right-10 top-1/2 -translate-y-1/2 text-[#FF2D55]">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="px-6">
        <div className="bg-gradient-to-br from-[#FF2D55] to-[#FF758F] rounded-[32px] p-7 text-white relative overflow-hidden shadow-lg shadow-[#FF2D55]/20">
          <div className="relative z-10 space-y-2 max-w-[60%]">
            <h3 className="text-2xl font-black leading-tight">UP TO 50% OFF</h3>
            <p className="text-xs opacity-90 font-medium">On your first AI-recommended style</p>
            <button className="bg-white text-[#FF2D55] px-5 py-2.5 rounded-xl text-xs font-black mt-3 shadow-sm active:scale-95 transition-transform">Claim Now</button>
          </div>
          <div className="absolute right-[-10px] top-[-10px] opacity-20 rotate-12">
            <SparklesIcon className="w-48 h-48" />
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <div className="flex justify-between items-center px-6">
          <h3 className="font-black text-xl text-gray-900 tracking-tight">Featured Salons</h3>
          <button className="text-[#FF2D55] text-xs font-black uppercase tracking-wider">See All</button>
        </div>
        <div className="flex overflow-x-auto gap-5 px-6 pb-6 no-scrollbar scroll-smooth snap-x">
          {salons.slice(0, 3).map((salon) => (
            <div key={salon.id} className="min-w-[300px] snap-start">
              <SalonCard 
                salon={salon} 
                onClick={() => navigate(`/salon/${salon.id}`)}
              />
            </div>
          ))}
          <div className="min-w-[1px] pr-1" />
        </div>
      </section>

      <section className="space-y-6 px-6 pb-24">
        <div className="flex flex-col items-center text-center space-y-2 mb-6">
          <h3 className="font-black text-2xl text-gray-900 tracking-tight">Nearby Salons</h3>
          <p className="text-xs text-gray-400 font-medium">Handpicked styles just for you</p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {salons.slice(3).map((salon) => (
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
