import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-gradient"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
              <p className="text-accent text-lg font-medium tracking-wider uppercase">
                Welcome to my portfolio
              </p>

              <div className="mb-2">
                <h1 className="text-3xl md:text-4xl font-medium text-muted-foreground mb-1">
                  Hi, I'm
                </h1>
                <h2 className="text-5xl md:text-7xl font-orbitron font-extrabold mb-4 text-primary drop-shadow-lg">
                  Godswill Robwet
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  I build beautiful, reliable web & mobile experiences that solve real problems.
                </p>
              </div>

              <p className="text-lg md:text-xl text-foreground font-semibold mb-8">
                Based in Nakuru, Kenya — Frontend & Backend Software Developer
              </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-smooth group px-8 py-6 text-lg font-semibold"
            >
              Hire Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              className="border-primary text-primary hover:bg-primary/10 transition-smooth px-8 py-6 text-lg font-semibold"
            >
              View My Work
              <Download className="ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-card/50 border border-border hover:border-primary transition-smooth"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary font-orbitron">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
