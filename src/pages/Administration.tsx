
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { User, Building, Users, Phone, Mail, MapPin, Award, BookOpen, Target } from 'lucide-react';

const Administration = () => {
  const leadership = [
    {
      name: "Dr. Sarah Achieng",
      position: "Director",
      department: "Miyare Agricultural Training Center",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      qualifications: ["PhD in Agricultural Extension", "MSc in Crop Science", "20+ years experience"],
      responsibilities: ["Strategic planning", "Policy implementation", "Stakeholder relations", "Overall center management"],
      email: "director@miyareagri.migori.go.ke",
      phone: "+254 XXX XXX XXX"
    },
    {
      name: "Prof. James Ochieng",
      position: "Deputy Director (Academics)",
      department: "Training & Education",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      qualifications: ["PhD in Agricultural Education", "MSc in Animal Science", "18 years experience"],
      responsibilities: ["Academic programs", "Curriculum development", "Quality assurance", "Student affairs"],
      email: "deputy.academics@miyareagri.migori.go.ke",
      phone: "+254 XXX XXX XXX"
    },
    {
      name: "Mary Wanjiku",
      position: "Head of Extension Services",
      department: "Outreach & Extension",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      qualifications: ["MSc in Agricultural Extension", "BSc in Agriculture", "15 years experience"],
      responsibilities: ["Community outreach", "Farmer training", "Extension programs", "Field demonstrations"],
      email: "extension@miyareagri.migori.go.ke",
      phone: "+254 XXX XXX XXX"
    },
    {
      name: "Dr. Peter Otieno",
      position: "Head of Research",
      department: "Research & Development",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      qualifications: ["PhD in Soil Science", "MSc in Agronomy", "12 years experience"],
      responsibilities: ["Research projects", "Innovation development", "Technology transfer", "Publications"],
      email: "research@miyareagri.migori.go.ke",
      phone: "+254 XXX XXX XXX"
    }
  ];

  const departments = [
    {
      name: "Training & Education Department",
      head: "Prof. James Ochieng",
      staff: 15,
      responsibilities: [
        "Certificate and diploma programs",
        "Short-term training courses",
        "Curriculum development",
        "Student assessment and certification",
        "Library and learning resources"
      ],
      programs: ["Crop Production Certificate", "Livestock Management Diploma", "Agricultural Technology Course"]
    },
    {
      name: "Extension & Outreach Department",
      head: "Mary Wanjiku",
      staff: 12,
      responsibilities: [
        "Farmer field schools",
        "Community mobilization",
        "Demonstration plots",
        "Mobile extension services",
        "Youth and women programs"
      ],
      programs: ["Mobile Extension", "Farmer Field Schools", "Youth in Agriculture", "Women Empowerment"]
    },
    {
      name: "Research & Development Department",
      head: "Dr. Peter Otieno",
      staff: 8,
      responsibilities: [
        "Applied agricultural research",
        "Technology development",
        "Variety trials",
        "Publication of research findings",
        "Collaboration with universities"
      ],
      programs: ["Crop Research", "Livestock Research", "Soil Studies", "Climate Research"]
    },
    {
      name: "Administration & Finance Department",
      head: "Grace Nyong'o",
      staff: 10,
      responsibilities: [
        "Human resource management",
        "Financial management",
        "Procurement and supplies",
        "Facility maintenance",
        "Information systems"
      ],
      programs: ["HR Services", "Financial Management", "Procurement", "ICT Support"]
    }
  ];

  const governmentStructure = [
    {
      level: "County Level",
      title: "Migori County Government",
      head: "H.E. Governor Ochilo Ayacko",
      role: "Policy formulation and resource allocation for agricultural development",
      connection: "Direct supervision and funding"
    },
    {
      level: "Department Level",
      title: "Department of Agriculture",
      head: "County Executive Committee Member for Agriculture",
      role: "Implementation of agricultural policies and programs",
      connection: "Administrative oversight"
    },
    {
      level: "Directorate Level",
      title: "Directorate of Agricultural Training",
      head: "County Director of Agriculture",
      role: "Coordination of agricultural training institutions",
      connection: "Technical supervision"
    },
    {
      level: "Institution Level",
      title: "Miyare Agricultural Training Center",
      head: "Dr. Sarah Achieng (Director)",
      role: "Direct service delivery and training implementation",
      connection: "Operational management"
    }
  ];

  const partnerships = [
    {
      type: "National Level",
      partners: [
        "Ministry of Agriculture, Livestock & Fisheries",
        "Kenya Agricultural Research Institute (KARI)",
        "National Irrigation Authority",
        "Agricultural Development Corporation (ADC)"
      ]
    },
    {
      type: "International",
      partners: [
        "Food and Agriculture Organization (FAO)",
        "World Bank Agricultural Projects",
        "USAID Agricultural Programs",
        "Netherlands Development Organization"
      ]
    },
    {
      type: "Academic",
      partners: [
        "University of Nairobi - Faculty of Agriculture",
        "Egerton University",
        "Maseno University",
        "Kenya Agricultural University"
      ]
    },
    {
      type: "Private Sector",
      partners: [
        "Seed and fertilizer companies",
        "Agricultural equipment suppliers",
        "Financial institutions",
        "Agribusiness companies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-government-blue to-blue-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Administrative Structure</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Comprehensive overview of the organizational structure, leadership, and governance 
                framework of Miyare Agricultural Training Center.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced leaders driving agricultural excellence and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                        <p className="text-agricultural-green font-medium mb-1">{leader.position}</p>
                        <p className="text-sm text-gray-500 mb-3">{leader.department}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Qualifications:</h4>
                          <ul className="space-y-1">
                            {leader.qualifications.map((qual, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <Award className="h-3 w-3 text-agricultural-green mr-2 flex-shrink-0" />
                                {qual}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {leader.responsibilities.slice(0, 3).map((resp, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <div className="w-2 h-2 bg-agricultural-green rounded-full mr-2 flex-shrink-0"></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-agricultural-green mr-2" />
                            {leader.email}
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-agricultural-green mr-2" />
                            {leader.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Departmental Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Specialized departments working together to deliver comprehensive agricultural services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{dept.name}</CardTitle>
                      <Badge variant="outline">{dept.staff} staff</Badge>
                    </div>
                    <p className="text-sm text-gray-500">Head: {dept.head}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Core Functions:</h4>
                      <ul className="space-y-1">
                        {dept.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <Target className="h-3 w-3 text-agricultural-green mr-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Programs:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.programs.map((program, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Government Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Government Structure & Affiliation
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our institutional framework within Migori County Government
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {governmentStructure.map((level, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-government-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <Building className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-government-blue text-white">{level.level}</Badge>
                            <h3 className="text-xl font-semibold text-gray-900">{level.title}</h3>
                          </div>
                          <p className="text-agricultural-green font-medium mb-2">{level.head}</p>
                          <p className="text-gray-600 mb-3">{level.role}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Target className="h-4 w-4 text-government-blue mr-2" />
                            <span className="font-medium">Connection:</span>
                            <span className="ml-2">{level.connection}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Strategic Partnerships
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Collaborative relationships that enhance our capacity and reach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Users className="h-5 w-5 text-agricultural-green mr-2" />
                      {partnership.type} Partners
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {partnership.partners.map((partner, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-agricultural-green rounded-full mr-3 flex-shrink-0"></div>
                          {partner}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Organizational Chart */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Organizational Chart
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visual representation of our institutional structure
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <div className="inline-block bg-government-blue text-white px-6 py-3 rounded-lg">
                    <h3 className="font-semibold">Migori County Government</h3>
                    <p className="text-sm">Department of Agriculture</p>
                  </div>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="bg-agricultural-green text-white px-6 py-3 rounded-lg">
                    <h3 className="font-semibold">Director</h3>
                    <p className="text-sm">Dr. Sarah Achieng</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { title: "Deputy Director", name: "Prof. James Ochieng", dept: "Academics" },
                    { title: "Head of Extension", name: "Mary Wanjiku", dept: "Outreach" },
                    { title: "Head of Research", name: "Dr. Peter Otieno", dept: "R&D" },
                    { title: "Head of Admin", name: "Grace Nyong'o", dept: "Administration" }
                  ].map((position, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-lg text-center">
                      <h4 className="font-semibold text-gray-900 mb-1">{position.title}</h4>
                      <p className="text-sm text-agricultural-green mb-1">{position.name}</p>
                      <p className="text-xs text-gray-500">{position.dept}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-agricultural-green">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto text-white">
              <h3 className="text-3xl font-bold mb-4">Contact Administration</h3>
              <p className="text-green-100 mb-8">
                Get in touch with our leadership team for partnerships, collaborations, 
                or official matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                  onClick={() => window.open('https://forms.google.com/d/e/1FAIpQLSc_admin_contact', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Contact Administration
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-agricultural-green"
                  onClick={() => window.open('tel:+254XXXXXXXXX')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Director's Office
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

export default Administration;
