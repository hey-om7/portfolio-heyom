import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Analyst Full Stack Software Developer",
    company: "TIAA",
    period: "July 2023 – Present",
    location: "Pune, MH",
    description: "Re-engineered core application with Spring Boot, achieving 45% latency reduction and improving performance. Automated key manual processes, reducing processing time by 40% and enhancing operational efficiency. Modernized backend with latest tech stack (Spring, AWS, MongoDB, Postgres), supporting agile, high-speed data handling.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
  },
  {
    title: "Software Developer Intern",
    company: "Larsen & Toubro - Electronics & Automation",
    period: "March 2023 – July 2023",
    location: "Mumbai, MH", 
    description: "Worked on the SMARTCOM Power Management System(PMS) Mobile Application. The app facilitated data exchange and push notifications through communication with the REST API. Enhanced user productivity by 30% by minimizing the need for frequent system checks, Automating alerts for timely, informed decisions.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GCP"]
  },
  {
    title: "Software Developer Intern",
    company: "Zensar",
    period: "June 2021 - August 2021",
    location: "Pune, MH",
    description: "Developed a FastAPI backend to manage and process employee performance data, including task completion rates, feedback scores with integration of JWT auth & visualized using Plotly or Chart.js using React Js. Collaborated with the HR team to ensure the API met their reporting and data analysis needs.",
    technologies: ["JavaScript", "HTML/CSS", "Bootstrap", "jQuery", "Git"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through various companies and technologies, building scalable solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Enhanced timeline line with gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-60"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16 group">
                {/* Enhanced timeline dot with animation */}
                <div className="absolute -left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow group-hover:scale-125 transition-transform duration-300">
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping"></div>
                </div>
                
                {/* Enhanced card with better styling */}
                <Card className="hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-gradient-secondary border-border/50 group-hover:border-primary/30 relative overflow-hidden">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-primary font-semibold mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full inline-block">
                          {exp.period}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-card-foreground mb-6 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default group-hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;