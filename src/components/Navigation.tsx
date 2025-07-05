import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "technologies", label: "Tech Stack" },
    { id: "opensource", label: "Open Source" },
    { id: "hobbies", label: "Hobbies" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      let currentSection = "home"; // Default to home
      
      // Check each section to see which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Offset for better detection
          
          // If we're at the top of the page, default to home
          if (window.scrollY < 100) {
            currentSection = "home";
            break;
          }
          
          // Check if this section is in the viewport
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial call to set the correct active section
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // Immediately update the active section when clicked
    setActiveSection(sectionId);
    
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced styling */}
          <div 
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            &lt;heyom /&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-all duration-300 group ${
                  activeSection === item.id
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm hover:bg-emerald-500/25 hover:text-emerald-300"
                    : "text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></div>
                )}
                <div className="absolute inset-0 bg-emerald-500/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            ))}
          </div>

          {/* CTA Button with enhanced styling - hidden on mobile */}
          <Button 
            variant="default" 
            size="sm" 
            className="hidden md:block bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold hover:bg-white/15 hover:border-white/30 hover:text-white hover:shadow-xl hover:shadow-white/10 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
            onClick={() => scrollToSection("contact")}
          >
            <span className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-md"></div>
            
            {/* Glass Reflection Effects */}
            <div className={`absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isScrolled ? 'opacity-30' : 'opacity-0'}`}></div>
            <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isScrolled ? 'opacity-40' : 'opacity-0'}`}></div>
            <div className={`absolute -top-1/2 -left-1/2 w-2 h-2 bg-white/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-1000 ${isScrolled ? 'opacity-60 animate-pulse' : 'opacity-0'}`}></div>
            <div className={`absolute -top-1/4 -right-1/4 w-1 h-1 bg-white/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-200 ${isScrolled ? 'opacity-70 animate-pulse' : 'opacity-0'}`}></div>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex flex-col space-y-1">
              <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100 bg-background/95 backdrop-blur-xl border-t border-border/50' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="flex flex-col py-4 px-6 space-y-2">
          {navItems.map((item, index) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`justify-start transition-all duration-300 transform ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } ${
                activeSection === item.id
                  ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 hover:text-emerald-300"
                  : "text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Button>
          ))}
          <div className="pt-4 border-t border-border/30">
            <Button 
              variant="default" 
              size="sm" 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;