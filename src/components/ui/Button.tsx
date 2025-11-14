import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all inline-block";
  
  const variants = {
    primary: "bg-primary-purple text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl",
    secondary: "border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white",
    ghost: "text-primary-purple hover:bg-primary-purple hover:bg-opacity-10"
  };
  
  const fullClassName = `${baseStyles} ${variants[variant]} ${className}`;
  
  if (to) {
    return <Link to={to} className={fullClassName}>{children}</Link>;
  }
  
  if (href) {
    return <a href={href} className={fullClassName}>{children}</a>;
  }
  
  return <button onClick={onClick} className={fullClassName}>{children}</button>;
}
