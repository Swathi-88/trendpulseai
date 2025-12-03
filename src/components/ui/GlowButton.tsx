import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, children, isLoading, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "glow-button group relative px-8 py-4 font-semibold text-white rounded-2xl",
          "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500",
          "transition-all duration-300 ease-out",
          "hover:scale-[1.02] hover:shadow-[0_0_50px_10px_rgba(168,85,247,0.35)]",
          "active:scale-[0.98]",
          "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100",
          "overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Animated gradient overlay */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
        
        {/* Content */}
        <span className="relative flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Analyzing...</span>
            </>
          ) : (
            children
          )}
        </span>
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
