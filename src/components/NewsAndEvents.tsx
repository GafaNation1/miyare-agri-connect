
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsAndEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Modern Dairy Farming Workshop",
      date: "2024-01-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Training Hall",
      type: "Workshop",
      participants: 50,
      description: "Learn modern dairy farming techniques and best practices for increased productivity."
    },
    {
      id: 2,
      title: "Sustainable Crop Production Seminar",
      date: "2024-01-22",
      time: "10:00 AM - 3:00 PM",
      location: "Agricultural Demo Farm",
      type: "Seminar",
      participants: 75,
      description: "Discover sustainable farming methods that protect the environment while maximizing yields."
    },
    {
      id: 3,
      title: "Youth in Agriculture Conference",
      date: "2024-02-05",
      time: "8:00 AM - 6:00 PM",
      location: "Conference Center",
      type: "Conference",
      participants: 200,
      description: "Engaging young people in modern agricultural practices and entrepreneurship opportunities."
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "New Agricultural Technology Laboratory Launched",
      date: "2024-01-10",
      category: "Infrastructure",
      excerpt: "State-of-the-art laboratory facility equipped with modern equipment for soil testing and crop analysis..."
    },
    {
      id: 2,
      title: "Partnership with International Agricultural Organization",
      date: "2024-01-08",
      category: "Partnership",
      excerpt: "Miyare ATC signs MoU with FAO to enhance agricultural training programs and research initiatives..."
    },
    {
      id: 3,
      title: "Record Enrollment for Certificate Programs",
      date: "2024-01-05",
      category: "Education",
      excerpt: "Over 500 students enrolled for the new academic year across various agricultural training programs..."
    }
  ];

  const handleRegistration = () => {
    window.open('https://forms.google.com/d/e/1FAIpQLSc_event_registration_form', '_blank');
  };

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            News & Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments, upcoming training programs, and important announcements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-agricultural-green mr-2" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-agricultural-green text-white">
                        {event.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{event.date}</span>
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
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
                    <Button 
                      className="w-full bg-agricultural-green hover:bg-green-700"
                      onClick={handleRegistration}
                    >
                      Register Now <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
            <div className="space-y-4">
              {latestNews.map((news) => (
                <Card key={news.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{news.category}</Badge>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {news.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{news.excerpt}</p>
                    <Link to={`/news/${news.id}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* News Ticker */}
        <div className="mt-12 bg-agricultural-green rounded-lg p-4 text-white">
          <div className="flex items-center">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold text-sm mr-4">
              ANNOUNCEMENT
            </span>
            <div className="flex-1 overflow-hidden">
              <p className="animate-pulse">
                🎓 New agricultural technology courses starting February 2024 | 
                📅 Registration deadline: January 31st | 
                💼 Job placement assistance available for all graduates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
