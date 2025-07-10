import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';

const ownProjects = [
  {
    name: "Package: back_pressed",
    description: "A lightweight Flutter plugin to intercept Android back button presses and trigger custom actions. Designed for smoother user flows and controlled navigation.\n✅ Used in 100+ apps | ⭐ Minimal, reliable, and production-ready",
    language: "Dart",
    stars: 140,
    downloads: 134,
    status: "Active",
    pubUrl: "https://pub.dev/packages/back_pressed"
  },
  {
    name: "Package: essential_kit",
    description: "A curated collection of must-have Flutter widgets and utilities to kickstart any app. From reusable components to core helper functions, it’s your all-in-one starter pack for efficient development.\n🚀 Developer-ready | 🧩 Plug-and-play essentials | 📦 Compact & practical",
    language: "Dart",
    stars: 120,
    downloads: 60,
    status: "Active",
    pubUrl: "https://pub.dev/packages/essential_kit"
  },
  {
    name: "Package: public_ip",
    description: "A cross-platform Dart package to fetch the user’s public IP address and approximate geolocation details. Instantly access IP, location, ISP, and more — all with a single call.\n🌍 Multi-platform | 📡 IP & Location Lookup | ⚙️ Dart 3 Ready",
    language: "Dart",
    stars: 100,
    downloads: 236,
    status: "Active",
    pubUrl: "https://pub.dev/packages/public_ip"
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

        {/* Own Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            My Open Source Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {ownProjects.map((project, index) => (
              <Card key={index} className="group bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] flex flex-col">
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
                <CardContent className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      {project.language}
                    </span>
                    <div className="flex gap-3">
                      <span className="flex items-center gap-1">
                        <img 
                          src="/images/icons/⭐ Star (Celestial, Night, Sky).png" 
                          alt="Stars"
                          className="w-4 h-4 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-accent">⬇️</span>
                        {project.downloads}
                        <span className="text-xs text-muted-foreground">downloads</span>
                      </span>
                    </div>
                  </div>
                  <div className="text-center mb-4 flex items-center justify-center gap-2">
                    <img
                      src="/images/icons/🚀 Rocket (Spacecraft, Rocketship, SpaceX).png"
                      alt="Powering"
                      className="w-5 h-5 inline-block"
                      style={{ display: 'inline-block' }}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span className="text-accent font-medium">
                      Powering {project.downloads}+ Projects
                    </span>
                    <span className="text-xl">📦</span>
                  </div>
                  <div className="flex-1" />
                  <div className="flex gap-2 pt-2 mt-2">
                    <Button variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      GitHub
                    </Button>
                    <a
                      href={project.pubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground flex items-center justify-center gap-2"
                        type="button"
                      >
                        View on pub.dev <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
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
                  <div className="text-3xl font-bold text-accent mb-2">1500+</div>
                  <div className="text-muted-foreground">Stars Earned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Own Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">2000+</div>
                  <div className="text-muted-foreground">Downloads</div>
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