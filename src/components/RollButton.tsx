"use client";

import React from "react";

interface RollButtonProps {
  label: string;
  subLabel?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "dark" | "outline-dark";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
}

export const RollButton: React.FC<RollButtonProps> = ({
  label,
  subLabel,
  href,
  onClick,
  variant = "primary",
  className = "",
  icon,
  iconPosition = "right",
  target,
  rel,
}) => {
  const displaySubLabel = subLabel || label;

  const variantStyles = {
    primary:
      "bg-[#0c0c0c] text-[#f6f1e8] hover:bg-[#1a1a1a] border border-[#0c0c0c]",
    secondary:
      "bg-transparent text-[#0c0c0c] border border-[#0c0c0c]/25 hover:border-[#0c0c0c] hover:bg-[#0c0c0c]/5",
    accent:
      "bg-[#c68a4c] text-white hover:bg-[#b3783a] border border-[#c68a4c] shadow-sm",
    dark:
      "bg-[#f6f1e8] text-[#0c0c0c] hover:bg-white border border-[#f6f1e8]",
    "outline-dark":
      "bg-transparent text-[#f6f1e8] border border-[#f6f1e8]/25 hover:border-[#f6f1e8] hover:bg-[#f6f1e8]/8",
  };

  const content = (
    <div className="pl-roll-track w-full h-[44px]">
      {/* Top state */}
      <span className="pl-roll-label w-full justify-center h-[44px] px-2 sm:px-6 text-[11px] sm:text-[13px] tracking-[0.03em] sm:tracking-[0.08em] uppercase font-mono font-medium">
        {icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
        <span>{label}</span>
        {icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
      </span>
      {/* Rolled state */}
      <span className="pl-roll-label w-full justify-center h-[44px] px-2 sm:px-6 text-[11px] sm:text-[13px] tracking-[0.03em] sm:tracking-[0.08em] uppercase font-mono font-medium opacity-95">
        {icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
        <span>{displaySubLabel}</span>
        {icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
      </span>
    </div>
  );

  const baseClasses = `pl-roll rounded-full transition-all duration-300 select-none ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
};
