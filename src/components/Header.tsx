import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CareerGuide</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#assessment" className="text-foreground hover:text-primary transition-colors font-medium">
              Assessment
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">
              Courses
            </a>
            <a href="#colleges" className="text-foreground hover:text-primary transition-colors font-medium">
              Colleges
            </a>
            <a href="#timeline" className="text-foreground hover:text-primary transition-colors font-medium">
              Timeline
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-primary to-primary-light text-white font-medium px-6 rounded-xl">
              Get Started
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#assessment" className="text-foreground hover:text-primary transition-colors font-medium">
                Assessment
              </a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors font-medium">
                Courses
              </a>
              <a href="#colleges" className="text-foreground hover:text-primary transition-colors font-medium">
                Colleges
              </a>
              <a href="#timeline" className="text-foreground hover:text-primary transition-colors font-medium">
                Timeline
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="font-medium justify-start">
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-primary to-primary-light text-white font-medium justify-start">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;