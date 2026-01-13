import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { ProjectCarousel } from "@/components/ProjectCarousel";

// Import project images
import projectLoco from "@/assets/project-loco.webp";
import projectSocial from "@/assets/project-social.webp";
import projectJss from "@/assets/project-jss.jpg";
import projectSport from "@/assets/project-sporthood.webp";
import projectNational2 from "@/assets/project-national2.webp";
import projectCool from "@/assets/project-coolulu.webp";
import projectAgara from "@/assets/project-agara.jpg";
import projectUnorthodox from "@/assets/project-unorthodox.webp";
import projectNational from "@/assets/project-national.webp";
import projectPoint from "@/assets/project-11point.jpg";
import projectSriram from "@/assets/project-sriram.jpg";
import projectsHeroBg from "@/assets/projects-hero-bg.jpg";
import projectGorally from "@/assets/project-gorally.webp";
const projects = [
  {
    title: "GoRally Pickleball Agara",
    category: "Pickle Ball Court",
    location: "HSR Layout, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "Complete indoor stadium construction with 7 indoor pickle ball courts along with seating",
    images: [{ src: projectAgara, alt: "National Athletics Stadium track" }],
  },
  {
    title: "National Hill View Public School",
    category: "BasketBall court",
    location: "Rajarajeshwari Nagar, Bengaluru",
    sqft: "6,500 sq ft",
    workDone: "NBA standard BasketBall Court ",
    images: [{ src: projectNational, alt: "Olympic Aquatic Center pool" }],
  },
  {
    title: "11 Point Club",
    category: "PickleBall Complex",
    location: "Kadubeesanahalli, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "16 professional pickleBall courts, center court arena, training facilities, and cafe(Complete TurnKey)",
    images: [{ src: projectPoint, alt: "Grand Tennis Academy courts" }],
  },
  {
    title: "Shriram Pristine Estates",
    category: "BasketBall Court and Tennis Court",
    location: "Doddaballapura Main Rd, Bengaluru",
    sqft: "6,500 sq ft",
    workDone: "NBA Standard BasketBall Court and a Lawn Tennis court",
    images: [{ src: projectSriram, alt: "International Cricket Stadium" }],
  },
  {
    title: "Unorthodox sports arena",
    category: "Cricket  Football PickleBall ",
    location: "Halanayakanahalli, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "Built 4 Cricket nets ,a 7A side football court and 3 semi indoor pickleball courts",
    images: [{ src: projectUnorthodox, alt: "Premier Football Arena" }],
  },
  {
    title: "GoRally Pickleball HSR",
    category: "Pickle Ball",
    location: "HSR Extension, VGP Layout, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "Built 3 Pickleball Courts with resting facilities and training grounds",
    images: [{ src: projectGorally, alt: "Elite Basketball Complex" }],
  },
  {
    title: "Coolulu",
    category: "Pickle Ball",
    location: "Koramangala, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "Built 4 Pickleball Courts with resting facilities and training grounds",
    images: [{ src: projectCool, alt: "National Badminton Center" }],
  },
  {
    title: "National Hill View Public School",
    category: "Complete Sports Facility",
    location: "Rajarajeshwari Nagar, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "Built a 7A Football Court,volleyball Court,Throwball Court and 4 Cricket Nets",
    images: [{ src: projectNational2, alt: "Olympic Hockey Stadium" }],
  },
  {
    title: "Sporthood Badminton Center",
    category: "Badminton",
    location: "Doddanekkundi, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "Built 3 International Standard Roof Top Badminton Courts along seating facility",
    images: [{ src: projectSport, alt: "World Cycling Velodrome" }],
  },
  {
    title: "JSS Public School",
    category: "Cricket",
    location: "HSR Layout, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "State-of-the-art equipment, Olympic weightlifting platforms, recovery center, and physio rooms",
    images: [{ src: projectJss, alt: "Elite Training Gymnasium" }],
  },
  {
    title: "Social Grid",
    category: "Pickle Ball",
    location: "Whitefield, Bengaluru",
    sqft: "6,500 sq ft",
    workDone: "Built 9 Pickle Ball Courts with State-of-the-art equipment",
    images: [{ src: projectSocial, alt: "Elite Training Gymnasium" }],
  },
  {
    title: "Loco Bear",
    category: "GoKarting and Indoor",
    location: "Koramangala, Bengaluru",
    sqft: "6,500 sq ft",
    workDone:
      "Complete Setup of indoor Arena and made GoKarting along with complete safety",
    images: [{ src: projectLoco, alt: "Elite Training Gymnasium" }],
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${projectsHeroBg})` }}
          />
          <div className="absolute inset-0 bg-primary/80" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Portfolio
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-foreground mt-3 mb-6">
                Featured Projects
              </h1>
              <p className="text-accent-foreground/80 text-lg">
                Explore our landmark sports infrastructure projects from around
                the world. Each project represents our commitment to excellence
                and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCarousel
                  key={project.title}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  sqft={project.sqft}
                  workDone={project.workDone}
                  images={project.images}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
};

export default ProjectsPage;
