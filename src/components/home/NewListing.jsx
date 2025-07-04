import { Row, Col, Card, Tag, Button } from 'antd';
import { MapPin, Bed, Bath, Square, Heart, Share2 } from 'lucide-react';

const NewListing = () => {
  const properties = [
    {
      id: 1,
      image: "/images/new1.png",
      title: "Luxury Loft",
      location: "Jersey City",
      price: "$950,000",
      beds: 1,
      baths: 2,
      sqft: "600 ft²",
      tags: ["Sales", "Apartment"],
      timeAgo: "2 days ago",
      description: "Nestled in a charming suburban area, this stunning home rests on a spacious lot, offering..."
    },
    {
      id: 2,
      image: "/images/new2.png",
      title: "Cozy Condo",
      location: "Catskills",
      price: "$466,000/mo",
      beds: 4,
      baths: 4,
      sqft: "600 ft²",
      tags: ["Rent", "Houses"],
      timeAgo: "5 days ago",
      description: "Nestled amidst serene woodlands, this luxury house gracefully sits atop a hill..."
    },
    {
      id: 3,
     image: "/images/feature1.png",
      title: "Suburb Home",
      location: "Pleasantville",
      price: "$950,000",
      beds: 3,
      baths: 3,
      sqft: "600 ft²",
      tags: ["Sales", "Duplex"],
      timeAgo: "1 week ago",
      description: "Located in a charming suburban neighborhood, this beautiful home gracefully..."
    },
    {
      id: 4,
     image: "/images/feature2.png",
      title: "Smart Home Duplex",
      location: "Catskills",
      price: "$1500/mo",
      beds: 4,
      baths: 3,
      sqft: "600 ft²",
      tags: ["Rent", "Industrial"],
      timeAgo: "1 week ago",
      description: "Situated in a bustling urban neighborhood, this smart home duplex elegantly..."
    },
    {
      id: 5,
     image: "/images/new1.png",
      title: "Luxury House",
      location: "Catskills",
      price: "$980,000",
      beds: 3,
      baths: 5,
      sqft: "600 ft²",
      tags: ["Sales", "Offices"],
      timeAgo: "1 week ago",
      description: "Nestled amidst serene woodlands, this luxury house gracefully sits atop a hill..."
    },
    {
      id: 6,
     image: "/images/feature1.png",
      title: "Gorgeous Villa for Rent",
      location: "Jersey City",
      price: "$550,000",
      beds: 3,
      baths: 3,
      sqft: "600 ft²",
      tags: ["Sales", "Apartment"],
      timeAgo: "1 week ago",
      description: "Primarily enveloped in woodland, this property majestically stands on a crest..."
    }
  ];

  const getTagColor = (tag) => {
    const colors = {
      Sales: 'green',
      Rent: 'blue',
      Apartment: 'purple',
      Houses: 'orange',
      Duplex: 'cyan',
      Industrial: 'red',
      Offices: 'magenta'
    };
    return colors[tag] || 'default';
  };

  return (
    <div className="py-8 md:py-12 lg:py-16 bg-gray-50 min-h-screen">
      <div className="lg:container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4">
            New Listing
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Explore latest & featured properties for sale.
          </p>
        </div>

        {/* Properties Grid */}
        <Row gutter={[24, 24]}>
          {properties.map((property) => (
            <Col key={property.id} xs={24} md={12} lg={8}>
              <Card
                className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border-0"
                cover={
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 md:h-56 lg:h-64 object-cover"
                    />
                    {/* Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {property.tags.map((tag, index) => (
                        <Tag
                          key={index}
                          color={getTagColor(tag)}
                          className="px-3 py-1 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button
                        type="text"
                        icon={<Heart className="w-4 h-4" />}
                        className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-8 h-8 flex items-center justify-center p-0"
                      />
                      <Button
                        type="text"
                        icon={<Share2 className="w-4 h-4" />}
                        className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-8 h-8 flex items-center justify-center p-0"
                      />
                    </div>
                    {/* Time Ago */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white bg-opacity-80 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {property.timeAgo}
                      </span>
                    </div>
                  </div>
                }
              >
                <div className="p-4">
                  {/* Title and Location */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {property.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  {/* Property Details */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Bed className="w-4 h-4 mr-1" />
                        {property.beds} Room{property.beds > 1 ? 's' : ''}
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        {property.baths} Bathroom{property.baths > 1 ? 's' : ''}
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        {property.sqft}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">
                      {property.price}
                    </span>
                    <Button
                      type="primary"
                      className="bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 rounded-lg px-6"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Load More Button */}
        <div className="text-center mt-8 md:mt-12">
          <Button
            type="default"
            size="large"
            className="px-8 py-3 h-auto text-lg font-medium rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewListing;