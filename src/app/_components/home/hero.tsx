import { Button } from "@/components/ui/button";
import { Sparkles, Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">
              Premium Extensions Marketplace
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-foreground via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Supercharge
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Your Browser
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover handcrafted, premium browser extensions that transform your
            digital experience. No store restrictions, direct from developers
            who care about quality.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-6 h-6 mr-3" />
            Explore Extensions
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}
