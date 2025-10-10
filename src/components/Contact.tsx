import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      primary: "ekdrish@gmail.com",
      //secondary: "ubhadiyaparth6@gmail.com",
      href: "mailto:ekdrish@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      primary: "+91 7862970989",
      href: "tel:+917862970989",
    },
    {
      icon: Instagram,
      label: "Instagram",
      //primary: "@bhotu.patell",
      primary: "@ekdrish",
      href: "https://instagram.com/bhotu.patell",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a story to tell? A brand to build? Let's connect and create something meaningful.
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto mt-6" />
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`animate-fade-in animation-delay-${(index + 1) * 200}`}
            >
              <div className="bg-card rounded-xl p-6 shadow-soft hover-lift cinematic-border text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  {item.label}
                </h3>
                <a
                  href={item.href}
                  className="text-foreground font-medium hover:text-accent transition-colors block"
                  target={item.label === "Instagram" ? "_blank" : undefined}
                  rel={item.label === "Instagram" ? "noopener noreferrer" : undefined}
                >
                  {item.primary}
                </a>
                {item.secondary && (
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.secondary}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in animation-delay-600">
          <Button
            size="lg"
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity shadow-soft"
            asChild
          >
            <a href="mailto:ekdrish@gmail.com">
              Start a Conversation
              <Mail className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>

        {/* Closing message */}
        <div className="mt-16 text-center animate-fade-in animation-delay-800">
          <p className="text-2xl font-light text-foreground italic">
            Let's create stories that stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
