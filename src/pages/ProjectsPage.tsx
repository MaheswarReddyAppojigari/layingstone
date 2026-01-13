import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { ProjectCarousel } from "@/components/ProjectCarousel";

// Import project images
import projectTrack from "@/assets/project-track.jpg";
import projectAquatic from "@/assets/project-aquatic.jpg";
import projectTennis from "@/assets/project-tennis.jpg";
import projectCricket from "@/assets/project-cricket.jpg";
import projectFootball from "@/assets/project-football.jpg";
import projectBasketball from "@/assets/project-basketball.jpg";
import projectBadminton from "@/assets/project-badminton.jpg";
import projectHockey from "@/assets/project-hockey.jpg";
import projectVelodrome from "@/assets/project-velodrome.jpg";
import projectGym from "@/assets/project-gym.jpg";
import projectsHeroBg from "@/assets/projects-hero-bg.jpg";

const projects = [
  {
    title: "National Athletics Stadium",
    category: "Stadium & Track",
    location: "Melbourne, Australia",
    sqft: "125,000 sq ft",
    workDone: "Complete stadium construction with IAAF-certified track, seating for 45,000, and athlete facilities",
    images: [
      { src: projectTrack, alt: "National Athletics Stadium track" },
    ],
  },
  {
    title: "Olympic Aquatic Center",
    category: "Aquatic Facility",
    location: "Tokyo, Japan",
    sqft: "85,000 sq ft",
    workDone: "Olympic-standard 50m pool, diving platforms, training pools, and spectator seating",
    images: [
      { src: projectAquatic, alt: "Olympic Aquatic Center pool" },
    ],
  },
  {
    title: "Grand Tennis Academy",
    category: "Tennis Complex",
    location: "Madrid, Spain",
    sqft: "65,000 sq ft",
    workDone: "12 professional tennis courts, center court arena, training facilities, and clubhouse",
    images: [
      { src: projectTennis, alt: "Grand Tennis Academy courts" },
    ],
  },
  {
    title: "International Cricket Stadium",
    category: "Cricket Stadium",
    location: "Mumbai, India",
    sqft: "180,000 sq ft",
    workDone: "ICC-standard cricket ground, 50,000 seating capacity, player facilities, and media center",
    images: [
      { src: projectCricket, alt: "International Cricket Stadium" },
    ],
  },
  {
    title: "Premier Football Arena",
    category: "Football Stadium",
    location: "Manchester, UK",
    sqft: "210,000 sq ft",
    workDone: "FIFA-certified pitch, 60,000 capacity stadium, VIP lounges, and training grounds",
    images: [
      { src: projectFootball, alt: "Premier Football Arena" },
    ],
  },
  {
    title: "Elite Basketball Complex",
    category: "Indoor Arena",
    location: "Chicago, USA",
    sqft: "45,000 sq ft",
    workDone: "NBA-standard court, 18,000 seating, practice facilities, and locker rooms",
    images: [
      { src: projectBasketball, alt: "Elite Basketball Complex" },
    ],
  },
  {
    title: "National Badminton Center",
    category: "Indoor Sports",
    location: "Kuala Lumpur, Malaysia",
    sqft: "38,000 sq ft",
    workDone: "8 BWF-certified courts, training center, athlete accommodation, and sports science lab",
    images: [
      { src: projectBadminton, alt: "National Badminton Center" },
    ],
  },
  {
    title: "Olympic Hockey Stadium",
    category: "Hockey Field",
    location: "Amsterdam, Netherlands",
    sqft: "92,000 sq ft",
    workDone: "FIH-certified synthetic turf, 15,000 seating, dugouts, and broadcasting facilities",
    images: [
      { src: projectHockey, alt: "Olympic Hockey Stadium" },
    ],
  },
  {
    title: "World Cycling Velodrome",
    category: "Velodrome",
    location: "Berlin, Germany",
    sqft: "55,000 sq ft",
    workDone: "UCI-certified wooden track, 6,000 seating, timing systems, and training zones",
    images: [
      { src: projectVelodrome, alt: "World Cycling Velodrome" },
    ],
  },
  {
    title: "Elite Training Gymnasium",
    category: "Training Facility",
    location: "Dubai, UAE",
    sqft: "28,000 sq ft",
    workDone: "State-of-the-art equipment, Olympic weightlifting platforms, recovery center, and physio rooms",
    images: [
      { src: projectGym, alt: "Elite Training Gymnasium" },
    ],
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
                Explore our landmark sports infrastructure projects from around the world. 
                Each project represents our commitment to excellence and innovation.
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
