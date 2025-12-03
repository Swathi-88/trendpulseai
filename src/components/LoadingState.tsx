import { PulseLoader } from "./ui/PulseLoader";

export const LoadingState = () => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-up">
      <div className="bg-card/60 backdrop-blur-xl rounded-2xl border border-border/50 p-12 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <PulseLoader text="Analyzing trends with AI..." />
      </div>
    </div>
  );
};
