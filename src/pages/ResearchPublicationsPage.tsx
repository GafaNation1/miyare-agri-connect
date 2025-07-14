
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Download, FileText, Search, Calendar, Users } from 'lucide-react';

const ResearchPublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const publications = [
    {
      title: "Impact of Climate Change on Crop Yield in Western Kenya",
      authors: ["Dr. Jane Kamau", "Prof. Peter Mwangi", "Dr. Sarah Ochieng"],
      year: "2024",
      journal: "East African Agricultural Research Journal",
      type: "Research Paper",
      pages: "45-62",
      doi: "10.1234/eaarj.2024.003",
      abstract: "This study examines the effects of changing climate patterns on major crop yields in Western Kenya over the past decade.",
      keywords: ["Climate Change", "Crop Yield", "Kenya", "Agriculture"]
    },
    {
      title: "Sustainable Dairy Farming Practices in Small-Scale Operations",
      authors: ["Dr. Michael Oloo", "Dr. Grace Wanjiku"],
      year: "2024",
      journal: "International Dairy Science Review",
      type: "Case Study",
      pages: "112-128",
      doi: "10.5678/idsr.2024.008",
      abstract: "A comprehensive analysis of sustainable practices adopted by small-scale dairy farmers and their impact on productivity.",
      keywords: ["Dairy Farming", "Sustainability", "Small-scale", "Productivity"]
    },
    {
      title: "Effectiveness of Integrated Pest Management in Maize Production",
      authors: ["Dr. Alice Nyong'o", "Prof. David Kiprotich", "Dr. James Mutua"],
      year: "2023",
      journal: "Crop Protection Quarterly",
      type: "Research Paper",
      pages: "23-41",
      doi: "10.9012/cpq.2023.015",
      abstract: "Evaluation of IPM strategies in maize cultivation and their effectiveness in reducing pesticide use while maintaining yields.",
      keywords: ["IPM", "Maize", "Pest Management", "Sustainable Agriculture"]
    },
    {
      title: "Economic Analysis of Greenhouse Vegetable Production",
      authors: ["Dr. Robert Kibet", "Dr. Margaret Adhiambo"],
      year: "2023",
      journal: "Agricultural Economics Today",
      type: "Economic Analysis",
      pages: "78-95",
      doi: "10.3456/aet.2023.021",
      abstract: "Cost-benefit analysis of greenhouse vegetable production compared to open-field cultivation in semi-arid regions.",
      keywords: ["Greenhouse", "Economics", "Vegetable Production", "Cost-benefit"]
    },
    {
      title: "Water Conservation Techniques in Dryland Agriculture",
      authors: ["Dr. Francis Mburu", "Dr. Helen Aketch", "Prof. Samuel Kiplimo"],
      year: "2023",
      journal: "Water Management in Agriculture",
      type: "Review Article",
      pages: "156-174",
      doi: "10.7890/wma.2023.012",
      abstract: "Review of water conservation methods and their effectiveness in dryland farming systems across East Africa.",
      keywords: ["Water Conservation", "Dryland Agriculture", "Irrigation", "Efficiency"]
    },
    {
      title: "Adoption of Mobile Technology in Agricultural Extension Services",
      authors: ["Dr. Catherine Muthoni", "Dr. Paul Wekesa"],
      year: "2022",
      journal: "Digital Agriculture Journal",
      type: "Technology Study",
      pages: "89-107",
      doi: "10.1357/daj.2022.006",
      abstract: "Study on the adoption and impact of mobile technology platforms in delivering agricultural extension services to farmers.",
      keywords: ["Mobile Technology", "Extension Services", "Digital Agriculture", "Adoption"]
    }
  ];

  const years = ['all', '2024', '2023', '2022', '2021', '2020'];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         pub.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = selectedYear === 'all' || pub.year === selectedYear;
    return matchesSearch && matchesYear;
  });

  const handleDownload = (title: string) => {
    alert(`${title} download will be available soon. Please contact our research department for access.`);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Research Paper': return 'bg-blue-500';
      case 'Case Study': return 'bg-green-500';
      case 'Review Article': return 'bg-purple-500';
      case 'Economic Analysis': return 'bg-orange-500';
      case 'Technology Study': return 'bg-cyan-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Publications</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Access our latest research findings, studies, and publications 
                contributing to agricultural knowledge and innovation.
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
                  placeholder="Search publications, authors, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 border rounded-md"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {filteredPublications.map((publication, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={`${getTypeColor(publication.type)} text-white`}>
                        {publication.type}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {publication.year}
                      </div>
                    </div>
                    <CardTitle className="text-xl flex items-start">
                      <FileText className="h-5 w-5 text-agricultural-green mr-2 mt-1 flex-shrink-0" />
                      {publication.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Users className="h-4 w-4 mr-2 text-agricultural-green" />
                        <span className="font-medium">Authors:</span>
                        <span className="ml-2">{publication.authors.join(', ')}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Journal:</span> {publication.journal}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Pages:</span> {publication.pages}
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        <span className="font-medium">DOI:</span> {publication.doi}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Abstract:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {publication.abstract}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Keywords:</h4>
                      <div className="flex flex-wrap gap-2">
                        {publication.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleDownload(publication.title)}
                        className="bg-agricultural-green hover:bg-green-700"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button variant="outline" size="sm">
                        View Abstract
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

export default ResearchPublicationsPage;
