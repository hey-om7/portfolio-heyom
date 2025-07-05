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
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                
                <Card className="hover:shadow-card transition-all duration-300 hover:scale-[1.02] bg-gradient-secondary border-border/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-lg text-primary font-semibold">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-accent font-medium">{exp.period}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
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