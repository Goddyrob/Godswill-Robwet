import { Code2, Database, Smartphone, Palette } from "lucide-react";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const About = () => {
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const wrap = imgWrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    let width = wrap.clientWidth;
    let height = wrap.clientHeight;
    let rect = wrap.getBoundingClientRect();

    const onResize = () => {
      rect = wrap.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
    };

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / width - 0.5) * 2; // -1 .. 1
      const py = (y / height - 0.5) * 2; // -1 .. 1
      const rotateX = -py * 10; // tilt range
      const rotateY = px * 10;
      const scale = 1.06;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        wrap.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
        img.style.transform = `translateZ(30px)`;
      });
    };

    const handleLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        wrap.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
        img.style.transform = `translateZ(0)`;
      });
    };

    window.addEventListener("resize", onResize);
    wrap.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("resize", onResize);
      wrap.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const skills = [
    { name: "C++", level: 90, icon: Code2 },
    { name: "React & React Native", level: 95, icon: Smartphone },
    { name: "Firebase & Supabase", level: 85, icon: Database },
    { name: "Python & Java", level: 88, icon: Code2 },
    { name: "Graphic Design", level: 80, icon: Palette },
  ];

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>

  <div className="container mx-auto px-0 sm:px-4 relative z-10">
  <div className="max-w-full sm:max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative group animate-fade-in">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-smooth"></div>
              <div className="relative bg-card rounded-2xl p-8 border border-border overflow-hidden">
                <div
                  ref={imgWrapRef}
                  className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center profile-orbit-bg profile-neon-outline profile-3d"
                >
                  <img
                    ref={imgRef}
                    src="/profile.jpg"
                    alt="Profile"
                    className="object-cover w-full h-full rounded-xl border border-border profile-bounce-img profile-animate profile-vibrant"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm{" "}
                <span className="text-primary font-semibold">Godswill Robwet</span>
                — a passionate software developer and tech educator based in Nakuru,
                Kenya. I build full-stack applications and teach developers practical
                skills to ship production-ready software that makes an impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From building comprehensive inventory systems to developing mobile
                applications, I bring ideas to life with clean code and modern
                technologies. I also enjoy teaching programming and mathematics,
                helping others unlock their potential in the tech world.
              </p>

              {/* CTA Row: View my work / View my Resume */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-6">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("portfolio");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-block px-5 py-3 rounded-md bg-transparent border border-border text-foreground hover:bg-muted transition-smooth font-medium text-center"
                >
                  View my work
                </a>

                {/* Open resume in an in-page dialog */}
                <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
                  <DialogTrigger asChild>
                    <Button className="mt-3 sm:mt-0 transform transition-all duration-300 hover:-translate-y-1">
                      View my Resume
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl w-[95vw] h-[85vh] p-0 overflow-hidden">
                    <DialogHeader>
                      <DialogTitle>Your Resume</DialogTitle>
                      <DialogDescription>Preview of the resume — close when finished.</DialogDescription>
                    </DialogHeader>
                    <div className="w-full h-[calc(100%-4rem)]">
                      <iframe
                        src="/resume.pdf"
                        title="Resume"
                        className="w-full h-full"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Skills */}
              <div className="space-y-4 pt-6">
                <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                  Technical Skills
                </h3>
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-primary transition-all duration-1000 ease-out skill-fill`}
                          style={{
                            transform: `scaleX(1)`,
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
