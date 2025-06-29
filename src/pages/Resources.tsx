
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Video, BookOpen, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: "Course Brochures",
      icon: FileText,
      items: [
        { title: "Certificate in Crop Production Brochure", type: "PDF", size: "2.1 MB", downloads: 245 },
        { title: "Diploma in Agricultural Technology Guide", type: "PDF", size: "3.4 MB", downloads: 189 },
        { title: "Modern Dairy Farming Course Overview", type: "PDF", size: "1.8 MB", downloads: 167 },
        { title: "Poultry Production Program Details", type: "PDF", size: "2.3 MB", downloads: 134 }
      ]
    },
    {
      category: "Application Forms",
      icon: FileText,
      items: [
        { title: "General Course Application Form", type: "PDF", size: "0.5 MB", downloads: 892 },
        { title: "Accommodation Booking Form", type: "PDF", size: "0.3 MB", downloads: 456 },
        { title: "Seminar Registration Form", type: "PDF", size: "0.4 MB", downloads: 278 },
        { title: "Research Collaboration Application", type: "PDF", size: "0.7 MB", downloads: 123 }
      ]
    },
    {
      category: "Training Manuals",
      icon: BookOpen,
      items: [
        { title: "Sustainable Crop Production Manual", type: "PDF", size: "8.2 MB", downloads: 567 },
        { title: "Livestock Management Handbook", type: "PDF", size: "6.7 MB", downloads: 432 },
        { title: "Soil Health and Fertility Guide", type: "PDF", size: "4.9 MB", downloads: 398 },
        { title: "Pest and Disease Control Manual", type: "PDF", size: "5.3 MB", downloads: 345 }
      ]
    },
    {
      category: "Research Publications",
      icon: BookOpen,
      items: [
        { title: "Climate Change Impact on Agriculture in Migori County", type: "PDF", size: "3.1 MB", downloads: 234 },
        { title: "Drought Resistant Crop Varieties Study", type: "PDF", size: "2.8 MB", downloads: 198 },
        { title: "Sustainable Farming Practices Research", type: "PDF", size: "4.2 MB", downloads: 176 },
        { title: "Economic Impact of Agricultural Training Programs", type: "PDF", size: "2.5 MB", downloads: 145 }
      ]
    },
    {
      category: "Video Resources",
      icon: Video,
      items: [
        { title: "Modern Farming Techniques Demonstration", type: "MP4", size: "125 MB", downloads: 89 },
        { title: "Dairy Farming Best Practices", type: "MP4", size: "98 MB", downloads: 76 },
        { title: "Crop Disease Identification Guide", type: "MP4", size: "67 MB", downloads: 54 },
        { title: "Sustainable Agriculture Practices", type: "MP4", size: "112 MB", downloads: 43 }
      ]
    }
  ];

  const handleDownload = (resourceTitle: string) => {
    // In a real application, this would trigger the actual download
    alert(`Downloading: ${resourceTitle}\n\nThis is a demo - the actual file download will be implemented when real resources are uploaded.`);
  };

  const handleExternalLink = (linkType: string) => {
    const links = {
      'Government Portal': 'https://migori.go.ke',
      'Ministry of Agriculture': 'https://agriculture.go.ke',
      'KALRO': 'https://kalro.org',
      'FAO Kenya': 'https://fao.org'
    };
    window.open(links[linkType as keyof typeof links] || '#', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Downloads & Resources</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Access comprehensive agricultural resources including course materials, 
                application forms, training manuals, and research publications.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {resources.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <category.icon className="h-8 w-8 text-agricultural-green mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <Badge variant="outline">{item.type}</Badge>
                                <span>{item.size}</span>
                                <span>{item.downloads} downloads</span>
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            className="w-full bg-agricultural-green hover:bg-green-700"
                            onClick={() => handleDownload(item.title)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">External Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Government Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Migori County official website and resources</p>
                  <Button 
                    variant="outline" 
                    onClick={() => handleExternalLink('Government Portal')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Ministry of Agriculture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">National agricultural policies and guidelines</p>
                  <Button 
                    variant="outline" 
                    onClick={() => handleExternalLink('Ministry of Agriculture')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">KALRO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Kenya Agricultural Research Organization</p>
                  <Button 
                    variant="outline" 
                    onClick={() => handleExternalLink('KALRO')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">FAO Kenya</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">UN Food and Agriculture Organization</p>
                  <Button 
                    variant="outline" 
                    onClick={() => handleExternalLink('FAO Kenya')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Contact our resource center for assistance 
                with downloads, technical support, or to request specific materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-agricultural-green hover:bg-green-700">
                  Contact Resource Center
                </Button>
                <Button variant="outline">
                  Request Resources
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
