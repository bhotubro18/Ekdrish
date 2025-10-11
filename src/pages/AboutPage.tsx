import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Film, Sparkles } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* About Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6">
                <Film className="w-8 h-8 text-accent" />
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="block text-foreground">THE</span>
                <span className="block text-accent">STORY</span>
                <span className="block text-foreground">BEHIND</span>
                <span className="block text-accent italic">THE LENS</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Where passion meets purpose, and every frame tells a deeper story
              </p>
            </div>
          </div>
        </section>

        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
