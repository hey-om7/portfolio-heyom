import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import OpenSource from "@/components/OpenSource";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import FloatingActionButton from "@/components/FloatingActionButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main id="home">
        <Hero />
        <Experience />
        <Projects />
        <Technologies />
        <OpenSource />
        <Hobbies />
        <Contact />
      </main>
      <FloatingActionButton />
    </div>
  );
};

export default Index;
