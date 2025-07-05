import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    technologies: [
      "React", "Vue.js", "Next.js", "TypeScript", "JavaScript",
      "TailwindCSS", "SASS", "Styled Components", "Material-UI", "Chakra UI"
    ]
  },
  {
    category: "Backend", 
    icon: "⚙️",
    technologies: [
      "Node.js", "Python", "Go", "Express", "FastAPI",
      "GraphQL", "REST APIs", "WebSocket", "Microservices", "Serverless"
    ]
  },
  {
    category: "Database",
    icon: "🗄️", 
    technologies: [
      "PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB",
      "Prisma", "Mongoose", "TypeORM", "Supabase", "Firebase"
    ]
  },
  {
    category: "DevOps",
    icon: "🚀",
    technologies: [
      "Docker", "Kubernetes", "AWS", "GCP", "Azure",
      "CI/CD", "Jenkins", "GitHub Actions", "Terraform", "Nginx"
    ]
  },
  {
    category: "Tools",
    icon: "🛠️",
    technologies: [
      "Git", "VS Code", "Figma", "Postman", "Jest",
      "Cypress", "Webpack", "Vite", "ESLint", "Prettier"
    ]
  },
  {
    category: "Mobile",
    icon: "📱",
    technologies: [
      "React Native", "Flutter", "Expo", "Progressive Web Apps",
      "Ionic", "Cordova", "Native Development", "App Store", "Play Store"
    ]
  }
];

const Technologies = () => {
  return (
    <section className="py-20 bg-background" id="technologies">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] hover:border-primary/30"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-secondary border border-border/50">
              <div className="text-3xl mb-3">🥇</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Expert</h4>
              <p className="text-sm text-muted-foreground">React, Node.js, TypeScript, PostgreSQL</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-secondary border border-border/50">
              <div className="text-3xl mb-3">🥈</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Advanced</h4>
              <p className="text-sm text-muted-foreground">Python, Go, AWS, Docker, GraphQL</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-secondary border border-border/50">
              <div className="text-3xl mb-3">🥉</div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Intermediate</h4>
              <p className="text-sm text-muted-foreground">Flutter, Kubernetes, Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;