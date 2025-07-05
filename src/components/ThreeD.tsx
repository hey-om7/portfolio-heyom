import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const threeDProjects = [
  // {
  //   title: "Architectural Visualization",
  //   description: "Photorealistic 3D models of modern buildings and interior spaces. Created detailed environments with proper lighting and materials.",
  //   image: "https://images.unsplash.com/photo-1558618047-b83be0b79a71?w=600&h=400&fit=crop",
  //   software: ["Blender", "3ds Max", "V-Ray", "Photoshop"],
  //   category: "Architecture",
  //   status: "Completed",
  //   year: "2023"
  // },
  // {
  //   title: "Product Design Prototypes", 
  //   description: "3D modeling for consumer electronics and industrial design. Focus on realistic materials, lighting, and presentation renders.",
  //   image: "https://images.unsplash.com/photo-1558618047-5b86b2d6e0e9?w=600&h=400&fit=crop",
  //   software: ["Fusion 360", "KeyShot", "Rhino", "SolidWorks"],
  //   category: "Product Design",
  //   status: "Ongoing",
  //   year: "2023"
  // },
  // {
  //   title: "Character Modeling",
  //   description: "Stylized and realistic character models for games and animation. Includes rigging, texturing, and animation ready assets.",
  //   image: "https://images.unsplash.com/photo-1562601579-599dec564e06?w=600&h=400&fit=crop",
  //   software: ["Blender", "ZBrush", "Substance Painter", "Maya"],
  //   category: "Character",
  //   status: "Portfolio",
  //   year: "2022"
  // },
  // {
  //   title: "Environment Design",
  //   description: "Immersive 3D environments for games and VR experiences. Detailed landscapes, buildings, and atmospheric effects.",
  //   image: "https://images.unsplash.com/photo-1518709268805-4e9042af2dd0?w=600&h=400&fit=crop",
  //   software: ["Unreal Engine", "Blender", "World Creator", "Quixel"],
  //   category: "Environment",
  //   status: "Completed", 
  //   year: "2023"
  // },
  // {
  //   title: "Motion Graphics",
  //   description: "3D animated sequences for web applications and marketing materials. Abstract shapes, logo animations, and transitions.",
  //   image: "https://images.unsplash.com/photo-1633354628034-3cd0bb85c723?w=600&h=400&fit=crop",
  //   software: ["Cinema 4D", "After Effects", "Octane", "Redshift"],
  //   category: "Animation",
  //   status: "Active",
  //   year: "2023"
  // },
  // {
  //   title: "WebGL Experiences",
  //   description: "Interactive 3D experiences for the web using Three.js. Real-time rendering, user interaction, and responsive design.",
  //   image: "https://images.unsplash.com/photo-1614208114928-97e8e14e9baf?w=600&h=400&fit=crop",
  //   software: ["Three.js", "Blender", "GLTF", "WebGL"],
  //   category: "Web 3D",
  //   status: "Active",
  //   year: "2023"
  // }
];

const skills = [
  { name: "3D Modeling", level: 95 },
  { name: "Texturing", level: 88 },
  { name: "Lighting", level: 92 },
  // { name: "Animation", level: 78 },
  { name: "Rendering", level: 90 },
  // { name: "VR/AR", level: 75 }
];

const ThreeD = () => {
  return (
    <section className="py-20 bg-background" id="3d-modeling">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            3D Modeling & Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating immersive 3D experiences and visualizations that bring ideas to life
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {threeDProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === 'Active' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                    project.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                    'bg-purple-500/20 text-purple-400 border-purple-500/30'
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <CardDescription className="text-sm text-card-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <span className="text-sm text-accent font-medium">{project.category}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.software.slice(0, 3).map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.software.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.software.length - 3}
                    </span>
                  )}
                </div>
                <Button variant="outline" size="sm" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            3D Skills Proficiency
          </h3>
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
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

        {/* Software & Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Software & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Fusion 360", "Blender", "Maya", "Unreal Engine", "Unity"].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-secondary border border-border/50 text-foreground rounded-lg hover:border-primary/30 hover:shadow-glow transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeD;