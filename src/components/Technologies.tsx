import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techCategories = [
  {
    category: "Languages",
    icon: "⚙️",
    technologies: [
      "Java", "Python", "C", "Dart", "JavaScript", "SQL", "NoSQL", "HTML", "CSS"
    ]
  },
  {
    category: "Frameworks", 
    icon: "🛠️",
    technologies: [
      "Spring Boot", "ReactJs", "Flask", "Django", "Hibernate", "FastAPI",
      "REST APIs", "WebSocket", "Microservices", "Serverless"
    ]
  },
  {
    category: "Database",
    icon: "🗄️", 
    technologies: [
      "PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB",
       "Firebase"
    ]
  },
  {
    category: "Technologies",
    icon: "🚀",
    technologies: [
      "Docker", "Kubernetes", "AWS-EC2", "AWS-S3", "AWS-Lambda",
      "AWS-DynamoDB",
      "CI/CD", "Jenkins", "GitHub Actions", 
      "Git", "GitHub",  "JPA", "JWT"
    ]
  },
  {
    category: "Tools & Others",
    icon: "🔧",
    technologies: [
      "Git", "VS Code", "Figma", "Postman", "Swagger", "Jira",
      "Confluence",
      "Insomnia","JUNIT", "VS Code", "Mokito", "IntelliJ IDEA", "Android Studio", 
      "Chrome DevTools","Docker",
        "GitHub Desktop", "MongoDB Compass"
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
              className="group bg-gradient-secondary border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/30 relative overflow-hidden"
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                  backgroundSize: '15px 15px'
                }}></div>
              </div>
              
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                  {category.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.category}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default group-hover:scale-105"
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Proficiency Levels */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-secondary border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🥇</div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Expert</h4>
              <p className="text-sm text-muted-foreground">Spring Boot, Flutter, MongoDB, AWS, Python, SQL</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-secondary border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🥈</div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Advanced</h4>
              <p className="text-sm text-muted-foreground">ReactJS</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-secondary border border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🥉</div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Intermediate</h4>
              <p className="text-sm text-muted-foreground">Kubernetes, Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;