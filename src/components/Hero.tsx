import { Button } from "@/components/ui/button";
import { GraduationCap, Target, MapPin, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Journey to the{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Right Career
              </span>{" "}
              Starts Here
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Discover your potential, explore career paths, and find the perfect government college 
              for your future. Make informed decisions with our AI-powered guidance platform.
              KUSH ANANT p
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-button transition-all duration-300 hover:scale-105"
              >
                Take Aptitude Test
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 rounded-xl shadow-button transition-all duration-300 hover:scale-105"
              >
                Explore Colleges
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            
          
          <div className="grid grid-cols-2 gap-6 items-stretch>
            
            >div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300 h-full">
              <Target className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-semibold text-lg mb-2">Aptitude Assessment</h3>
              <p className="text-white/80 text-sm">Discover your strengths and ideal career paths</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300 h-full">
              <GraduationCap className="w-12 h-12 mb-4 text-success-light" />
              <h3 className="font-semibold text-lg mb-2">Course Mapping</h3>
              <p className="text-white/80 text-sm">Visualize career outcomes for different degrees</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300 h-full">
              <MapPin className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-semibold text-lg mb-2">College Directory</h3>
              <p className="text-white/80 text-sm">Find nearby government colleges with detailed info</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300 h-full">
              <Calendar className="w-12 h-12 mb-4 text-success-light" />
              <h3 className="font-semibold text-lg mb-2">Timeline Tracker</h3>
              <p className="text-white/80 text-sm">Never miss important admission deadlines</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
