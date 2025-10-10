import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import globalCollianceCover from "@/assets/global-colliance-cover.avif";
import vajoodCover from "@/assets/vajood-cover.avif";
import theatreTrailer1Cover from "@/assets/theatre-trailer1-cover.avif";
import theatreTrailer2Cover from "@/assets/theatre-trailer2-cover.avif";
import twoMenCover from "@/assets/two-men-cover.avif";
import addictionCover from "@/assets/addiction-cover.avif";
import americanPsychoCover from "@/assets/american-psycho-cover.avif";
import ingeniumCover from "@/assets/ingenium-cover.avif";


const Portfolio = () => {
  const [selectedVideos, setSelectedVideos] = useState<Record<number, number>>({});

  const projects = [
    {
      title: "Global Colliance Ad",
      description: "A 1:15 minute story-driven advertisement featuring unique match-cut transitions that seamlessly connect emotions with brand messaging.",
      role: "Director, Editor, Colorist",
      duration: "1:15",
      featured: true,
      coverImage: globalCollianceCover,
      videos: [
        { url: "https://www.instagram.com/reel/DOYW_uJiKcf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", label: "Main Ad", coverImage: globalCollianceCover }
      ],
    },
    {
      title: "Theatre Club - Ahmedabad University",
      description: "Cinematic trailers capturing the essence of storytelling and creativity within the university theatre community.",
      role: "Director, Editor",
      duration: "0:45",
      featured: false,
      coverImage: theatreTrailer1Cover,
      videos: [
        { url: "https://www.instagram.com/reel/DHbCfM-IIoK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", label: "Trailer 1", coverImage: theatreTrailer1Cover },
        { url: "https://www.instagram.com/reel/DHgNLjmvo3f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", label: "Trailer 2", coverImage: theatreTrailer2Cover }
      ],
    },
    {
      title: "VAJOOD",
      description: "A powerful short film exploring identity and existence through compelling visual storytelling.",
      role: "Director, Editor, Colorist",
      duration: "Short Film",
      featured: false,
      coverImage: vajoodCover,
      videos: [
        { url: "https://www.instagram.com/reel/DL5fg7AIBrM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", label: "Watch Film", coverImage: vajoodCover }
      ],
    },
    {
      title: "Inspired by American Psycho",
      description: "A dark psychological exploration inspired by the iconic film, showcasing intense character study and atmospheric cinematography.",
      role: "Director, Cinematographer, Editor",
      duration: "Short Film",
      featured: false,
      coverImage: americanPsychoCover,
      videos: [
        { url: "https://www.instagram.com/reel/DKXD7ZkSNQG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", label: "Watch Film", coverImage: americanPsychoCover }
      ],
    },
    {
      title: "Ingenium Fest Film",
      description: "A viral short film created for Ingenium fest that captured hearts and reached over 150,000 views.",
      role: "Director, Editor",
      duration: "Short Film",
      featured: true,
      coverImage: ingeniumCover, // <- Add this line
      videos: [
        { url: "https://www.instagram.com/reel/DJ4a7GEySMB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", label: "Watch Film", coverImage: undefined }
      ],
    },
    {
      title: "ADDICTION",
      description: "A thought-provoking narrative exploring the depths of human dependency and its consequences.",
      role: "Director, Editor, Colorist",
      duration: "Short Film",
      featured: false,
      coverImage: addictionCover,
      videos: [
        { url: "https://www.instagram.com/reel/DJemU3pRUND/?utm_source=ig_web_copy_link", label: "Watch Film", coverImage: addictionCover }
      ],
    },
    {
      title: "TWO MEN",
      description: "An intimate character study examining the dynamic between two individuals through visual storytelling.",
      role: "Director, Cinematographer, Editor",
      duration: "Short Film",
      featured: false,
      coverImage: twoMenCover,
      videos: [
        { url: "https://www.instagram.com/reel/DHaCHRdowGe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", label: "Watch Film", coverImage: twoMenCover }
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Selected Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each project is a story waiting to be told, a connection waiting to be made.
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mt-6" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const currentVideoIndex = selectedVideos[index] || 0;
            const currentVideo = project.videos[currentVideoIndex];
            const currentCoverImage = currentVideo.coverImage || project.coverImage;
            
            return (
              <div
                key={index}
                className={`group animate-fade-in animation-delay-${(index + 1) * 200} ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="bg-card rounded-xl overflow-hidden shadow-soft hover-lift cinematic-border">
                  {/* Video cover image */}
                  <div className="relative aspect-video overflow-hidden">
                    {currentCoverImage ? (
                      <>
                        <img 
                          src={currentCoverImage} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </>
                    )}
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-foreground font-semibold text-sm bg-background/80 px-3 py-1 rounded-full z-10">
                      {project.duration}
                    </span>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide z-10">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Video selector for projects with multiple videos */}
                    {project.videos.length > 1 && (
                      <div className="mb-4">
                        <Select
                          value={currentVideoIndex.toString()}
                          onValueChange={(value) => 
                            setSelectedVideos({ ...selectedVideos, [index]: parseInt(value) })
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select video" />
                          </SelectTrigger>
                          <SelectContent>
                            {project.videos.map((video, videoIndex) => (
                              <SelectItem key={videoIndex} value={videoIndex.toString()}>
                                {video.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-accent font-medium">
                        {project.role}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-accent transition-colors"
                        asChild
                      >
                        <a href={currentVideo.url} target="_blank" rel="noopener noreferrer">
                          Watch Film
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
