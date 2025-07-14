
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Download, BookOpen, Search, Eye } from 'lucide-react';

const TrainingManualsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const manuals = [
    {
      title: "Modern Crop Production Handbook",
      description: "Comprehensive guide covering soil preparation, planting, pest management, and harvesting techniques.",
      category: "crops",
      level: "Intermediate",
      pages: "156 pages",
      size: "4.2 MB",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      topics: ["Soil Science", "Seed Selection", "Irrigation", "Pest Control"]
    },
    {
      title: "Dairy Farming Best Practices",
      description: "Complete manual for modern dairy farm management, from breeding to milk production.",
      category: "livestock",
      level: "Advanced",
      pages: "201 pages",
      size: "5.8 MB",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      topics: ["Cattle Breeding", "Nutrition", "Milking", "Health Management"]
    },
    {
      title: "Poultry Production Guide",
      description: "Essential manual for successful poultry farming covering all aspects of chicken and egg production.",
      category: "livestock",
      level: "Beginner",
      pages: "98 pages",
      size: "2.9 MB",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      topics: ["Housing", "Feeding", "Disease Prevention", "Marketing"]
    },
    {
      title: "Sustainable Agriculture Practices",
      description: "Environmental-friendly farming methods that promote long-term soil health and productivity.",
      category: "sustainability",
      level: "Intermediate",
      pages: "134 pages",
      size: "3.7 MB",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      topics: ["Organic Methods", "Composting", "Water Conservation", "Biodiversity"]
    },
    {
      title: "Agricultural Business Management",
      description: "Business planning, financial management, and marketing strategies for agricultural enterprises.",
      category: "business",
      level: "Advanced",
      pages: "189 pages",
      size: "4.5 MB",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      topics: ["Business Planning", "Financial Analysis", "Market Research", "Risk Management"]
    },
    {
      title: "Greenhouse Management Manual",
      description: "Complete guide to greenhouse construction, climate control, and protected cultivation.",
      category: "technology",
      level: "Advanced",
      pages: "167 pages",
      size: "6.1 MB",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      topics: ["Construction", "Climate Control", "Hydroponics", "Crop Selection"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Manuals' },
    { value: 'crops', label: 'Crop Production' },
    { value: 'livestock', label: 'Livestock' },
    { value: 'sustainability', label: 'Sustainability' },
    { value: 'business', label: 'Business' },
    { value: 'technology', label: 'Technology' }
  ];

  const filteredManuals = manuals.filter(manual => {
    const matchesSearch = manual.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         manual.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || manual.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (title: string) => {
    alert(`${title} download will be available soon. Please contact us for immediate access.`);
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Manuals</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Access our comprehensive collection of training manuals and guides 
                covering various aspects of modern agriculture.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search training manuals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.value)}
                    className={selectedCategory === category.value ? 
                      "bg-agricultural-green hover:bg-green-700" : 
                      "hover:bg-agricultural-green hover:text-white"
                    }
                    size="sm"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredManuals.map((manual, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={manual.image} 
                      alt={manual.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-agricultural-green text-white">
                        {manual.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                      <BookOpen className="h-6 w-6 text-agricultural-green" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{manual.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{manual.description}</p>
                    
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>{manual.pages}</span>
                      <span>{manual.size}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {manual.topics.map((topic, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handlePreview(manual.title)}
                        variant="outline" 
                        size="sm"
                        className="flex-1"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button 
                        onClick={() => handleDownload(manual.title)}
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

export default TrainingManualsPage;
