import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import QuickAssessment from "@/components/QuickAssessment";
import CollegeDirectory from "@/components/CollegeDirectory";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <QuickAssessment />
        <CollegeDirectory />
      </main>
    </div>
  );
};

export default Index;
