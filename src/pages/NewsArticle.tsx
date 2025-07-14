
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Share2, Eye } from 'lucide-react';

const NewsArticle = () => {
  const { id } = useParams();

  // Mock article data - in real app this would come from API
  const article = {
    id: id,
    title: "New Agricultural Technology Laboratory Launched",
    date: "2024-01-10",
    author: "Dr. Jane Kamau",
    category: "Infrastructure",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>Miyare Agricultural Training Center proudly announces the launch of its state-of-the-art Agricultural Technology Laboratory, marking a significant milestone in agricultural education and research in Western Kenya.</p>
      
      <p>The new facility, equipped with cutting-edge equipment worth over KES 15 million, will serve as a hub for soil testing, crop analysis, and agricultural research. This investment underscores our commitment to providing world-class training and advancing agricultural knowledge in the region.</p>
      
      <h3>Key Features of the New Laboratory</h3>
      <ul>
        <li>Advanced soil analysis equipment for pH, nutrient content, and microorganism testing</li>
        <li>Plant pathology section for disease diagnosis and treatment research</li>
        <li>Seed quality testing facilities</li>
        <li>Water quality analysis equipment for irrigation systems</li>
        <li>Digital microscopy stations for detailed crop and soil examination</li>
      </ul>
      
      <p>The laboratory will support both our training programs and ongoing research initiatives. Students enrolled in our certificate and diploma programs will have hands-on access to professional-grade equipment, ensuring they graduate with practical skills demanded by modern agriculture.</p>
      
      <h3>Research Opportunities</h3>
      <p>The facility opens new doors for collaborative research with international agricultural organizations. We are already in discussions with the Food and Agriculture Organization (FAO) and local universities to establish joint research programs focused on climate-smart agriculture and sustainable farming practices.</p>
      
      <p>Local farmers will also benefit from subsidized soil and crop testing services, helping them make informed decisions about fertilizer application, crop selection, and soil management practices.</p>
      
      <p>The laboratory was officially opened by the Migori County Governor, who praised the center's contribution to agricultural development in the region. "This facility positions Migori County as a leader in agricultural innovation and education," the Governor stated during the opening ceremony.</p>
      
      <p>Training sessions in the new laboratory begin next month, with specialized courses in soil science, plant pathology, and agricultural diagnostics now available for enrollment.</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Back Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link 
              to="/news-events" 
              className="inline-flex items-center text-government-blue hover:text-agricultural-green transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News & Events
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Badge className="mb-4">{article.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    {article.readTime}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Back to News Button */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/news-events">
                  <Button className="bg-agricultural-green hover:bg-green-700">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to News & Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsArticle;
