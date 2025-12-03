import { cn } from "@/lib/utils";

interface KeywordChipProps {
  keyword: string;
}

export const KeywordChip = ({ keyword }: KeywordChipProps) => {
  return (
    <span
      className={cn(
        "group relative inline-flex items-center px-4 py-2 rounded-full overflow-hidden",
        "bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10",
        "border border-violet-500/20",
        "text-sm font-medium text-foreground",
        "transition-all duration-300 ease-out cursor-default",
        "hover:from-violet-500/20 hover:via-fuchsia-500/20 hover:to-pink-500/20",
        "hover:border-violet-500/40",
        "hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
        "hover:scale-105"
      )}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
      <span className="relative flex items-center gap-1">
        <span className="text-fuchsia-500">#</span>
        {keyword}
      </span>
    </span>
  );
};
