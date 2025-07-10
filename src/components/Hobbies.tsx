import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const hobbies = [
  {
    title: "3D Modeling & Design",
    description: "Creating immersive 3D experiences and visualizations using Blender, Fusion 360, and Maya. From architectural visualization to product design prototypes.",
    icon: "/images/icons/🎨 Artist Palette (Art, Painting, Colors).png",
    category: "Creative Design",
    skills: ["Blender", "Fusion 360", "Maya", "3ds Max", "V-Ray"],
    status: "Learning",
    projects: ["Architectural Visualization", "Product Prototypes", "Character Modeling"]
  },
  {
    title: "IoT Development",
    description: "Building smart devices and connected systems using Arduino, Raspberry Pi, and various sensors. Creating automation solutions and home IoT projects.",
    icon: "/images/icons/🔌 Electric Plug (Power, Electricity, Socket).png",
    category: "Hardware & Electronics",
    skills: ["Arduino", "Raspberry Pi", "ESP32", "MQTT", "Node.js"],
    status: "Active",
    projects: ["Smart Home Automation", "Weather Station", "Plant Monitoring System"]
  },
  {
    title: "UI/UX Design",
    description: "Designing beautiful and intuitive user interfaces using modern design tools. Creating wireframes, prototypes, and user experience flows.",
    icon: "/images/icons/🎯 Direct Hit (Target, Score, Arrow).png",
    category: "Design & Prototyping",
    skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    status: "Active",
    projects: ["Mobile App UI", "Web Dashboard", "Brand Identity"]
  }
];

const hobbySkills = [
  { name: "3D Modeling", level: 85, category: "3D Design" },
  { name: "Arduino Programming", level: 75, category: "IoT" },
  { name: "UI Prototyping", level: 80, category: "UI/UX" },
  { name: "Circuit Design", level: 70, category: "IoT" },
  { name: "User Research", level: 75, category: "UI/UX" },
  { name: "Rendering", level: 90, category: "3D Design" }
];

const Hobbies = () => {
  return (
    <section className="py-20 bg-background" id="hobbies">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring creativity through 3D design, IoT development, and UI/UX design
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] relative">
              {/* Status Badge - Top Right Corner */}
              <Badge 
                className={`absolute top-4 right-4 z-10 inline-block w-fit ${
                  hobby.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                  hobby.status === 'Learning' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                  'bg-purple-500/20 text-purple-400 border-purple-500/30'
                }`}
              >
                {hobby.status}
              </Badge>
              
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3 flex justify-center">
                  {hobby.icon.startsWith('/') ? (
                    <img 
                      src={hobby.icon} 
                      alt={hobby.title}
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <span className="text-5xl">{hobby.icon}</span>
                  )}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {hobby.title}
                </CardTitle>
                <CardDescription className="text-sm text-card-foreground">
                  {hobby.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <span className="text-sm text-accent font-medium">{hobby.category}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {hobby.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                  {hobby.skills.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{hobby.skills.length - 3}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Recent Projects:</h4>
                  <div className="space-y-1">
                    {hobby.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Skills Proficiency
          </h3>
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {hobbySkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">({skill.category})</span>
                      </div>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Tools & Technologies
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">3D Design</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {["Blender", "Fusion 360", "Maya", "3ds Max", "V-Ray"].map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-secondary border border-border/50 text-foreground rounded-lg hover:border-primary/30 hover:shadow-glow transition-all duration-300 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">IoT & Hardware</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {["Arduino", "Raspberry Pi", "ESP32", "MQTT", "Node.js"].map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-secondary border border-border/50 text-foreground rounded-lg hover:border-primary/30 hover:shadow-glow transition-all duration-300 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">UI/UX Design</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {["Figma", "Adobe XD", "Sketch", "InVision", "Principle"].map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-secondary border border-border/50 text-foreground rounded-lg hover:border-primary/30 hover:shadow-glow transition-all duration-300 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;