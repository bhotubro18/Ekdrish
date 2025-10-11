import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { Video, Palette, Sparkles } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Services Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/20">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            <Video className="absolute top-20 left-20 w-12 h-12 text-accent/20 animate-bounce" />
            <Palette className="absolute top-40 right-32 w-16 h-16 text-primary/20 animate-pulse" />
            <Sparkles className="absolute bottom-32 left-1/3 w-10 h-10 text-accent/30 animate-bounce animation-delay-400" />
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20 text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="block text-foreground">CRAFT</span>
                <span className="block text-accent">&</span>
                <span className="block text-foreground italic">STORYTELLING</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                We don't just create content. We build experiences that resonate.
              </p>
            </div>
          </div>
        </section>

        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
