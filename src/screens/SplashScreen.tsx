import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full max-w-md mx-auto relative flex flex-col justify-between p-8 overflow-hidden shadow-2xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
          alt="Beauty Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      </div>

      {/* Top Logo Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-12 flex flex-col items-center"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl"
        >
          <Sparkles className="w-8 h-8 text-[#FF2D55]" />
        </motion.div>
      </motion.div>

      {/* Bottom Content Section */}
      <div className="relative z-10 space-y-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-3"
        >
          <h1 className="text-5xl font-black text-white leading-tight tracking-tighter">
            Beauty <br />
            <span className="text-[#FF2D55] drop-shadow-lg">Personalized</span>ByAI
          </h1>
          <p className="text-white/70 text-base font-medium leading-relaxed max-w-[300px]">
            Where style meets perfection – premium grooming tailored just for you
          </p>
        </motion.div>

        <div className="flex gap-2.5">
          <motion.div 
            initial={{ width: 8 }}
            animate={{ width: 32 }}
            className="h-2 bg-[#FF2D55] rounded-full" 
          />
          <div className="w-2 h-2 bg-white/30 rounded-full" />
          <div className="w-2 h-2 bg-white/30 rounded-full" />
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

import { Button } from '../components/ui/Inputs';
