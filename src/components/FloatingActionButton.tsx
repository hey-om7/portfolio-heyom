import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
     
      {/* Scroll to Top Button */}
      <div className={`mt-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300 transform hover:scale-110 group"
          title="Scroll to Top"
        >
          <span className="text-lg group-hover:-translate-y-0.5 transition-transform duration-300">↑</span>
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton; 