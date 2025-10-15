import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all your image assets
import addictionCover from "@/assets/IMG_9853.jpeg";
import americanPsychoCover from "@/assets/IMG_9808.jpeg";
import globalCollianceCover from "@/assets/IMG_9856.jpeg";
import theatreTrailer1Cover from "@/assets/IMG_9721 copy.jpeg";
import theatreTrailer2Cover from "@/assets/IMG_8655.jpeg";
import twoMenCover from "@/assets/IMG_6241.jpeg";
import vajoodCover from "@/assets/IMG_6238.jpeg";
import architectureShot from "@/assets/architecture-shot.jpg";
import vintageLamp from "@/assets/vintage-lamp.jpg";
import pixel3Cover from "@/assets/IMG_0095.jpg";
import pixel4Cover from "@/assets/H2A00995.jpg";
import pixel5Cover from "@/assets/H2A01071 (1).jpg";

/**
 * A reusable component for rendering an animated grid block.
 * It handles the image display, overlay, and fade-in animation.
 */
const GridBlock = ({ className, imageSrc }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageSrc && (
        <>
          {/* Dark overlay for better text contrast and blending */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={imageSrc}
            alt="Portfolio glimpse"
            // The key forces a re-render on image change, which re-triggers the CSS animation
            key={imageSrc}
            className="absolute inset-0 w-full h-full object-cover blur-sm animate-fade-in-slow"
          />
        </>
      )}
    </div>
  );
};

const Hero = () => {
  // Array of all available portfolio images
  const portfolioImages = [
    addictionCover, americanPsychoCover, globalCollianceCover, theatreTrailer1Cover,
    theatreTrailer2Cover, twoMenCover, vajoodCover, architectureShot, vintageLamp,
    pixel3Cover, pixel4Cover, pixel5Cover,
  ];

  // Configuration array defining the layout of the grid blocks
  const gridLayout = [
    { style: 'col-span-2 row-span-2', imageIndex: 0 },
    { style: 'col-start-5 col-span-2 row-span-2', imageIndex: 1 },
    { style: 'col-start-5 row-start-3 col-span-2 row-span-2', imageIndex: 2 },
    { style: 'col-start-1 row-start-4 col-span-1 row-span-2', imageIndex: 3 },
    { style: 'col-start-2 row-start-5 col-span-2 row-span-2', imageIndex: 4 },
    { style: 'col-start-4 row-start-5 col-span-1 row-span-2', imageIndex: 5 },
    { style: 'col-start-6 row-start-6 col-span-1 row-span-1', imageIndex: 6 },
    { style: 'col-start-3 row-start-2 col-span-1 row-span-1', imageIndex: 7 },
    { style: 'col-start-1 row-start-3 col-span-1 row-span-1', imageIndex: 8 },
    { style: 'col-start-6 row-start-5 col-span-1 row-span-1', imageIndex: 9 },
    { style: 'col-start-4 row-start-2 col-span-2 row-span-1', imageIndex: 10 },
    { style: 'col-start-2 row-start-3 col-span-2 row-span-1', imageIndex: 11 },
  ];

  const [gridImages, setGridImages] = useState<string[]>([]);

  useEffect(() => {
    // 1. Initialize the grid with a full set of random images (no empty blocks)
    const initialImages = Array(12).fill(null).map(() => 
      portfolioImages[Math.floor(Math.random() * portfolioImages.length)]
    );
    setGridImages(initialImages);

    // 2. Set up an interval to continuously update random images in the grid
    const interval = setInterval(() => {
      setGridImages(prevImages => {
        const newImages = [...prevImages];
        // Determine how many cells to change for a dynamic effect (1 or 2)
        const cellsToChange = Math.floor(Math.random() * 3) + 1; 

        for (let i = 0; i < cellsToChange; i++) {
          const randomCellIndex = Math.floor(Math.random() * 12);
          const currentImage = newImages[randomCellIndex];
          let newImage;

          // Ensure the new random image is different from the one it's replacing
          do {
            newImage = portfolioImages[Math.floor(Math.random() * portfolioImages.length)];
          } while (newImage === currentImage);

          newImages[randomCellIndex] = newImage;
        }
        return newImages;
      });
    }, 2000); // Change images every 2 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Faint background grid lines */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0">
        {Array(36).fill(0).map((_, i) => (
          <div key={i} className="border border-primary-foreground/10" />
        ))}
      </div>

      {/* Animated image grid, rendered using the layout configuration */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0">
        {gridLayout.map((block) => (
          <GridBlock
            key={block.imageIndex}
            className={block.style}
            imageSrc={gridImages[block.imageIndex]}
          />
        ))}
      </div>

      {/* Central content, with a higher z-index to ensure it's on top */}
      <div className="relative z-20 container mx-auto px-6 py-20">
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
              className="border-white/20 text-black hover:bg-white/10 hover:text-accent transition-all duration-300" 
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
              className="border-white/20 text-black hover:bg-white/10 hover:text-accent transition-all duration-300" 
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
