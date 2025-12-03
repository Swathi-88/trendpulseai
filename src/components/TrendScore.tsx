import { cn } from "@/lib/utils";

interface TrendScoreProps {
  score: number;
  trend: string;
}

export const TrendScore = ({ score, trend }: TrendScoreProps) => {
  const trendLower = trend.toLowerCase();
  
  const getGradient = () => {
    if (trendLower === "rising") return "from-emerald-400 via-green-400 to-teal-400";
    if (trendLower === "declining") return "from-rose-400 via-red-400 to-orange-400";
    return "from-amber-400 via-yellow-400 to-orange-300";
  };

  const getGlowColor = () => {
    if (trendLower === "rising") return "rgba(16, 185, 129, 0.5)";
    if (trendLower === "declining") return "rgba(244, 63, 94, 0.5)";
    return "rgba(245, 158, 11, 0.5)";
  };

  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-muted/20"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{
              filter: `drop-shadow(0 0 8px ${getGlowColor()})`,
            }}
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={trendLower === "rising" ? "#10b981" : trendLower === "declining" ? "#f43f5e" : "#f59e0b"} />
              <stop offset="100%" stopColor={trendLower === "rising" ? "#14b8a6" : trendLower === "declining" ? "#fb923c" : "#fbbf24"} />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={cn(
              "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
              getGradient()
            )}
            style={{
              textShadow: `0 0 30px ${getGlowColor()}`,
            }}
          >
            {score}
          </span>
        </div>
      </div>
      
      <span className="text-sm text-muted-foreground font-medium">Trend Score</span>
    </div>
  );
};
