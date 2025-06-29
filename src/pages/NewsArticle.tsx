
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsArticle = () => {
  const { id } = useParams();

  const articles = {
    '1': {
      title: "New Agricultural Technology Laboratory Launched",
      date: "January 10, 2024",
      category: "Infrastructure",
      author: "Dr. Sarah Achieng",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Miyare Agricultural Training Center has officially launched its state-of-the-art Agricultural Technology Laboratory, marking a significant milestone in our commitment to providing world-class agricultural education and research facilities.</p>
        
        <p>The new laboratory, funded by a partnership between Migori County Government and international development partners, features cutting-edge equipment for soil analysis, crop disease diagnosis, and agricultural research.</p>
        
        <h3>Key Features of the New Laboratory:</h3>
        <ul>
          <li>Advanced soil testing equipment for nutrient analysis</li>
          <li>Microscopy facilities for plant pathology studies</li>
          <li>Climate-controlled seed storage units</li>
          <li>Water quality testing capabilities</li>
          <li>Digital imaging systems for crop monitoring</li>
        </ul>
        
        <p>The laboratory will serve not only our students and researchers but also provide testing services to farmers across Migori County and neighboring regions. This facility will enhance our ability to provide accurate, science-based recommendations to improve agricultural productivity.</p>
        
        <p>"This laboratory represents our commitment to evidence-based agriculture," said Dr. Sarah Achieng, Director of Miyare ATC. "Our farmers will now have access to precise soil and crop analysis, enabling them to make informed decisions about fertilizer application, crop selection, and disease management."</p>
        
        <p>The laboratory is expected to serve over 500 farmers in its first year of operation and will be instrumental in conducting research on drought-resistant crop varieties and sustainable farming practices adapted to our local climate conditions.</p>
      `
    },
    '2': {
      title: "Partnership with International Agricultural Organization",
      date: "January 8, 2024",
      category: "Partnership",
      author: "Prof. James Ochieng",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Miyare Agricultural Training Center has signed a groundbreaking Memorandum of Understanding (MoU) with the Food and Agriculture Organization (FAO) to enhance agricultural training programs and strengthen research initiatives in the region.</p>
        
        <p>This partnership, formalized during a ceremony attended by senior officials from both organizations, will bring international expertise and funding to support agricultural development in Migori County and the wider East African region.</p>
        
        <h3>Partnership Highlights:</h3>
        <ul>
          <li>Technical assistance for curriculum development</li>
          <li>Staff exchange programs with international institutions</li>
          <li>Funding for research on climate-smart agriculture</li>
          <li>Access to global best practices in agricultural training</li>
          <li>Capacity building workshops for trainers and extension officers</li>
        </ul>
        
        <p>The collaboration will focus on developing sustainable agricultural practices that address climate change challenges while improving food security and farmer incomes. Special emphasis will be placed on supporting smallholder farmers with improved access to knowledge, technology, and markets.</p>
        
        <p>"This partnership opens new opportunities for our institution to contribute to global food security efforts while strengthening local agricultural systems," noted Prof. James Ochieng, Head of Training Programs.</p>
        
        <p>The first phase of the partnership will include the development of a regional training program on climate-smart agriculture, expected to train 200 extension officers from across East Africa over the next two years.</p>
        
        <p>Additionally, the partnership will establish a research fund to support studies on drought-resistant crops, sustainable livestock management, and innovative farming technologies suitable for the African context.</p>
      `
    },
    '3': {
      title: "Record Enrollment for Certificate Programs",
      date: "January 5, 2024",
      category: "Education",
      author: "Mary Wanjiku",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: `
        <p>Miyare Agricultural Training Center has achieved a historic milestone with over 500 students enrolled for the new academic year across our various agricultural training programs, representing a 35% increase from the previous year.</p>
        
        <p>This record enrollment reflects the growing recognition of our programs' quality and the increasing demand for skilled agricultural professionals in Kenya and the broader East African region.</p>
        
        <h3>Enrollment Breakdown by Program:</h3>
        <ul>
          <li>Certificate in Crop Production: 180 students</li>
          <li>Diploma in Agricultural Technology: 120 students</li>
          <li>Modern Dairy Farming Course: 95 students</li>
          <li>Poultry Production & Management: 85 students</li>
          <li>Sustainable Horticulture: 70 students</li>
        </ul>
        
        <p>The increased enrollment has necessitated expansion of our facilities and recruitment of additional qualified instructors. We have added two new training halls and upgraded our practical training areas to accommodate the larger student population.</p>
        
        <p>"We are thrilled by this tremendous response from young people and practicing farmers who recognize the value of formal agricultural training," said Mary Wanjiku, Outreach Coordinator. "This enrollment increase demonstrates the growing professionalization of agriculture in our region."</p>
        
        <p>To support our students, we have also expanded our scholarship program, providing financial assistance to 75 deserving students from low-income families. Additionally, we have strengthened partnerships with financial institutions to offer affordable student loans.</p>
        
        <p>The diverse student body includes recent high school graduates, practicing farmers seeking to upgrade their skills, and professionals transitioning into agriculture. International students from Tanzania, Uganda, and Rwanda make up 12% of the enrollment.</p>
        
        <p>Our career services department has already begun working with agricultural companies, NGOs, and government agencies to ensure graduate placement opportunities match this increased output of trained agricultural professionals.</p>
      `
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-agricultural-green hover:bg-green-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Article Header */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-block mb-6">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to News
                </Button>
              </Link>
              
              <Badge className="bg-agricultural-green text-white mb-4">
                {article.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {article.author}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                  />
                  
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
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

export default NewsArticle;
