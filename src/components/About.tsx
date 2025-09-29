import { Code2, Database, Smartphone, Palette } from "lucide-react";

const About = () => {
  const skills = [
    { name: "C++", level: 90, icon: Code2 },
    { name: "React & React Native", level: 95, icon: Smartphone },
    { name: "Firebase & Supabase", level: 85, icon: Database },
    { name: "Python & Java", level: 88, icon: Code2 },
    { name: "Graphic Design", level: 80, icon: Palette },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
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
                <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <img 
                    src="/profile.jpg" 
                    alt="Profile" 
                    className="object-cover w-full h-full rounded-xl border border-border profile-bounce-img" 
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-primary font-semibold">Godswill Robwet</span>, a passionate software developer and tech educator based in Kenya. With expertise in full-stack development, I specialize in creating innovative solutions that transform businesses and empower communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From building comprehensive inventory systems to developing mobile applications, I bring ideas to life with clean code and modern technologies. I also enjoy teaching programming and mathematics, helping others unlock their potential in the tech world.
              </p>

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
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: `slide-in 1s ease-out ${index * 0.1}s both`,
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
