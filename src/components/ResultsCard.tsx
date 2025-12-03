import { TrendBadge } from "./TrendBadge";
import { TrendScore } from "./TrendScore";
import { KeywordChip } from "./KeywordChip";
import { TrendChart } from "./TrendChart";
import { GlassCard } from "./ui/GlassCard";
import { Clock, ShieldCheck, ChartSpline, Hash, Zap } from "lucide-react";

interface TrendData {
  trend: string;
  score: number;
  confidence: string;
  best_posting_time: string;
  related_keywords: string[];
  graph_data: number[];
}

interface ResultsCardProps {
  data: TrendData;
  keyword: string;
}

export const ResultsCard = ({ data, keyword }: ResultsCardProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-slide-up">
      <GlassCard className="p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2 font-medium flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-violet-500" />
            Analysis for
          </p>
          <h2 className="text-2xl font-bold text-foreground relative inline-block">
            "{keyword}"
            <span className="absolute -inset-2 bg-gradient-to-r from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 rounded-lg blur-lg -z-10" />
          </h2>
        </div>

        {/* Main Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
          <TrendScore score={data.score} trend={data.trend} />
          <div className="h-px sm:h-20 w-20 sm:w-px bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />
          <div className="flex flex-col items-center gap-3">
            <TrendBadge trend={data.trend} />
            <span className="text-sm text-muted-foreground">Trend Direction</span>
          </div>
        </div>

        {/* Chart */}
        <div className="mb-8 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-pink-500/5 backdrop-blur-sm rounded-xl p-4 border border-violet-500/20">
          <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
            <ChartSpline className="w-4 h-4 text-fuchsia-500" />
            Trend Over Time
          </h3>
          <TrendChart data={data.graph_data} trend={data.trend} />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="group flex items-center gap-3 p-4 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 rounded-xl border border-violet-500/20 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5 text-violet-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Confidence</p>
              <p className="text-sm font-semibold text-foreground">{data.confidence}</p>
            </div>
          </div>
          <div className="group flex items-center gap-3 p-4 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 rounded-xl border border-fuchsia-500/20 transition-all duration-300 hover:border-fuchsia-500/40 hover:shadow-[0_0_20px_rgba(217,70,239,0.15)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500/30 to-pink-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-5 h-5 text-fuchsia-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Best Posting Time</p>
              <p className="text-sm font-semibold text-foreground">{data.best_posting_time}</p>
            </div>
          </div>
        </div>

        {/* Related Keywords */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Hash className="w-4 h-4 text-pink-500" />
            Related Keywords
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.related_keywords.map((kw, index) => (
              <KeywordChip key={index} keyword={kw} />
            ))}
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
