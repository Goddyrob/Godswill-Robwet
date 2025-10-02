import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "BELIOT Sawmill System",
      category: "Inventory Management",
      description: "Comprehensive sawmill inventory and sales tracking system with real-time analytics.",
      tech: ["React", "Firebase", "TypeScript"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Sukari Heights App",
      category: "Mobile Application",
      description: "Property management mobile app for residents and administrators.",
      tech: ["React Native", "Firebase", "Node.js"],
      gradient: "from-secondary to-accent",
    },
    {
      title: "Campaign Posters",
      category: "Graphic Design",
      description: "Professional campaign materials and marketing collateral for political events.",
      tech: ["Photoshop", "Illustrator", "InDesign"],
      gradient: "from-accent to-primary",
    },
    {
      title: "POS Systems",
      category: "Business Solutions",
      description: "Point of sale systems for retail businesses with inventory integration.",
      tech: ["React", "Supabase", "TailwindCSS"],
      gradient: "from-primary to-accent",
    },
    {
      title: "Church Management System",
      category: "Web Application",
      description: "Complete church administration platform with member management and events.",
      tech: ["React", "Firebase", "Material-UI"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "School Portal",
      category: "Educational Platform",
      description: "Student information system with grade management and parent communication.",
      tech: ["React", "PostgreSQL", "Express"],
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my recent projects and creative work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group bg-card/50 border-border hover:border-primary transition-smooth overflow-hidden cursor-pointer backdrop-blur-sm transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl proj-anim-${index % 6}`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="proj-flip-card">
                  <div className="proj-flip-inner">
                    <div className="proj-front">
                      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-smooth flex items-center justify-center">
                          <div className="text-6xl font-orbitron font-bold text-foreground/20 group-hover:text-foreground/40 transition-smooth">
                            {project.title.split(" ")[0]}
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="opacity-0 group-hover:opacity-100 transition-smooth"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="opacity-0 group-hover:opacity-100 transition-smooth"
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-orbitron font-bold mb-2 group-hover:text-primary transition-smooth">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs px-3 py-1 rounded-full bg-muted text-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </div>

                    <div className="proj-back p-6 flex flex-col items-center justify-center">
                      <h4 className="text-lg font-bold mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-muted text-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 text-center">Want to see this project live or check the repo? Click below.</p>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline">Live</Button>
                        <Button size="sm">Repository</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
