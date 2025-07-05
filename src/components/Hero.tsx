import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-primary/30 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute bottom-1/3 right-16 w-20 h-20 bg-accent/30 rounded-full animate-float delay-500"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated greeting */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              Hello,
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              I'm Om Ambarkar
            </h1>
          </div>
          
          {/* Enhanced subtitle with animation */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-150 leading-relaxed">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
          
          {/* Role/title badge */}
          <div className="inline-block mb-8 animate-fade-in delay-200">
            <span className="px-6 py-3 bg-primary/10 text-primary rounded-full text-lg font-medium border border-primary/20 backdrop-blur-sm">
              Full Stack Developer & 3D Designer
            </span>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">View My Work</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="flex justify-center gap-8 mt-12 animate-fade-in delay-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25k+</div>
              <div className="text-sm text-muted-foreground">GitHub Stars</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;