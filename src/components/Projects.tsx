import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Dentolearn",
    description: "Developed a full-stack mobile application using with Spring boot serving a REST API with Flutter and React as the frontend. Live on Google Playstore with 200+ Active users. Integrated payment gateway for premium access and hosted the app on AWS for scalability and security. Utilized MongoDB for flexible, scalable data storage, supporting dynamic educational content.",
    image: "/images/dentolearn.png",
    technologies: ["React", "Node.js", "MongoDB", "Spring Boot", "Flutter", "Docker", "AWS S3", "AWS EC2", "AWS ALG"],
    github: "https://github.com/example/ecommerce",
    demo: "https://play.google.com/store/apps/datasafety?id=apps.oa.dentolearn&hl=en",
    featured: true
  },
  {
    title: "Forest Fire Prediction",
    description: "Developed a machine learning-powered forest fire prediction system with an impressive accuracy of 98%. Utilized Python and Pandas for data processing and model development. Frontend built using ReactJS for interactive visualization and user interface.",
    image: "/images/forest-fire.png",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "PWA"],
    github: "https://github.com/example/taskapp",
    demo: "https://play.google.com/store/apps/datasafety?id=apps.oa.dentolearn&hl=en",
    featured: true
  },
  
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 bg-secondary/50" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, from concept to deployment
          </p>
        </div>

        {/* Featured Projects with enhanced design */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-secondary border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative">
              {/* Enhanced image container */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Overlay with project info */}
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="p-6 w-full">
                    <div className="flex gap-2 mb-3">
                      <Button
                        onClick={() => window.open(project.demo, "_blank")}
                        variant="default" 
                        size="sm" 
                        className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      >
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Featured badge */}
                <Badge variant="secondary" className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                  Featured
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-card-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Enhanced action buttons */}
                <div className="flex gap-3">
                  <Button
                    onClick={() => window.open(project.demo, "_blank")}
                    variant="default" 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">Live Demo</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid with enhanced styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="group bg-gradient-secondary border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
              {/* Enhanced image container */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-card-foreground line-clamp-3 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Enhanced action buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
