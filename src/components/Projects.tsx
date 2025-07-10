import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Lock, ExternalLink, Github, Eye } from "lucide-react";

const projects = [
  {
    title: "Dentolearn",
    description: "Developed a full-stack mobile application using with Spring boot serving a REST API with Flutter and React as the frontend. Live on Google Playstore with 200+ Active users. Integrated payment gateway for premium access and hosted the app on AWS for scalability and security. Utilized MongoDB for flexible, scalable data storage, supporting dynamic educational content.",
    image: "/images/dentolearn.png",
    technologies: ["React", "Node.js", "MongoDB", "Spring Boot", "Flutter", "Docker", "AWS S3", "AWS EC2", "AWS ALG"],
    github: null,
    demo: "https://dentolearn.space/",
    featured: true
  },
  {
    title: "ZeroLag",
    description: "Zerolag is a 24-hour monitoring system designed to detect website or service downtime in real-time. It continuously checks system availability and instantly sends email alerts when outages are detected. With rapid notifications and round-the-clock tracking, Zerolag ensures you're always aware of any disruptions.",
    image: "/images/zerolag-1.png",
    technologies: ["React", "Node.js", "MongoDB", "Spring Boot", "Flutter", "Docker", "AWS S3"],
    github: null,
    demo: "https://zerolag.site/",
    featured: true
  },
  {
    title: "Forest Fire Prediction",
    description: "Developed a machine learning-powered forest fire prediction system with an impressive accuracy of 98%. Utilized Python and Pandas for data processing and model development. Frontend built using ReactJS for interactive visualization and user interface.",
    image: "/images/forest-fire.png",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "PWA"],
    github: "https://github.com/hey-om7/forest-fire-predictor",
    demo: null,
    featured: false
  },
  {
    title: "Project Attendle",
    description: "Developed a machine learning-powered forest fire prediction system with an impressive accuracy of 98%. Utilized Python and Pandas for data processing and model development. Frontend built using ReactJS for interactive visualization and user interface.",
    image: "/images/attendle.png",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "PWA"],
    github: null,
    demo: null,
    featured: false
  },
  {
    title: "Good Eyes",
    description: "Developed a machine learning-powered forest fire prediction system with an impressive accuracy of 98%. Utilized Python and Pandas for data processing and model development. Frontend built using ReactJS for interactive visualization and user interface.",
    image: "/images/goodeyes.jpg",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "PWA"],
    github: "https://github.com/hey-om7/goodEyesPython",
    demo: null,
    featured: false
  },
  
];

const Projects = () => {
  const [isPrivateDialogOpen, setIsPrivateDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState<any>(null);
  
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleGitHubClick = (project: any) => {
    if (project.github) {
      window.open(project.github, "_blank");
    } else {
      setSelectedProject(project.title);
      setIsPrivateDialogOpen(true);
    }
  };

  const handleProjectCardClick = (project: any) => {
    setSelectedProjectData(project);
    setIsProjectDialogOpen(true);
  };

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
            <Card 
              key={index} 
              className="group overflow-hidden bg-gradient-secondary border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative flex flex-col cursor-pointer"
              onClick={() => handleProjectCardClick(project)}
            >
              {/* Enhanced image container */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured badge */}
                <Badge variant="secondary" className="absolute top-4 left-4 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                  Featured
                </Badge>
                
                {/* Click indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-card-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Bottom-aligned action buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, "_blank");
                    }}
                    variant="default" 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">Live Demo</span>
                  </Button>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGitHubClick(project);
                    }}
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <span className="flex items-center gap-1">
                      {project.github ? <ExternalLink className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                      GitHub
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid with enhanced styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-secondary border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden cursor-pointer"
              onClick={() => handleProjectCardClick(project)}
            >
              {/* Enhanced image container */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Click indicator */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-3 h-3 text-white" />
                  </div>
                </div>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectCardClick(project);
                    }}
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    View More
                  </Button>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGitHubClick(project);
                    }}
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <span className="flex items-center gap-1">
                      {project.github ? <ExternalLink className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                      Code
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Private Project Dialog */}
      <Dialog open={isPrivateDialogOpen} onOpenChange={setIsPrivateDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-gradient-secondary border-border/50">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Lock className="w-5 h-5 text-primary" />
              Private Project
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject} is a private project and the source code cannot be shared publicly.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-foreground">
                This project contains proprietary code and business logic that cannot be made public. 
                If you're interested in discussing this project or similar work, please reach out through the contact form.
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                onClick={() => setIsPrivateDialogOpen(false)}
                className="border-border text-foreground hover:bg-background hover:text-foreground hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Close
              </Button>
              <Button 
                onClick={() => {
                  setIsPrivateDialogOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-primary hover:shadow-glow"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Detailed Project Dialog */}
      <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
        <DialogContent className="bg-gradient-secondary border-border/50 backdrop-blur-sm max-w-[95vw] md:max-w-4xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto mx-2">
                      <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-primary flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
                {selectedProjectData?.title}
                {selectedProjectData?.featured && (
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 self-start md:self-auto">
                    Featured
                  </Badge>
                )}
              </DialogTitle>
            </DialogHeader>
          
          {selectedProjectData && (
            <div className="space-y-4 md:space-y-6">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={selectedProjectData.image} 
                  alt={selectedProjectData.title}
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
              </div>

              {/* Project Description */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Description</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {selectedProjectData.description}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectData.technologies.map((tech: string, index: number) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="bg-background/50 border-primary/30 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">Project Links</h3>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  {selectedProjectData.demo && (
                    <Button 
                      onClick={() => window.open(selectedProjectData.demo, "_blank")}
                      className="bg-gradient-primary hover:bg-gradient-primary/90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {selectedProjectData.github ? (
                    <Button 
                      onClick={() => window.open(selectedProjectData.github, "_blank")}
                      variant="outline"
                      className="bg-background/50 border-border/50 backdrop-blur-sm hover:bg-background/70 text-foreground hover:text-foreground hover:shadow-glow hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => {
                        setIsProjectDialogOpen(false);
                        setSelectedProject(selectedProjectData.title);
                        setIsPrivateDialogOpen(true);
                      }}
                      variant="outline"
                      className="bg-background/50 border-border/50 backdrop-blur-sm hover:bg-background/70 text-foreground hover:text-foreground hover:shadow-glow hover:scale-105 transition-all duration-300"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Private Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <div className="pt-4">
                <Button 
                  onClick={() => setIsProjectDialogOpen(false)}
                  className="w-full bg-gradient-primary hover:bg-gradient-primary/90"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
