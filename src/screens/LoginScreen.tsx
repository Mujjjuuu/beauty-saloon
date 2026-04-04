import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Button, Input } from '../components/ui/Inputs';
import { Mail, Lock, User as UserIcon } from 'lucide-react';
import { motion } from 'motion/react';

export const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const [role, setRole] = useState<'customer' | 'owner'>('customer');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      id: 'u1',
      name: 'Muhammad Anas',
      email: 'hello@example.com',
      role: role
    });
    navigate('/home');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="h-screen w-full max-w-md mx-auto bg-white flex flex-col justify-center p-8 space-y-8 shadow-2xl overflow-y-auto"
    >
      <div className="text-center space-y-2">
        <div className="w-20 h-20 bg-[#FF2D55] rounded-3xl mx-auto flex items-center justify-center shadow-xl shadow-[#FF2D55]/20">
          <SparklesIcon className="text-white w-10 h-10" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 pt-4">BeautyAI</h1>
        <p className="text-gray-500 font-medium">Experience Personalized Beauty</p>
      </div>

      <div className="bg-gray-100 p-1 rounded-2xl flex">
        <button 
          onClick={() => setRole('customer')}
          className={cn(
            "flex-1 py-3 rounded-xl text-sm font-bold transition-all",
            role === 'customer' ? "bg-white text-[#FF2D55] shadow-sm" : "text-gray-500"
          )}
        >
          Customer
        </button>
        <button 
          onClick={() => setRole('owner')}
          className={cn(
            "flex-1 py-3 rounded-xl text-sm font-bold transition-all",
            role === 'owner' ? "bg-white text-[#FF2D55] shadow-sm" : "text-gray-500"
          )}
        >
          Salon Owner
        </button>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <Input 
          label="Email" 
          placeholder="hello@example.com" 
          icon={<Mail className="w-5 h-5" />}
          type="email"
          required
        />
        <Input 
          label="Password" 
          placeholder="••••••••••••" 
          icon={<Lock className="w-5 h-5" />}
          type="password"
          required
        />
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300 text-[#FF2D55] focus:ring-[#FF2D55]" />
            Remember me
          </label>
          <button type="button" className="text-[#FF2D55] font-bold">Forgot Password?</button>
        </div>
        <Button type="submit" size="full" className="mt-4">Get Started</Button>
      </form>

      <div className="text-center">
        <p className="text-gray-500 text-sm">
          Don't have an account? <button onClick={() => navigate('/signup')} className="text-[#FF2D55] font-bold">Sign up</button>
        </p>
      </div>
    </motion.div>
  );
};

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

import { cn } from '../lib/utils';
