"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "emergency";
  size?: "sm" | "md" | "lg";
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  form?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, loading, iconLeft, iconRight, className = "", children, disabled, onClick, type = "button", form }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#F1171E] focus:ring-offset-2";
    
    const variants = {
      primary: "bg-[#F1171E] text-white hover:bg-[#D61218] shadow-sm hover:shadow-md",
      secondary: "bg-[#133256] text-white hover:bg-[#0B1E34]",
      ghost: "bg-transparent text-[#133256] border border-[#133256] hover:bg-[#F4F8FB]",
      emergency: "bg-[#F1171E] text-white hover:bg-[#D61218] animate-pulse shadow-md"
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "min-h-[44px] px-6 text-base",
      lg: "min-h-[56px] px-8 text-lg"
    };

    const isDisabled = disabled || loading;
    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    const content = (
      <>
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!loading && iconLeft && <span className="mr-2 flex items-center">{iconLeft}</span>}
        {children}
        {!loading && iconRight && <span className="ml-2 flex items-center">{iconRight}</span>}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={combinedClasses}
        whileHover={isDisabled ? undefined : { scale: 1.02 }}
        whileTap={isDisabled ? undefined : { scale: 0.98 }}
        disabled={isDisabled}
        onClick={onClick}
        type={type}
        form={form}
      >
        {content}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
