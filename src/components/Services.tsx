import { Code, Smartphone, ShoppingCart, BookOpen, Lightbulb, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with React, TypeScript, and modern frameworks for optimal performance and user experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native, delivering seamless experiences on iOS and Android.",
    },
    {
      icon: ShoppingCart,
      title: "Inventory & Sales Systems",
      description: "Complete business management solutions including POS systems, inventory tracking, and sales analytics.",
    },
    {
      icon: BookOpen,
      title: "Academic Tutoring",
      description: "Expert tutoring in Programming (C++, Python, Java), Mathematics, and Computer Science fundamentals.",
    },
    {
      icon: Lightbulb,
      title: "IT Consultation",
      description: "Strategic technology consulting for churches, schools, and businesses to optimize their digital infrastructure.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional design services including posters, banners, logos, and marketing materials that captivate audiences.",
    },
    {
      icon: BookOpen,
      title: "HELB & Cyber Support",
      description: (
        <>
          Assistance with all HELB and cyber services for students. Join the WhatsApp groups for support:<br />
          <a href="https://chat.whatsapp.com/ITw0cGRAyBO5DcbbypLMV2?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="text-primary underline block mt-2">Continuing Students Group</a>
          <a href="https://chat.whatsapp.com/IUQEVTbAYczCIGabrPDxcU?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="text-primary underline block mt-1">First Years Group</a>
        </>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              My <span className="text-primary">Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tech solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card/50 border-border hover:border-primary transition-smooth cursor-pointer animate-fade-in backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-orbitron group-hover:text-primary transition-smooth">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
