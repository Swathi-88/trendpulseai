import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden",
        "bg-card/80 backdrop-blur-xl",
        "rounded-2xl border border-violet-500/20",
        "shadow-[0_8px_32px_rgba(168,85,247,0.1)]",
        "transition-all duration-500 ease-out",
        hover && [
          "hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]",
          "hover:border-violet-500/30",
          "hover:-translate-y-1"
        ],
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-pink-500/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
      
      {/* Corner accent */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};
