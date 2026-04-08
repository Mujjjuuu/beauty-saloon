import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Inputs';

const ONBOARDING_DATA = [
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
    title: "Beauty",
    accent: "Personalized",
    suffix: "ByAI",
    subtitle: "Where style meets perfection – premium grooming tailored just for you"
  },
  {
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000",
    title: "AI Style",
    accent: "Analysis",
    suffix: "",
    subtitle: "Get personalized recommendations based on your unique face shape and features"
  },
  {
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000",
    title: "Easy",
    accent: "Booking",
    suffix: "",
    subtitle: "Book your favorite stylists and salons in just a few taps"
  }
];

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ONBOARDING_DATA.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      setActiveIndex((prev) => (prev + 1) % ONBOARDING_DATA.length);
    } else if (info.offset.x > 50) {
      setActiveIndex((prev) => (prev - 1 + ONBOARDING_DATA.length) % ONBOARDING_DATA.length);
    }
  };

  return (
    <div className="h-screen w-full max-w-md mx-auto relative flex flex-col justify-end p-8 overflow-hidden shadow-2xl bg-black">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          <img 
            src={ONBOARDING_DATA[activeIndex].image} 
            alt="Beauty Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Bottom Content Section */}
      <div className="relative z-10 space-y-8 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-3"
          >
            <h1 className="text-4xl font-black text-white leading-tight tracking-tighter">
              {ONBOARDING_DATA[activeIndex].title} <br />
              <span className="text-[#FF2D55] drop-shadow-lg">{ONBOARDING_DATA[activeIndex].accent}</span>
              {ONBOARDING_DATA[activeIndex].suffix}
            </h1>
            <p className="text-white/70 text-sm font-medium leading-relaxed max-w-[280px]">
              {ONBOARDING_DATA[activeIndex].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex gap-2.5">
          {ONBOARDING_DATA.map((_, index) => (
            <motion.div 
              key={index}
              initial={false}
              animate={{ 
                width: index === activeIndex ? 32 : 8,
                backgroundColor: index === activeIndex ? "#FF2D55" : "rgba(255, 255, 255, 0.3)"
              }}
              className="h-2 rounded-full cursor-pointer"
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Button 
            size="full" 
            onClick={() => navigate('/login')}
            className="h-16 text-lg shadow-2xl shadow-[#FF2D55]/40 active:scale-95 transition-transform"
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
