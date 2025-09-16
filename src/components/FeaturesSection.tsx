import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Map, School, Bell, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Aptitude Assessment",
    description: "AI-powered quizzes analyze your interests, strengths, and personality to suggest the perfect career path.",
    color: "text-primary"
  },
  {
    icon: Map,
    title: "Visual Career Mapping",
    description: "Interactive charts showing career outcomes for every degree program and subject combination.",
    color: "text-success"
  },
  {
    icon: School,
    title: "Government College Directory",
    description: "Comprehensive database of nearby colleges with admission criteria, facilities, and course offerings.",
    color: "text-accent"
  },
  {
    icon: Bell,
    title: "Timeline & Notifications",
    description: "Never miss important dates with personalized reminders for admissions, scholarships, and exams.",
    color: "text-primary-light"
  },
  {
    icon: Users,
    title: "Personalized Guidance",
    description: "Customized recommendations based on your profile, location, and academic performance.",
    color: "text-success-light"
  },
  {
    icon: TrendingUp,
    title: "Career Progression Insights",
    description: "Understand long-term career growth, salary expectations, and industry trends for informed decisions.",
    color: "text-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and guidance needed to make informed 
            educational and career decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-none shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-success/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;