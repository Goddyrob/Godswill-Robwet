import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Pastor James Kimutai",
      role: "Church Administrator",
      content: "Godswill developed an excellent church management system for us. His attention to detail and understanding of our needs was impressive. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah Njeri",
      role: "School Principal",
      content: "The school portal system has transformed how we manage our students' information. Godswill's expertise and professionalism made the project a great success.",
      rating: 5,
    },
    {
      name: "John Mwangi",
      role: "Business Owner",
      content: "Our POS system has streamlined our retail operations significantly. Godswill delivered exactly what we needed, on time and within budget.",
      rating: 5,
    },
    {
      name: "Mary Wanjiku",
      role: "Real Estate Developer",
      content: "The Sukari Heights app has made property management so much easier. Godswill's mobile development skills are top-notch!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              Client <span className="text-primary">Testimonials</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              What my clients say about working with me
            </p>
          </div>

          <div className="relative">
            <Card className="bg-card/50 border-primary/50 backdrop-blur-sm animate-fade-in">
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary mb-6" />
                
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  {current.content}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>

                <div>
                  <p className="font-orbitron font-bold text-lg">{current.name}</p>
                  <p className="text-muted-foreground">{current.role}</p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-primary text-primary hover:bg-primary/10 transition-smooth"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-primary text-primary hover:bg-primary/10 transition-smooth"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
