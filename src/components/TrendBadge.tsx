import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendBadgeProps {
  trend: string;
}

export const TrendBadge = ({ trend }: TrendBadgeProps) => {
  const trendLower = trend.toLowerCase();
  
  const config = {
    rising: {
      icon: TrendingUp,
      label: "Rising",
      className: "bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/30",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
    stable: {
      icon: Minus,
      label: "Stable",
      className: "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30",
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
    declining: {
      icon: TrendingDown,
      label: "Declining",
      className: "bg-gradient-to-r from-rose-500/20 to-red-500/20 text-rose-400 border-rose-500/30",
      glowColor: "rgba(244, 63, 94, 0.4)",
    },
  };

  const currentConfig = config[trendLower as keyof typeof config] || config.stable;
  const Icon = currentConfig.icon;

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border",
        "backdrop-blur-sm transition-all duration-300",
        "hover:scale-105",
        currentConfig.className
      )}
      style={{
        boxShadow: `0 0 20px ${currentConfig.glowColor}`,
      }}
    >
      <Icon className="w-4 h-4 animate-pulse" />
      <span className="relative overflow-hidden">
        {currentConfig.label}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      </span>
    </div>
  );
};
