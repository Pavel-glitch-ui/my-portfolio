import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Card({ children, className = "", gradient = false }: CardProps) {
  const baseClasses = "glass-card p-6";
  const gradientClasses = gradient
    ? "bg-gradient-to-br from-slate-50 to-white border border-slate-200"
    : "";
  
  return (
    <div className={`${baseClasses} ${gradientClasses} ${className}`}>
      {children}
    </div>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = "primary", 
  className = "",
  onClick 
}: ButtonProps) {
  const variants = {
    primary: "bg-slate-900 hover:bg-slate-800 text-white",
    secondary: "bg-white border border-slate-300 hover:border-slate-400 text-slate-900"
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

