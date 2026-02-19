import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  loading = false
}) => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    className={`w-full py-4 px-6 rounded-[20px] font-semibold text-base transition-all duration-300 active:scale-95 disabled:opacity-50 ${
      variant === 'primary' 
        ? 'bg-gradient-to-br from-teal-400 to-emerald-500 text-white shadow-lg' 
        : 'bg-white/70 text-gray-700 border border-white/50'
    }`}
  >
    {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : children}
  </button>
);
