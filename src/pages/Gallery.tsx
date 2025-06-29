
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Training Programs', 'Crop Production', 'Livestock', 'Events', 'Facilities', 'Outreach'];

  const images = [
    // Training Programs
    { id: 1, src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Training Programs", title: "Practical Training Session", description: "Students learning modern farming techniques" },
    { id: 2, src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Training Programs", title: "Classroom Learning", description: "Agricultural theory and best practices" },
    { id: 3, src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Training Programs", title: "Computer Training", description: "Digital agriculture and farm management" },
    { id: 4, src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Training Programs", title: "Workshop Session", description: "Hands-on training workshop" },
    { id: 5, src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Training Programs", title: "Student Presentation", description: "Knowledge sharing and presentations" },
    { id: 6, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Training Programs", title: "Research Work", description: "Students conducting agricultural research" },
    { id: 7, src: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Training Programs", title: "Technology Training", description: "Modern agricultural technology training" },
    { id: 8, src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Training Programs", title: "Digital Learning", description: "E-learning and digital resources" },
    
    // Crop Production
    { id: 9, src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Flower Cultivation", description: "Colorful flower farming demonstration" },
    { id: 10, src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Forest Agriculture", description: "Sustainable forest farming practices" },
    { id: 11, src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Tree Farming", description: "Agroforestry and tree cultivation" },
    { id: 12, src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Sunlight Farming", description: "Optimizing sunlight for crop growth" },
    { id: 13, src: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Forest Conservation", description: "Sustainable forest management" },
    { id: 14, src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Natural Lighting", description: "Natural farming environments" },
    { id: 15, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Water Management", description: "Irrigation and water conservation" },
    { id: 16, src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Mountain Agriculture", description: "Hillside farming techniques" },
    { id: 17, src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Grassland Management", description: "Pasture and grassland cultivation" },
    { id: 18, src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Crop Production", title: "Fruit Production", description: "Fruit farming and harvesting" },

    // Livestock
    { id: 19, src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Sheep Farming", description: "Sheep herding and management" },
    { id: 20, src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Animal Care", description: "Pet and livestock health care" },
    { id: 21, src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Wildlife Conservation", description: "Wildlife and livestock coexistence" },
    { id: 22, src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Cattle Farming", description: "Cattle rearing and management" },
    { id: 23, src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Small Animals", description: "Small animal husbandry" },
    { id: 24, src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Bee Keeping", description: "Apiculture and honey production" },
    { id: 25, src: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Grazing Management", description: "Pasture and grazing systems" },
    { id: 26, src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Marine Agriculture", description: "Aquaculture and fish farming" },
    { id: 27, src: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Animal Behavior", description: "Understanding animal behavior" },
    { id: 28, src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Forest Livestock", description: "Livestock in forest environments" },
    { id: 29, src: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Bird Farming", description: "Poultry and bird management" },
    { id: 30, src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Livestock", title: "Wildlife Study", description: "Wildlife research and conservation" },

    // Events
    { id: 31, src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Agricultural Conference", description: "Annual agricultural development conference" },
    { id: 32, src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Technology Fair", description: "Agricultural technology exhibition" },
    { id: 33, src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Workshop Setup", description: "Event preparation and setup" },
    { id: 34, src: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Innovation Showcase", description: "Technology and innovation demonstration" },
    { id: 35, src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Ideas Festival", description: "Innovation and ideas sharing event" },
    { id: 36, src: "https://images.unsplash.com/photo-1438565434616-3ef039228b15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Field Day", description: "Outdoor agricultural field day" },
    { id: 37, src: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Community Event", description: "Community engagement activities" },
    { id: 38, src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Events", title: "Group Activities", description: "Team building and group events" },

    // Facilities
    { id: 39, src: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Modern Buildings", description: "State-of-the-art training facilities" },
    { id: 40, src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Administrative Block", description: "Main administrative building" },
    { id: 41, src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Training Halls", description: "Spacious training and conference halls" },
    { id: 42, src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Research Center", description: "Agricultural research laboratories" },
    { id: 43, src: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Glass Houses", description: "Modern greenhouse facilities" },
    { id: 44, src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Sky View", description: "Architectural design and planning" },
    { id: 45, src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Infrastructure", description: "Modern infrastructure development" },
    { id: 46, src: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Building Complex", description: "Comprehensive facility complex" },
    { id: 47, src: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Modern Design", description: "Contemporary architectural design" },
    { id: 48, src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Interior Spaces", description: "Well-designed interior spaces" },
    { id: 49, src: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Natural Light", description: "Buildings with excellent natural lighting" },
    { id: 50, src: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Facilities", title: "Glass Architecture", description: "Modern glass building design" },

    // Outreach
    { id: 51, src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Community Center", description: "Community outreach center" },
    { id: 52, src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Rural Outreach", description: "Rural community engagement" },
    { id: 53, src: "https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Mobile Services", description: "Mobile outreach services" },
    { id: 54, src: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Field Stations", description: "Remote field stations" },
    { id: 55, src: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Extension Services", description: "Agricultural extension work" },
    { id: 56, src: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Community Buildings", description: "Community service buildings" },
    { id: 57, src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Cultural Centers", description: "Cultural and community centers" },
    { id: 58, src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Night Programs", description: "Evening and night outreach programs" },
    { id: 59, src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Animal Programs", description: "Livestock outreach programs" },
    { id: 60, src: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", category: "Outreach", title: "Technology Outreach", description: "Technology demonstration programs" }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < filteredImages.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-agricultural-green py-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Explore our comprehensive collection of photos showcasing training programs, 
                facilities, events, and agricultural activities at Miyare ATC.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-agricultural-green hover:bg-green-700" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Card 
                  key={image.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-black bg-opacity-50 text-white">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={filteredImages[selectedImage].src} 
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20"
                onClick={handleNextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-1">{filteredImages[selectedImage].title}</h3>
                  <p className="text-sm text-gray-300">{filteredImages[selectedImage].description}</p>
                  <Badge variant="secondary" className="mt-2 bg-agricultural-green text-white">
                    {filteredImages[selectedImage].category}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
