import { cn } from "@/lib/utils";

interface PulseLoaderProps {
  text?: string;
  className?: string;
}

export const PulseLoader = ({ text = "Analyzing trends...", className }: PulseLoaderProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      {/* Animated orbital loader */}
      <div className="relative w-24 h-24">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-violet-500/20" />
        
        {/* Spinning gradient ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500 animate-spin" />
        
        {/* Middle pulsing ring */}
        <div className="absolute inset-3 rounded-full bg-fuchsia-500/10 animate-pulse" />
        
        {/* Inner spinning ring */}
        <div 
          className="absolute inset-3 rounded-full border-4 border-transparent border-b-pink-500 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        />
        
        {/* Center core */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500 animate-pulse shadow-[0_0_30px_rgba(168,85,247,0.5)]" />
        
        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
            style={{
              top: "50%",
              left: "50%",
              animation: `orbit 2s linear infinite`,
              animationDelay: `${i * 0.66}s`,
              transform: `rotate(${i * 120}deg) translateX(40px)`,
            }}
          />
        ))}
      </div>
      
      {/* Loading text with shimmer */}
      <div className="relative">
        <p className="text-lg font-medium text-muted-foreground">{text}</p>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent -translate-x-full animate-shimmer" />
      </div>
      
      {/* Progress dots */}
      <div className="flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
            style={{
              animation: "bounce 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.16}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
