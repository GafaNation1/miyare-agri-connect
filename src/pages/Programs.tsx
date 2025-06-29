
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, Download, ExternalLink } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Certificate in Crop Production",
      duration: "6 months",
      capacity: "30 students",
      fee: "KES 15,000",
      description: "Comprehensive training in modern crop production techniques, soil management, and sustainable farming practices.",
      modules: ["Soil Science", "Crop Management", "Pest Control", "Harvest & Post-Harvest"],
      requirements: "KCSE Certificate or equivalent",
      category: "Certificate"
    },
    {
      title: "Diploma in Agricultural Technology",
      duration: "18 months",
      capacity: "25 students",
      fee: "KES 45,000",
      description: "Advanced training in agricultural technology, farm management, and agribusiness development.",
      modules: ["Agricultural Engineering", "Farm Business", "Research Methods", "Extension Services"],
      requirements: "Certificate in Agriculture or KCSE C+ and above",
      category: "Diploma"
    },
    {
      title: "Modern Dairy Farming Course",
      duration: "3 months",
      capacity: "40 participants",
      fee: "KES 8,000",
      description: "Intensive training in dairy cattle management, milk production, and dairy business development.",
      modules: ["Cattle Breeds", "Feeding Systems", "Health Management", "Milk Processing"],
      requirements: "Basic literacy",
      category: "Short Course"
    },
    {
      title: "Poultry Production & Management",
      duration: "2 months",
      capacity: "50 participants",
      fee: "KES 6,000",
      description: "Complete training in poultry farming, from brooding to marketing of poultry products.",
      modules: ["Poultry Housing", "Nutrition", "Disease Control", "Business Planning"],
      requirements: "Basic literacy",
      category: "Short Course"
    },
    {
      title: "Sustainable Horticulture",
      duration: "4 months",
      capacity: "35 participants",
      fee: "KES 12,000",
      description: "Training in vegetable and fruit production using sustainable and organic methods.",
      modules: ["Organic Farming", "Greenhouse Management", "Irrigation Systems", "Market Linkages"],
      requirements: "Basic education",
      category: "Certificate"
    },
    {
      title: "Agricultural Entrepreneurship",
      duration: "1 month",
      capacity: "60 participants",
      fee: "KES 4,000",
      description: "Business skills training for agricultural ventures and value addition enterprises.",
      modules: ["Business Planning", "Financial Management", "Marketing", "Value Addition"],
      requirements: "Any agricultural background",
      category: "Workshop"
    }
  ];

  const upcomingSessions = [
    { program: "Certificate in Crop Production", startDate: "March 15, 2024", status: "Open" },
    { program: "Modern Dairy Farming Course", startDate: "February 28, 2024", status: "Almost Full" },
    { program: "Poultry Production & Management", startDate: "April 10, 2024", status: "Open" },
    { program: "Agricultural Entrepreneurship", startDate: "March 5, 2024", status: "Open" }
  ];

  const handleRegistration = (programTitle: string) => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_registration_form_link', '_blank');
  };

  const handleDownloadBrochure = () => {
    // This would normally download a PDF brochure
    alert('Brochure download will be available soon. Please contact us for more information.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Programs</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Comprehensive agricultural training programs designed to enhance skills, 
                improve productivity, and foster sustainable farming practices.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-agricultural-green text-white">
                        {program.category}
                      </Badge>
                      <span className="text-lg font-bold text-agricultural-green">{program.fee}</span>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        Duration: {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2" />
                        Capacity: {program.capacity}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Award className="h-4 w-4 mr-2" />
                        Requirements: {program.requirements}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Course Modules:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.modules.map((module, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {module}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button 
                        className="w-full bg-agricultural-green hover:bg-green-700"
                        onClick={() => handleRegistration(program.title)}
                      >
                        Register Now <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleDownloadBrochure}>
                        <Download className="h-4 w-4 mr-2" />
                        Download Brochure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Upcoming Sessions */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Training Sessions</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {upcomingSessions.map((session, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                        <div>
                          <h3 className="font-semibold text-gray-900">{session.program}</h3>
                          <p className="text-sm text-gray-600">Starts: {session.startDate}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant={session.status === 'Open' ? 'default' : 'secondary'}>
                            {session.status}
                          </Badge>
                          <Button size="sm" onClick={() => handleRegistration(session.program)}>
                            Register
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
