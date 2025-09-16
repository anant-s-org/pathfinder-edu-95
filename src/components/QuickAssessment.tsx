import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "What type of activities do you enjoy most?",
    options: [
      { value: "analytical", label: "Solving complex problems and analyzing data" },
      { value: "creative", label: "Creating art, writing, or designing" },
      { value: "social", label: "Helping people and working in teams" },
      { value: "practical", label: "Building or fixing things with my hands" }
    ]
  },
  {
    id: 2,
    question: "Which work environment appeals to you?",
    options: [
      { value: "office", label: "Modern office with technology" },
      { value: "outdoors", label: "Outdoors or field work" },
      { value: "lab", label: "Laboratory or research facility" },
      { value: "community", label: "Community centers or schools" }
    ]
  },
  {
    id: 3,
    question: "What motivates you most in your studies?",
    options: [
      { value: "knowledge", label: "Learning new concepts and theories" },
      { value: "grades", label: "Achieving high grades and recognition" },
      { value: "application", label: "Applying knowledge to real problems" },
      { value: "creativity", label: "Expressing creativity and innovation" }
    ]
  }
];

const QuickAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const getRecommendation = () => {
    const answerValues = Object.values(answers);
    
    if (answerValues.includes("analytical") || answerValues.includes("lab")) {
      return {
        stream: "Science Stream",
        courses: ["B.Sc. Mathematics", "B.Sc. Physics", "B.Tech Engineering"],
        careers: ["Research Scientist", "Data Analyst", "Software Engineer"],
        color: "from-primary to-primary-light"
      };
    } else if (answerValues.includes("creative") || answerValues.includes("creativity")) {
      return {
        stream: "Arts Stream",
        courses: ["B.A. Fine Arts", "B.A. Literature", "B.A. Psychology"],
        careers: ["Graphic Designer", "Content Writer", "Psychologist"],
        color: "from-accent to-accent-light"
      };
    } else if (answerValues.includes("social") || answerValues.includes("community")) {
      return {
        stream: "Humanities",
        courses: ["B.A. Social Work", "B.Ed. Education", "B.A. Political Science"],
        careers: ["Social Worker", "Teacher", "Public Administrator"],
        color: "from-success to-success-light"
      };
    } else {
      return {
        stream: "Commerce Stream",
        courses: ["B.Com. Commerce", "BBA Business Administration", "B.Com. Accounting"],
        careers: ["Business Analyst", "Accountant", "Marketing Manager"],
        color: "from-primary-light to-success"
      };
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = getRecommendation();
    
    return (
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background" id="assessment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-none shadow-card">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-success to-success-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-foreground mb-4">
                  Your Personalized Recommendation
                </CardTitle>
                <p className="text-muted-foreground">
                  Based on your responses, here's what we recommend for your academic journey
                </p>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className={`bg-gradient-to-r ${recommendation.color} p-8 rounded-2xl text-white`}>
                  <h3 className="text-2xl font-bold mb-4">Recommended Stream</h3>
                  <p className="text-xl font-semibold">{recommendation.stream}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Suggested Courses</h4>
                    <ul className="space-y-3">
                      {recommendation.courses.map((course, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">Career Opportunities</h4>
                    <ul className="space-y-3">
                      {recommendation.careers.map((career, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <span className="text-muted-foreground">{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold px-8 py-3 rounded-xl flex-1"
                  >
                    Explore Detailed Career Paths
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetAssessment}
                    className="font-semibold px-8 py-3 rounded-xl"
                  >
                    Retake Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background" id="assessment">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Quick Aptitude Assessment
            </h2>
            <p className="text-xl text-muted-foreground">
              Answer a few questions to discover your ideal career path
            </p>
          </div>
          
          <Card className="bg-card border-none shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
                </span>
              </div>
              <Progress 
                value={((currentQuestion + 1) / questions.length) * 100} 
                className="h-2 mb-6"
              />
              <CardTitle className="text-2xl font-semibold text-foreground">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <RadioGroup 
                value={answers[currentQuestion] || ""} 
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label 
                      htmlFor={option.value} 
                      className="text-base font-medium text-foreground cursor-pointer flex-1"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className="font-semibold px-6 py-3 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[currentQuestion]}
                  className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold px-6 py-3 rounded-xl"
                >
                  {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickAssessment;