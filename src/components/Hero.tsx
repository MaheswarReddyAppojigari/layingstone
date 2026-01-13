import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-stadium-video.mp4";
import { getWhatsAppUrl } from "@/components/FloatingContactButtons";

export const Hero = () => {
  const handleStartProject = () => {
    window.open(getWhatsAppUrl("Hello, I'd like to start a new sports infrastructure project."), "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Sports Infrastructure Specialists
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-accent-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Building the Future of{" "}
            <span className="text-gradient-accent">Athletic Excellence</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-xl text-accent-foreground/80 max-w-2xl mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            From world-class stadiums to community sports facilities, we lay the foundation 
            for athletic achievement. Trusted by organizations worldwide.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" onClick={handleStartProject}>
              Start Your Project
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-accent-foreground/20 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { value: "150+", label: "Projects Completed" },
              { value: "25+", label: "Years Experience" },
              { value: "40+", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl sm:text-4xl text-accent-foreground">
                  {stat.value}
                </div>
                <div className="text-accent-foreground/60 text-sm sm:text-base mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
