import { Building2, Trophy, Users, Zap, Target, Shield } from "lucide-react";

import serviceStadium from "@/assets/service-stadium.jpg";
import serviceTrack from "@/assets/service-track.jpg";
import serviceComplex from "@/assets/service-complex.jpg";
import serviceTennis from "@/assets/service-tennis.jpg";
import serviceAquatic from "@/assets/service-aquatic.jpg";
import serviceTurf from "@/assets/service-turf.jpg";

const services = [
  {
    icon: Building2,
    title: "Stadium Construction",
    description: "World-class stadiums designed for optimal spectator experience and athletic performance.",
    image: serviceStadium,
  },
  {
    icon: Trophy,
    title: "Athletic Tracks",
    description: "IAAF-certified running tracks with precision engineering for peak performance.",
    image: serviceTrack,
  },
  {
    icon: Users,
    title: "Sports Complexes",
    description: "Multi-purpose facilities that serve communities and foster athletic development.",
    image: serviceComplex,
  },
  {
    icon: Target,
    title: "Tennis & Court Sports",
    description: "Professional-grade courts for tennis, basketball, and multi-sport venues.",
    image: serviceTennis,
  },
  {
    icon: Zap,
    title: "Aquatic Centers",
    description: "Olympic-standard pools and aquatic facilities with advanced water systems.",
    image: serviceAquatic,
  },
  {
    icon: Shield,
    title: "Sports Turf Solutions",
    description: "Natural and synthetic turf installations for football, rugby, and field sports.",
    image: serviceTurf,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Building Champions' Arenas
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive sports infrastructure solutions from concept to completion, 
            engineered to inspire greatness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-stone-dark/80 to-stone-dark/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 min-h-[280px] flex flex-col justify-end">
                <div className="w-14 h-14 bg-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-gradient transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-xl text-accent-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-accent-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
