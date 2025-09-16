import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Calendar, Search, Filter } from "lucide-react";

const colleges = [
  {
    id: 1,
    name: "Government College of Arts & Science",
    location: "Chennai, Tamil Nadu",
    rating: 4.2,
    students: 3500,
    courses: ["B.A. Literature", "B.Sc. Physics", "B.Com. Commerce"],
    fees: "₹12,000/year",
    cutoff: "85%",
    facilities: ["Library", "Lab", "Hostel", "Sports"],
    admissionDeadline: "July 15, 2024"
  },
  {
    id: 2,
    name: "State University College",
    location: "Bangalore, Karnataka", 
    rating: 4.5,
    students: 4200,
    courses: ["B.Tech Engineering", "B.Sc. Computer Science", "BBA"],
    fees: "₹15,000/year",
    cutoff: "88%",
    facilities: ["Lab", "Library", "Canteen", "WiFi"],
    admissionDeadline: "August 1, 2024"
  },
  {
    id: 3,
    name: "Regional Government College",
    location: "Pune, Maharashtra",
    rating: 4.0,
    students: 2800,
    courses: ["B.A. Psychology", "B.Sc. Mathematics", "B.Com. Accounting"],
    fees: "₹10,000/year",
    cutoff: "82%",
    facilities: ["Library", "Sports", "Hostel"],
    admissionDeadline: "July 25, 2024"
  }
];

const CollegeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredColleges = colleges.filter(college => 
    college.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedLocation === "" || college.location.includes(selectedLocation))
  );

  return (
    <section className="py-20 bg-background" id="colleges">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Government College Directory
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover nearby government colleges with detailed information about courses, 
            facilities, and admission requirements.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-card border-none shadow-soft">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search colleges by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-none bg-secondary/50"
                  />
                </div>
                <div className="relative md:w-64">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Filter by location..."
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-10 h-12 rounded-xl border-none bg-secondary/50"
                  />
                </div>
                <Button className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold px-8 h-12 rounded-xl">
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* College Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <Card 
              key={college.id} 
              className="bg-card border-none shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {college.name}
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-accent fill-current" />
                    <span className="text-sm font-medium text-foreground">{college.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{college.location}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span>{college.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-success" />
                    <span>Deadline: {college.admissionDeadline.split(',')[0]}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Available Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Annual Fees</span>
                    <p className="font-semibold text-success">{college.fees}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Cut-off</span>
                    <p className="font-semibold text-foreground">{college.cutoff}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.facilities.map((facility, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs border-success/30 text-success"
                      >
                        {facility}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl flex-1"
                    size="sm"
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-xl font-semibold"
                  >
                    Compare
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="font-semibold px-8 py-4 rounded-xl"
          >
            Load More Colleges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollegeDirectory;