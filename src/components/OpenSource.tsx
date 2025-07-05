import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const contributions = [
  {
    project: "React DevTools",
    description: "Enhanced performance monitoring features and fixed memory leak detection bugs. Contributed to developer experience improvements.",
    language: "JavaScript", 
    stars: 15200,
    role: "Core Contributor",
    impact: "Used by 2M+ developers",
    link: "https://github.com/facebook/react"
  },
  {
    project: "TailwindCSS",
    description: "Added new utility classes for container queries and improved responsive design patterns. Documentation improvements.",
    language: "CSS",
    stars: 78500,
    role: "Contributor",
    impact: "10+ merged PRs",
    link: "https://github.com/tailwindlabs/tailwindcss"
  },
  {
    project: "Node.js",
    description: "Performance optimizations in the HTTP module and bug fixes for async/await handling in specific edge cases.",
    language: "C++",
    stars: 102000,
    role: "Contributor", 
    impact: "Critical bug fixes",
    link: "https://github.com/nodejs/node"
  },
  {
    project: "TypeScript",
    description: "Improved type inference for generic functions and contributed to better error messages for complex type scenarios.",
    language: "TypeScript",
    stars: 97800,
    role: "Contributor",
    impact: "Enhanced DX",
    link: "https://github.com/microsoft/TypeScript"
  }
];

const ownProjects = [
  {
    name: "React Form Builder",
    description: "A drag-and-drop form builder component for React applications with validation, theming, and export capabilities.",
    language: "TypeScript",
    stars: 1250,
    forks: 89,
    status: "Active",
    downloads: "15k/month"
  },
  {
    name: "Vue Router Guards",
    description: "Enhanced route protection utilities for Vue.js applications with authentication and permission checking.",
    language: "JavaScript", 
    stars: 890,
    forks: 156,
    status: "Maintained",
    downloads: "8k/month"
  },
  {
    name: "Express Middleware Toolkit",
    description: "Collection of useful Express.js middleware for logging, authentication, rate limiting, and error handling.",
    language: "JavaScript",
    stars: 2100,
    forks: 234,
    status: "Active",
    downloads: "22k/month"
  }
];

const OpenSource = () => {
  return (
    <section className="py-20 bg-secondary/50" id="opensource">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Open Source
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the developer community and building tools that matter
          </p>
        </div>

        {/* Major Contributions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Major Contributions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {contributions.map((contrib, index) => (
              <Card key={index} className="group bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">{contrib.project}</CardTitle>
                    <Badge variant="secondary" className="bg-accent/10 text-accent">
                      {contrib.role}
                    </Badge>
                  </div>
                  <CardDescription className="text-card-foreground">
                    {contrib.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        {contrib.language}
                      </span>
                      <span>⭐ {contrib.stars.toLocaleString()}</span>
                    </div>
                    <span className="text-sm font-medium text-accent">{contrib.impact}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Contribution
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Own Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            My Open Source Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ownProjects.map((project, index) => (
              <Card key={index} className="group bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-foreground">{project.name}</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className={
                        project.status === 'Active' 
                          ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-card-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      {project.language}
                    </span>
                    <div className="flex gap-3">
                      <span>⭐ {project.stars}</span>
                      <span>🍴 {project.forks}</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-accent font-medium">{project.downloads}</span>
                    <span className="text-muted-foreground text-sm"> downloads</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      NPM
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-secondary border-border/50">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Contributions</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">25k+</div>
                  <div className="text-muted-foreground">Stars Earned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-muted-foreground">Own Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">45k</div>
                  <div className="text-muted-foreground">Monthly Downloads</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;