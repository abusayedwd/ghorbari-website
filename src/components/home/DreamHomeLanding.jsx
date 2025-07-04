'use client'

import React from 'react';
import { Button, Card } from 'antd';
import { CheckCircleOutlined, ExpandOutlined, HomeOutlined,BedOutlined } from '@ant-design/icons';
 
const DreamHomeLanding = () => {
  const features = [
    {
      title: "Personalized Property Alerts",
      description: "Get notified when new properties match your criteria",
      icon: <CheckCircleOutlined className="text-orange-500" />
    },
    {
      title: "Virtual Tours Available",
      description: "Explore properties from the comfort of your home",
      icon: <CheckCircleOutlined className="text-orange-500" />
    },
    {
      title: "Expert Negotiation Support",
      description: "Our agents help you get the best possible deal",
      icon: <CheckCircleOutlined className="text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Find Your Dream Home?
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Join thousands of satisfied homeowners who found their perfect property with Ghorbari. 
                Our expert agents will guide you through every step of the process, from search to closing.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Button 
                  type="primary" 
                  size="large"
                  className="bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  Get Started
                </Button>
                <Button 
                  size="large"
                  className="border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800 px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  Contact an Agent
                </Button>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Property Card */}
          <div className="flex justify-center lg:justify-end">
            <Card 
              className="w-full max-w-md shadow-xl rounded-2xl overflow-hidden border-0"
              cover={
                <div className="relative">
                  <img
                    alt="Contemporary Urban Residence"
                    src="/images/new1.png"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              }
              bodyStyle={{ padding: '24px' }}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Contemporary Urban Residence
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nestled amidst serene woodlands, this luxury house gracefully sits atop a hill...
                  </p>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    {/* <BedOutlined className="text-gray-500" /> */}
                    <span>3 Rooms</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HomeOutlined className="text-gray-500" />
                    <span>5 Bathroom</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ExpandOutlined className="text-gray-500" />
                    <span>560 ft²</span>
                  </div>
                </div>

                {/* Price */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    $ 780,000
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      type="primary"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 h-10 rounded-lg font-semibold"
                    >
                      View Details
                    </Button>
                    <Button 
                      className="flex-1 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800 h-10 rounded-lg font-semibold"
                    >
                      Schedule Tour
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamHomeLanding;