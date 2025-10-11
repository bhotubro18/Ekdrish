import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MessageCircle, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Contact Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/20 via-background to-primary/10">
          {/* Radial gradient background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-accent/20 via-transparent to-transparent" />
          </div>

          {/* Animated circles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent/20 rounded-full animate-ping" />
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border-2 border-primary/20 rounded-full animate-pulse" />
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20 text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3 mb-6">
                <MessageCircle className="w-10 h-10 text-accent" />
                <Send className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                <span className="block text-foreground">LET'S</span>
                <span className="block text-accent">START A</span>
                <span className="block text-foreground italic">CONVERSATION</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Every great project begins with a simple message. Let's create something extraordinary together.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
