import { InlineWidget } from "react-calendly";

const Scheduler = () => {
  return (
    <section id="schedule" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book a Time Slot
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a time that works for you. I'm looking forward to our conversation!
            </p>
            <div className="w-20 h-1 bg-gradient-accent mx-auto mt-6" />
          </div>
          
          <div className="cinematic-border rounded-xl overflow-hidden shadow-soft">
            <InlineWidget url="https://calendly.com/ekdrish/30min" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduler;
