import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Ruler, Wrench } from "lucide-react";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  title: string;
  category: string;
  location: string;
  sqft: string;
  workDone: string;
  images: ProjectImage[];
}

export const ProjectCarousel = ({
  title,
  category,
  location,
  sqft,
  workDone,
  images,
}: ProjectCarouselProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
          {category}
        </span>
        <h3 className="font-display font-bold text-xl text-foreground mb-4">
          {title}
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Ruler className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="text-sm">{sqft}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Wrench className="w-4 h-4 text-accent flex-shrink-0" />
            <span className="text-sm">{workDone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
