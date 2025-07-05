import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-md border border-emerald-400/30 text-white rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-700/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"></div>
      <ChevronUp className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
    </motion.button>
  );
};

export default FloatingActionButton; 