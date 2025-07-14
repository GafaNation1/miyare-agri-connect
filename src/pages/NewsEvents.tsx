
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, MapPin, Users, ExternalLink, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: "Modern Dairy Farming Workshop",
      date: "2024-01-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Training Hall",
      type: "Workshop",
      participants: 50,
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Learn modern dairy farming techniques and best practices for increased productivity.",
      category: "livestock"
    },
    {
      id: 2,
      title: "Sustainable Crop Production Seminar",
      date: "2024-01-22",
      time: "10:00 AM - 3:00 PM",
      location: "Agricultural Demo Farm",
      type: "Seminar",
      participants: 75,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Discover sustainable farming methods that protect the environment while maximizing yields.",
      category: "crops"
    },
    {
      id: 3,
      title: "Youth in Agriculture Conference",
      date: "2024-02-05",
      time: "8:00 AM - 6:00 PM",
      location: "Conference Center",
      type: "Conference",
      participants: 200,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Engaging young people in modern agricultural practices and entrepreneurship opportunities.",
      category: "outreach"
    },
    {
      id: 4,
      title: "Organic Farming Certification Course",
      date: "2024-02-12",
      time: "9:00 AM - 5:00 PM",
      location: "Organic Demo Plot",
      type: "Course",
      participants: 30,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Get certified in organic farming practices and learn about sustainable agriculture.",
      category: "crops"
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "New Agricultural Technology Laboratory Launched",
      date: "2024-01-10",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "State-of-the-art laboratory facility equipped with modern equipment for soil testing and crop analysis..."
    },
    {
      id: 2,
      title: "Partnership with International Agricultural Organization",
      date: "2024-01-08",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Miyare ATC signs MoU with FAO to enhance agricultural training programs and research initiatives..."
    },
    {
      id: 3,
      title: "Record Enrollment for Certificate Programs",
      date: "2024-01-05",
      category: "Education",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Over 500 students enrolled for the new academic year across various agricultural training programs..."
    },
    {
      id: 4,
      title: "Successful Farmer Field Day Attracts 300 Participants",
      date: "2024-01-03",
      category: "Outreach",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      excerpt: "Annual farmer field day showcases latest agricultural innovations and best practices..."
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'crops', label: 'Crop Production' },
    { value: 'livestock', label: 'Livestock' },
    { value: 'outreach', label: 'Outreach' },
    { value: 'education', label: 'Education' }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = () => {
    // Search functionality is already live via filteredEvents
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Events</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Stay updated with the latest agricultural developments, training programs, 
                and community events at Miyare Agricultural Training Center.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search events and news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Button 
                  onClick={handleSearch}
                  className="absolute right-2 top-1 h-8 px-3 bg-agricultural-green hover:bg-green-700"
                  size="sm"
                >
                  Search
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border rounded-md bg-white"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow h-full">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4 bg-agricultural-green text-white">
                      {event.type}
                    </Badge>
                    <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                      {categories.find(cat => cat.value === event.category)?.label || event.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {event.participants} seats
                      </div>
                    </div>
                    <Link to="/event-registration">
                      <Button className="w-full bg-agricultural-green hover:bg-green-700">
                        Register Now <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((news) => (
                <Card key={news.id} className="hover:shadow-lg transition-shadow h-full">
                  <div className="relative">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-4 left-4" variant="outline">
                      {news.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link to={`/news/${news.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-agricultural-green">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h3 className="text-2xl font-bold mb-4">Never Miss an Update</h3>
              <p className="text-green-100 mb-6">
                Subscribe to our newsletter to receive the latest news, event announcements, 
                and agricultural insights directly in your inbox.
              </p>
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                onClick={() => window.open('https://forms.google.com/d/e/1FAIpQLSc_newsletter_signup', '_blank')}
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsEvents;
