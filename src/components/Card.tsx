import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white/60 backdrop-blur-md rounded-[20px] border border-white/40 p-5 shadow-lg ${className}`}
  >
    {children}
  </div>
);
