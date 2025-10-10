import { Users, Target, Film } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Vanshita Khare",
      role: "Ideation and Creative Direction",
      icon: Target,
    },
    {
      name: "Umar Chauhan",
      role: "Finance and Production",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About the Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto" />
          </div>
          
          {/* Bio */}
          <div className="space-y-6 mb-16 animate-fade-in animation-delay-200">
            <div className="flex items-start gap-4">
              <Film className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Parth Ubhadiya</span> is currently pursuing B.Tech in Computer Science at Ahmedabad University. He's a filmmaking enthusiast building{" "}
                  <span className="text-accent font-semibold">EkDrish</span>, a storytelling-driven brand that bridges advertising and cinema.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Passionate about editing, color grading, and storytelling, Parth believes in creating films that don't just promote — they connect. Every frame is crafted with intention, every story told with purpose.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div className="animate-fade-in animation-delay-400">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              The Team Behind EkDrish
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft hover-lift cinematic-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <member.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
