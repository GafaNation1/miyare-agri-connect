
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Calendar, Users } from 'lucide-react';

const ApplicationFormsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const forms = [
    {
      title: "Training Program Application Form",
      description: "General application form for all certificate and diploma programs.",
      category: "programs",
      format: "PDF",
      size: "245 KB",
      deadline: "Rolling Admission",
      requirements: ["Completed form", "ID copy", "Academic certificates"]
    },
    {
      title: "Short Course Registration Form",
      description: "Quick registration for workshops and short-term courses.",
      category: "workshops",
      format: "PDF",
      size: "180 KB",
      deadline: "1 week before course",
      requirements: ["Completed form", "Payment receipt"]
    },
    {
      title: "Event Registration Form",
      description: "Registration for seminars, conferences, and special events.",
      category: "events",
      format: "PDF",
      size: "156 KB",
      deadline: "3 days before event",
      requirements: ["Completed form", "Contact information"]
    },
    {
      title: "Research Collaboration Application",
      description: "Application for researchers and institutions seeking collaboration.",
      category: "research",
      format: "PDF",
      size: "312 KB",
      deadline: "Quarterly review",
      requirements: ["Proposal", "CV", "Institution letter"]
    },
    {
      title: "Accommodation Request Form",
      description: "Request form for on-campus accommodation during training.",
      category: "accommodation",
      format: "PDF",
      size: "198 KB",
      deadline: "2 weeks before arrival",
      requirements: ["Training confirmation", "Payment"]
    },
    {
      title: "Financial Aid Application",
      description: "Application for scholarships and financial assistance programs.",
      category: "financial",
      format: "PDF",
      size: "267 KB",
      deadline: "30 days before course",
      requirements: ["Financial statement", "Recommendation letter"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Forms' },
    { value: 'programs', label: 'Training Programs' },
    { value: 'workshops', label: 'Workshops' },
    { value: 'events', label: 'Events' },
    { value: 'research', label: 'Research' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'financial', label: 'Financial Aid' }
  ];

  const filteredForms = forms.filter(form => 
    selectedCategory === 'all' || form.category === selectedCategory
  );

  const handleDownload = (title: string) => {
    alert(`${title} download will be available soon. Please contact our office for immediate access.`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Application Forms</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Download the necessary forms for training programs, events, and services. 
                Complete and submit as per the requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={selectedCategory === category.value ? 
                    "bg-agricultural-green hover:bg-green-700" : 
                    "hover:bg-agricultural-green hover:text-white"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredForms.map((form, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-agricultural-green text-white">
                        {form.format}
                      </Badge>
                      <span className="text-sm text-gray-500">{form.size}</span>
                    </div>
                    <CardTitle className="text-xl flex items-start">
                      <FileText className="h-5 w-5 text-agricultural-green mr-2 mt-1 flex-shrink-0" />
                      {form.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{form.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 text-agricultural-green mr-2" />
                        <span className="font-medium">Deadline:</span>
                        <span className="ml-1">{form.deadline}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Users className="h-4 w-4 text-agricultural-green mr-2" />
                        Requirements:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {form.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-agricultural-green rounded-full mr-2"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      onClick={() => handleDownload(form.title)}
                      className="w-full bg-agricultural-green hover:bg-green-700"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Form
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationFormsPage;
