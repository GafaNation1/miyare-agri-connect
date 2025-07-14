
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Eye } from 'lucide-react';

const CourseBrochuresPage = () => {
  const brochures = [
    {
      title: "Certificate in Crop Production",
      description: "Comprehensive guide to modern crop production techniques and sustainable farming practices.",
      pages: "24 pages",
      size: "2.1 MB",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Diploma in Agricultural Technology",
      description: "Advanced training program covering agricultural engineering and farm management.",
      pages: "48 pages",
      size: "3.8 MB",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Modern Dairy Farming Course",
      description: "Complete handbook for dairy cattle management and milk production optimization.",
      pages: "32 pages",
      size: "2.7 MB",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Sustainable Horticulture Program",
      description: "Organic farming methods and greenhouse management techniques.",
      pages: "28 pages",
      size: "2.3 MB",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const handleDownload = (title: string) => {
    alert(`${title} brochure download will be available soon. Please contact us for immediate access.`);
  };

  const handlePreview = (title: string) => {
    alert(`${title} preview will open in a new window. Feature coming soon.`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Brochures</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Download detailed information about our training programs, course content, 
                and enrollment requirements.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brochures.map((brochure, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={brochure.image} 
                      alt={brochure.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                      <FileText className="h-6 w-6 text-agricultural-green" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{brochure.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{brochure.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>{brochure.pages}</span>
                      <span>{brochure.size}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handlePreview(brochure.title)}
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        onClick={() => handleDownload(brochure.title)}
                        className="flex-1 bg-agricultural-green hover:bg-green-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
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

export default CourseBrochuresPage;
