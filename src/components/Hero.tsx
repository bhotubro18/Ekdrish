import { useEffect, useState } from "react";
import { ArrowDown, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import addictionCover from "@/assets/addiction-cover.avif";
import americanPsychoCover from "@/assets/american-psycho-cover.avif";
import globalCollianceCover from "@/assets/global-colliance-cover.avif";
import theatreTrailer1Cover from "@/assets/theatre-trailer1-cover.avif";
import theatreTrailer2Cover from "@/assets/theatre-trailer2-cover.avif";
import twoMenCover from "@/assets/two-men-cover.avif";
import vajoodCover from "@/assets/vajood-cover.avif";
import architectureShot from "@/assets/architecture-shot.jpg";
import vintageLamp from "@/assets/vintage-lamp.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Portfolio images for the grid
  const portfolioImages = [
    addictionCover,
    americanPsychoCover,
    globalCollianceCover,
    theatreTrailer1Cover,
    theatreTrailer2Cover,
    twoMenCover,
    vajoodCover,
    architectureShot,
    vintageLamp,

  ];

  // State for grid images - 12 cells with random images
  const [gridImages, setGridImages] = useState<(string | null)[]>([]);

  // Initialize and rotate images
  useEffect(() => {
    // Initialize with random images
    const initialImages = Array(12).fill(null).map(() => {
      if (Math.random() > 0.4) { // 60% chance to show image
        return portfolioImages[Math.floor(Math.random() * portfolioImages.length)];
      }
      return null;
    });
    setGridImages(initialImages);

    // Change random cells every 2 seconds
    const interval = setInterval(() => {
      setGridImages(prev => {
        const newImages = [...prev];
        // Change 2-3 random cells
        const cellsToChange = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < cellsToChange; i++) {
          const randomCell = Math.floor(Math.random() * 12);
          if (Math.random() > 0.3) {
            newImages[randomCell] = portfolioImages[Math.floor(Math.random() * portfolioImages.length)];
          } else {
            newImages[randomCell] = null;
          }
        }
        return newImages;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0">
        {Array(36).fill(0).map((_, i) => (
          <div key={i} className="border border-primary-foreground/10" />
        ))}
      </div>

      {/* Animated image blocks */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0 ">
        {/* Top left - small */}
        <div className="col-span-2 row-span-2 relative overflow-hidden">
          {gridImages[0] && (
            <img 
              src={gridImages[0]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        {/* Top right - medium */}
        <div className="col-start-5 col-span-2 row-span-2 relative overflow-hidden">
          {gridImages[1] && (
            <img 
              src={gridImages[1]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        {/* Middle right - small */}
        <div className="col-start-5 row-start-3 col-span-2 row-span-2 overflow-hidden">
          {gridImages[2] && (
            <img 
              src={gridImages[2]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>
        

        {/* Middle left - small */}
        <div className="col-start-1 row-start-4 col-span-1 row-span-2 relative overflow-hidden">
          {gridImages[3] && (
            <img 
              src={gridImages[3]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        {/* Bottom left - medium */}
        <div className="col-start-2 row-start-5 col-span-2 row-span-2 relative overflow-hidden">
          {gridImages[4] && (
            <img 
              src={gridImages[4]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        {/* Bottom center */}
        <div className="col-start-4 row-start-5 col-span-1 row-span-2 relative overflow-hidden">
          {gridImages[5] && (
            <img 
              src={gridImages[5]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        {/* Bottom right - small */}
        <div className="col-start-6 row-start-6 col-span-1 row-span-1 relative overflow-hidden">
          {gridImages[6] && (
            <img 
              src={gridImages[6]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        {/* Additional scattered blocks */}
        <div className="col-start-3 row-start-2 col-span-1 row-span-1 relative overflow-hidden">
          {gridImages[7] && (
            <img 
              src={gridImages[7]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        <div className="col-start-1 row-start-3 col-span-1 row-span-1 relative overflow-hidden">
          {gridImages[8] && (
            <img 
              src={gridImages[8]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        <div className="col-start-6 row-start-5 col-span-1 row-span-1 relative overflow-hidden">
          {gridImages[9] && (
            <img 
              src={gridImages[9]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        <div className="col-start-4 row-start-2 col-span-2 row-span-1 relative overflow-hidden">
          {gridImages[10] && (
            <img 
              src={gridImages[10]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>

        <div className="col-start-2 row-start-3 col-span-2 row-span-1 relative overflow-hidden">
          {gridImages[11] && (
            <img 
              src={gridImages[11]} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-60 blur-sm"
            />
          )}
        </div>
      </div>

      {/* Central content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center animate-fade-in">
          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-inter leading-none mb-6">
            <span className="block text-white font-bold">EVERY</span>
            <span className="block text-accent font-bold">PIXEL</span>
            <span className="block text-white font-bold">TELLS A</span>
            <span className="block text-accent italic">STORY.</span>
          </h1>

          {/* Subtitle */}
          <div className="mt-12 space-y-4">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              FILMMAKING ENTHUSIAST • EDITOR • STORYTELLER
            </p>
            <p className="text-2xl md:text-4xl text-white font-bold">
              Parth Ubhadiya
            </p>
            <p className="text-xl md:text-2xl text-white/80 font-light">
              Creator at <span className="text-accent font-semibold">EkDrish</span>
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4 justify-center pt-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-blue hover:bg-white/10 hover:text-accent transition-smooth" 
              asChild
            >
              <a href="https://instagram.com/bhotu.patell" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                @bhotu.patell
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-blue hover:bg-white/10 hover:text-accent transition-smooth" 
              asChild
            >
              <a href="https://instagram.com/ekdrish" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                @ekdrish
              </a>
            </Button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
