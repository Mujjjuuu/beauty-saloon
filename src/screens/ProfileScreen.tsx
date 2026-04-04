import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Button } from '../components/ui/Inputs';
import { User, Settings, CreditCard, Shield, LogOut, ChevronRight } from 'lucide-react';

export const ProfileScreen: React.FC = () => {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: User, label: 'Edit Profile' },
    { icon: CreditCard, label: 'Payment Methods' },
    { icon: Settings, label: 'Settings' },
    { icon: Shield, label: 'Privacy Policy' },
  ];

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-black text-gray-900">Profile</h1>

      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Anas" 
            alt="Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-black text-gray-900">{user?.name}</h2>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>
        <div className="bg-[#FDF2F4] text-[#FF2D55] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {user?.role}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {menuItems.map((item, index) => (
          <button 
            key={item.label}
            className={cn(
              "w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors",
              index !== menuItems.length - 1 && "border-b border-gray-50"
            )}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-bold text-gray-700">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300" />
          </button>
        ))}
      </div>

      <Button 
        variant="secondary" 
        size="full" 
        className="text-red-500 bg-red-50 hover:bg-red-100 border-none"
        onClick={handleLogout}
      >
        <LogOut className="w-5 h-5 mr-2" />
        Logout
      </Button>
    </div>
  );
};

import { cn } from '../lib/utils';
