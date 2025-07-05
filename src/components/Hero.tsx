import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Om Ambarkar";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === fullText) {
          setIsDeleting(true);
          setTimeout(() => setIsDeleting(false), 2000);
        } else {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false);
        } else {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, fullText]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Layered animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-purple-600/10 to-emerald-500/10 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/5 via-transparent to-purple-500/5 animate-gradient" style={{animationDelay: '1s'}}></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-emerald-500/20 rounded-full blur-xl animate-float-delay-1"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-300/20 to-purple-400/20 rounded-full blur-xl animate-float-delay-2"></div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float-delay-1"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-float-delay-2"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-float"></div>
        
        {/* Rotating rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-emerald-400/10 rounded-full animate-rotate-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/10 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 animate-shimmer opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.div
              className="text-emerald-400 font-medium text-lg sm:text-xl mb-2 animate-hero-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello
            </motion.div>

            {/* Name with typing animation */}
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-400 animate-text-glow">
                  {currentText}
                  <span className="inline-block w-1 h-8 bg-emerald-400 ml-1 animate-pulse"></span>
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6 animate-hero-text-delay-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Full Stack Developer
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 animate-hero-text-delay-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Crafting digital experiences with modern technologies. 
              Passionate about creating innovative solutions that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-hero-text-delay-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-button-hover"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 border-2 border-emerald-500/30 text-emerald-400 font-semibold rounded-xl hover:border-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 transform hover:-translate-y-1 animate-button-hover"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex justify-center lg:justify-start gap-8 mt-12 animate-hero-text-delay-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-emerald-400/20 shadow-2xl animate-card-hover">
                <img
                  src="/om-ambarkar.jpg"
                  alt="Om Ambarkar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback initials */}
                <div className="hidden w-full h-full bg-gradient-to-br from-emerald-500 to-purple-600 items-center justify-center text-white text-6xl font-bold">
                  OA
                </div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-emerald-300 rounded-full animate-float"></div>
              <div className="absolute bottom-1/2 -left-8 w-3 h-3 bg-purple-300 rounded-full animate-float-delay-1"></div>

              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-full animate-rotate-slow"></div>
              <div className="absolute inset-4 border border-purple-400/20 rounded-full animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ChevronDown className="w-6 h-6 text-emerald-400" />
      </motion.div>
    </section>
  );
};

export default Hero;