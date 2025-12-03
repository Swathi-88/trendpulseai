import { InputHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, label = "Enter any keyword...", value, onChange, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value && String(value).length > 0;

    return (
      <div className="floating-input-wrapper relative w-full group">
        {/* Glow border effect */}
        <div 
          className={cn(
            "absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 opacity-0 blur-sm transition-all duration-300",
            isFocused && "opacity-70"
          )} 
        />
        
        {/* Input container */}
        <div className="relative bg-card rounded-xl border-2 border-border/50 transition-all duration-300 group-hover:border-violet-400/30">
          {/* Search icon */}
          <Search 
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300",
              isFocused ? "text-violet-500" : "text-muted-foreground"
            )} 
          />
          
          {/* Input */}
          <input
            ref={ref}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "w-full h-16 pl-12 pr-4 pt-5 pb-2 bg-transparent rounded-xl",
              "text-foreground text-lg font-medium",
              "placeholder:text-transparent",
              "focus:outline-none",
              "transition-all duration-300",
              className
            )}
            placeholder={label}
            {...props}
          />
          
          {/* Floating label */}
          <label
            className={cn(
              "absolute left-12 transition-all duration-300 pointer-events-none",
              "text-muted-foreground",
              isFocused || hasValue
                ? "top-2 text-xs font-medium text-violet-500"
                : "top-1/2 -translate-y-1/2 text-base"
            )}
          >
            {label}
          </label>
        </div>
        
        {/* Subtle animated underline */}
        <div 
          className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-full transition-all duration-500",
            isFocused ? "w-[calc(100%-2rem)]" : "w-0"
          )} 
        />
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";
