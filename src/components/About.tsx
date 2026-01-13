import { CheckCircle2 } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const features = [
  "10+ years of specialized sports construction experience",
  "ISO 9001 certified quality management systems",
  "IAAF, FIFA, and World Athletics approved facilities",
  "Sustainable and eco-friendly construction practices",
  "Dedicated project management from concept to completion",
  "Great network of engineering and design partners",
];

const stats = [
  
  { value: "98%", label: "On-Time Completion Rate" },
  { value: "100%", label: "Client Satisfaction" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={aboutBg}
          alt="Sports construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-dark via-stone-dark/95 to-stone-dark/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why Choose Layingstone
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-accent-foreground mt-3 mb-6">
              Building Excellence, Stone by Stone
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 leading-relaxed">
              For over a decade, Layingstone has been the trusted partner for 
              sports organizations, governments, and institutions seeking world-class 
              athletic infrastructure. Our commitment to quality, innovation, and 
              sustainability sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-accent-foreground/80 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elevated">
            <h3 className="font-display font-bold text-2xl text-foreground mb-8">
              Our Track Record Speaks
            </h3>
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-display font-bold text-4xl text-accent">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                  {index < stats.length - 1 && (
                    <div className="mt-6 h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
