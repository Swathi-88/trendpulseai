import { useState } from "react";
import { ResultsCard } from "@/components/ResultsCard";
import { LoadingState } from "@/components/LoadingState";
import { GlowButton } from "@/components/ui/GlowButton";
import { FloatingInput } from "@/components/ui/FloatingInput";
import { Sparkles, Wand2, Stars, TrendingUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface TrendData {
  trend: string;
  score: number;
  confidence: string;
  best_posting_time: string;
  related_keywords: string[];
  graph_data: number[];
}

const Index = () => {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<TrendData | null>(null);
  const [searchedKeyword, setSearchedKeyword] = useState("");

  const handleAnalyze = async () => {
    if (!keyword.trim()) {
      toast({
        title: "Please enter a keyword",
        description: "Type any topic or keyword to analyze its trend.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResults(null);
    setSearchedKeyword(keyword.trim());

    try {
      const response = await fetch(
        "https://trendpulse-backend-vmr1.onrender.com/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ keyword: keyword.trim() }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to analyze trend");
      }

      const data: TrendData = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error analyzing trend:", error);
      toast({
        title: "Analysis failed",
        description: "Unable to analyze the trend. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAnalyze();
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 border border-violet-500/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-6 backdrop-blur-sm">
            <Wand2 className="w-4 h-4" />
            AI-Powered Trend Analysis
            <Stars className="w-4 h-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Trend
            </span>
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Pulse
            </span>
            <span className="bg-gradient-to-r from-foreground/70 via-foreground to-foreground bg-clip-text text-transparent">
              {" "}AI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Predict if any topic is{" "}
            <span className="text-emerald-500 font-semibold">Rising</span>,{" "}
            <span className="text-amber-500 font-semibold">Stable</span>, or{" "}
            <span className="text-rose-500 font-semibold">Declining</span>{" "}
            in seconds.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="flex flex-col gap-4">
            <FloatingInput
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={handleKeyPress}
              label="Enter any keyword..."
            />
            <GlowButton
              onClick={handleAnalyze}
              isLoading={isLoading}
              className="w-full sm:w-auto sm:self-center"
            >
              <Sparkles className="w-5 h-5" />
              Analyze Trend
            </GlowButton>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-8">
          {isLoading && <LoadingState />}
          {!isLoading && results && (
            <ResultsCard data={results} keyword={searchedKeyword} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border/30 backdrop-blur-sm">
        <p className="text-center text-sm text-muted-foreground">
          Built for <span className="font-semibold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Octopus Hackathon</span> by{" "}
          <span className="font-semibold text-foreground">Swathi</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
