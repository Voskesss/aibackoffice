import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export default function Card({ children, className = '', hover = true, gradient = false }: CardProps) {
  return (
    <div 
      className={`
        relative rounded-2xl p-6 md:p-8 backdrop-blur-sm
        ${gradient 
          ? 'bg-gradient-to-br from-white/80 to-white/60 border border-white/50' 
          : 'bg-white/90 border border-gray-100'
        }
        ${hover ? 'hover:shadow-2xl hover:-translate-y-1 transition-all duration-300' : 'shadow-lg'}
        ${className}
      `}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/5 via-transparent to-primary-blue/5 rounded-2xl pointer-events-none"></div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
