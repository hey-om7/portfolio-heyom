import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient"></div>
      
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%'
        }}></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-xl animate-float-delay-1"></div>
      
      {/* Modern Geometric Elements */}
      <div className="absolute top-1/3 left-10 w-24 h-24 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-lg rotate-45 animate-float-delay-2"></div>
      <div className="absolute bottom-1/3 right-16 w-20 h-20 bg-gradient-to-r from-purple-400/40 to-pink-500/40 rounded-full animate-float"></div>
      
      {/* Animated Lines */}
      <div className="absolute top-1/4 left-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      {/* Floating Dots */}
      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      
      {/* Modern Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent"></div>
      
      {/* Animated Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500/20 rounded-full animate-rotate-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-500/20 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 animate-shimmer opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated greeting */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-hero-text">
              Hello,
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-hero-text-delay-1">
              I'm Om Ambarkar
            </h1>
          </div>
          
          {/* Enhanced subtitle with animation */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-hero-text-delay-2 leading-relaxed">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
          
          {/* Role/title badge */}
          <div className="inline-block mb-8 animate-hero-text-delay-3">
            <span className="px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-medium border border-white/20 shadow-lg">
              Full Stack Developer
            </span>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-text-delay-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300">View My Work</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="flex justify-center gap-8 mt-12 animate-hero-text-delay-5">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">25k+</div>
              <div className="text-sm text-gray-400">GitHub Stars</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;