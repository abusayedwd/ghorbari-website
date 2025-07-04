import React from 'react';
import { Card, Badge, Button } from 'antd';
import { EnvironmentOutlined, EyeOutlined, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Suburb Home",
      location: "Downtown",
      price: "$1.2M",
     image: "/images/feature1.png",
      views: "2.1k",
      type: "House",
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 2,
      title: "Smart Home Duplex",
      location: "Central",
      price: "$850K",
     image: "/images/feature2.png",
      views: "1.8k",
      type: "Duplex",
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 3,
      title: "Luxury House",
      location: "Oceanside",
      price: "$2.5M",
      image: "/images/new1.png",
      views: "3.2k",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 4
    },
    {
      id: 4,
      title: "Gorgeous Villa for Rent",
      location: "Sunny City",
      price: "$4.2K/mo",
      image: "/images/new2.png",
      views: "1.5k",
      type: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      isRental: true
    }
  ];

  const PropertyCard = ({ property }) => (
    <Card
      className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden border-0"
      cover={
        <div className="relative overflow-hidden">
          <img
            alt={property.title}
            src={property.image}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge 
              color={property.isRental ? "green" : "blue"} 
              text={property.isRental ? "For Rent" : "For Sale"}
              className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium"
            />
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              type="text"
              icon={<HeartOutlined />}
              className="bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
            />
            <Button
              type="text"
              icon={<EyeOutlined />}
              className="bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center"
            />
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-1 text-sm">
              <EyeOutlined className="text-xs" />
              <span>{property.views}</span>
            </div>
          </div>
        </div>
      }
      actions={[
        <Button type="primary" className="mx-4 mb-2 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 border-0 hover:from-blue-600 hover:to-purple-700">
          View Details
        </Button>
      ]}
    >
      <div className="p-2">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <span className="text-2xl font-bold text-green-600">
            {property.price}
          </span>
        </div>
        
        <div className="flex items-center gap-1 mb-3 text-gray-600">
          <EnvironmentOutlined className="text-blue-500" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {property.bedrooms} Beds
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {property.bathrooms} Baths
            </span>
          </div>
          <Badge 
            color="orange" 
            text={property.type}
            className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs"
          />
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="lg:container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r text-[#FF6625] bg-clip-text text-transparent mb-4">
            Featured Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our hand-picked selection of exceptional properties that offer the best in luxury, location, and value.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Footer Stats */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            <span className="bg-white text-blue-500 px-3 py-1 rounded-full text-sm">
              592 × 358.61
            </span>
            <span>Properties Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;