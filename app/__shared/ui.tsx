import { motion } from "framer-motion";
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
      className={className ? `${className}` : `px-6 py-3 rounded-lg font-medium transition-colors ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export function Modal({ children, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
  initial={{ scale: 0.95, opacity: 0, x: -30 }}
  animate={{ scale: 1, opacity: 1, x: 0 }}
  exit={{ scale: 0.95, opacity: 0, x: -30 }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 12,
  }}
  onClick={(e) => e.stopPropagation()}
  className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full"
>
  {children}
</motion.div>
    </motion.div>
  );
}

