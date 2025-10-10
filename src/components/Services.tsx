import { Pen, Video, Palette, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Pen,
      title: "Storytelling & Scriptwriting",
      description: "Crafting emotionally resonant narratives that connect with your audience on a deeper level.",
    },
    {
      icon: Video,
      title: "Production & Cinematography",
      description: "Visual storytelling through carefully composed shots and intentional camera movements.",
    },
    {
      icon: Palette,
      title: "Editing & Color Grading",
      description: "Shaping the final emotion and tone through precise editing and cinematic color work.",
    },
    {
      icon: Sparkles,
      title: "Brand Story Films",
      description: "Connecting brands with meaning through narrative-driven visuals that stay with people.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-2xl text-accent font-light mb-6">
            We don't market. We tell stories.
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-fade-in animation-delay-${(index + 1) * 100}`}
            >
              <div className="bg-card rounded-xl p-8 h-full shadow-soft hover-lift cinematic-border group">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-in animation-delay-500">
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            "Every frame is deliberate. Every story is meaningful. We create films that don't just promote — they connect."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
