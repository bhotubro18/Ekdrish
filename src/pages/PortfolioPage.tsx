import Navigation from "@/components/Navigation";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { Clapperboard, Star } from "lucide-react";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Portfolio Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
          {/* Film strip pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 50px,
                hsl(var(--accent)) 50px,
                hsl(var(--accent)) 52px
              )`,
            }} />
          </div>

          {/* Spotlight effect */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-radial from-accent/20 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3 mb-6">
                <Clapperboard className="w-10 h-10 text-accent" />
                <Star className="w-6 h-6 text-accent animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="block text-white">PORTFOLIO</span>
                <span className="block text-accent italic">OF STORIES</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                A collection of narratives that connect, inspire, and leave a lasting impact
              </p>
            </div>
          </div>
        </section>

        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
