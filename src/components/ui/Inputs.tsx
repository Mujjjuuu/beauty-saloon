import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-[#FF2D55] text-white hover:bg-[#E6294D]',
    secondary: 'bg-[#FDF2F4] text-[#FF2D55] hover:bg-[#FCE7EB]',
    outline: 'border-2 border-[#FF2D55] text-[#FF2D55] hover:bg-[#FDF2F4]',
    ghost: 'text-gray-600 hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    full: 'w-full py-4 text-base font-semibold',
  };

  return (
    <button
      className={cn(
        'rounded-2xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, icon, className, ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && <label className="text-sm font-medium text-gray-700 ml-1">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'w-full h-14 bg-white border border-gray-200 rounded-2xl px-4 focus:outline-none focus:ring-2 focus:ring-[#FF2D55]/20 focus:border-[#FF2D55] transition-all',
            icon && 'pl-12',
            className
          )}
          {...props}
        />
      </div>
    </div>
  );
};
