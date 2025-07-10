import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const contactMethods = [
  {
    icon: "/images/icons/📧 E Mail (Inbox, Email, Message).png",
    title: "Email",
    description: "Let's discuss your project",
    value: "om.ambarkar@gmail.com",
    action: "Send Email"
  },
  {
    icon: "/images/icons/💼 Briefcase (Work, Business, Office).png",
    title: "LinkedIn", 
    description: "Connect professionally",
    value: "linkedin.com/in/omambarkar/",
    action: "Connect"
  },
  {
    icon: "/images/icons/🐱 Cat Face (Kitty, Feline, Meow).png",
    title: "GitHub",
    description: "Check out my code",
    value: "https://github.com/hey-om7",
    action: "Follow"
  },
  // {
  //   icon: "🐦", 
  //   title: "Twitter",
  //   description: "Follow my journey",
  //   value: "@fullstackdev",
  //   action: "Follow"
  // }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleEmailClick = () => {
    const email = "om.ambarkar@gmail.com";
    const subject = "I saw your portfolio and wanted to connect.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleContactMethodClick = (method: any) => {
    if (method.title === "Email") {
      handleEmailClick();
    } else if (method.title === "LinkedIn") {
      window.open(`https://${method.value}`, '_blank');
    } else if (method.title === "GitHub") {
      window.open(method.value, '_blank');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xblyegzy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-secondary/50" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Enhanced Contact Form */}
          <Card className="bg-gradient-secondary border-border/50 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl sm:text-2xl text-foreground">Send a Message</CardTitle>
              <CardDescription className="text-card-foreground text-sm sm:text-base">
                Tell me about your project and let's start the conversation
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 group">
                    <Label htmlFor="firstName" className="text-foreground group-hover:text-primary transition-colors duration-300">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      placeholder="John"
                      required
                      className="bg-background border-border focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <Label htmlFor="lastName" className="text-foreground group-hover:text-primary transition-colors duration-300">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="bg-background border-border focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <Label htmlFor="email" className="text-foreground group-hover:text-primary transition-colors duration-300">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    required
                    className="bg-background border-border focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div className="space-y-2 group">
                  <Label htmlFor="subject" className="text-foreground group-hover:text-primary transition-colors duration-300">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="Project Collaboration"
                    required
                    className="bg-background border-border focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                
                <div className="space-y-2 group">
                  <Label htmlFor="message" className="text-foreground group-hover:text-primary transition-colors duration-300">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    required
                    className="bg-background border-border focus:border-primary transition-all duration-300 hover:border-primary/50 focus:ring-2 focus:ring-primary/20 min-h-[120px] resize-none"
                  />
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
                    ✅ Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                    ❌ Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Methods */}
          <div className="space-y-4 sm:space-y-6">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Choose your preferred way to reach out. I'm always excited to discuss new opportunities and interesting projects.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group bg-gradient-secondary border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                      backgroundSize: '15px 15px'
                    }}></div>
                  </div>
                  
                  <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 relative z-10 gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3 flex-shrink-0">
                        {method.icon.startsWith('/') ? (
                          <img 
                            src={method.icon} 
                            alt={method.title}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="text-2xl sm:text-3xl">{method.icon}</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{method.title}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{method.description}</p>
                        <p className="text-xs sm:text-sm text-primary font-medium truncate">{method.value}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleContactMethodClick(method)}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-xs sm:text-sm"
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Enhanced Availability Status */}
            <Card className="bg-gradient-secondary border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for New Projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Currently accepting new client work and interesting collaborations
                </p>
              </CardContent>
            </Card>

            {/* Enhanced Response Time */}
            <Card className="bg-gradient-secondary border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                  <img 
                    src="/images/icons/⚡ High Voltage (Electricity, Danger, Warning).png" 
                    alt="Quick Response"
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  Quick Response
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/icons/📧 E Mail (Inbox, Email, Message).png" 
                      alt="Email"
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <span>Email: Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/icons/💼 Briefcase (Work, Business, Office).png" 
                      alt="LinkedIn"
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <span>LinkedIn: Within 12 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/icons/📱 Mobile Phone (Smartphone, Device, Mobile).png" 
                      alt="Urgent projects"
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <span>Urgent projects: Same day</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need a full-stack web application, mobile app, or custom solution, 
            I'm here to help bring your vision to reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleEmailClick}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">Schedule a Call</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
            >
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;