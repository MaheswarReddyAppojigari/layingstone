import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectPoint from "@/assets/project-11point.jpg";

import projectNational from '@/assets/project-national.webp'
import projectAgara from "@/assets/project-agara.jpg"
const projects = [
  {
    image: projectAgara,
    title: "GoRally Pickleball Agara",
    location: "HSR Layout, Bengaluru",
    category: "7 indoor pickle ball courts",
  },
  {
    image: projectNational,
    title: "National Hill View Public School",
    location: "Rajarajeshwari Nagar, Bengaluru",
    category: "BasketBall Court",
  },
  {
    image: projectPoint,
    title: "11 Point Club",
    location: "Kadubeesanahalli,Bengaluru",
    category: "16 Pickle Courts + Complex",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Featured Projects
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3">
              Landmark Achievements
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              to="/projects"
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-dark via-stone-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-xl text-accent-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-accent-foreground/70 text-sm">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
