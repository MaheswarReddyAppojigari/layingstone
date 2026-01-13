import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/components/FloatingContactButtons";
import ctaBg from "@/assets/cta-bg.jpg";

export const CTA = () => {
  const handleStartConversation = () => {
    window.open(getWhatsAppUrl("Hello, I'd like to discuss a sports infrastructure project with Layingstone."), "_blank");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden rounded-3xl bg-accent-gradient p-10 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-stone-dark/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-dark/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-accent-foreground mb-6">
              Ready to Build Your Vision?
            </h2>
            <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your next sports infrastructure project. Our team of experts 
              is ready to help you create facilities that inspire athletic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="stone" size="xl" className="group" onClick={handleStartConversation}>
                Start a Conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
