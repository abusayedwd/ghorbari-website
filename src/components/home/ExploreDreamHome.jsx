import { Row, Col, Button } from 'antd';

const ExploreDreamHome = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="lg:container mx-auto px-4">
        <Row gutter={[16, 24]} justify="center" align="stretch">
          {/* Left Column - Dream Home Section */}
          <Col xs={24} md={12} lg={8}>
            <div className="bg-gradient-to-br  p-4 md:p-6 lg:p-8 rounded-xl shadow-lg h-full">
              <div className="text-left mb-4 md:mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                  Explore & Find your{' '}
                  <span className="text-orange-600">Dream home</span>
                </h2>
              </div>
              
              {/* House Image */}
              <div className="bg-white rounded-lg overflow-hidden mb-4 md:mb-6 shadow-md">
                <div className="relative">
                  <img 
                    src="/images/home2.png" 
                    alt="Modern Dream House" 
                    className="w-full h-48 md:h-64 lg:h-72 object-cover"
                  />
                </div>
              </div>
              
              {/* Client Avatars */}
              <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-600">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold">A</span>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold">B</span>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold">C</span>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs md:text-sm font-bold">D</span>
                  </div>
                </div>
                <span className="text-sm md:text-base font-medium ml-2">200+ Happy Client</span>
              </div>
            </div>
          </Col>

          {/* Middle Column - Interior Image */}
          <Col xs={24} md={12} lg={8}>
            <div className="bg-gray-50 rounded-xl shadow-lg h-full flex flex-col justify-center">
              {/* Interior Image */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="w-full h-48 lg:h-full md:h-80 relative">
                  <img 
                    src="/images/home1.png" 
                    alt="Modern Interior with Plants" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column - Stats & Content */}
          <Col xs={24} md={24} lg={8}>
            <div className="bg-gray-50 p-4 md:p-6 lg:p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
              {/* Quote */}
              <div className="flex-1">
                <blockquote className="text-gray-600 italic mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                  "We believe there's a perfect home for everybody, no matter the budget. That's why we always find the best homes for your budget."
                </blockquote>
                
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mb-4 md:mb-6">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">$200M+</h3>
                    <p className="text-sm md:text-base text-gray-600">Sold in Real Estate</p>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">100+</h3>
                    <p className="text-sm md:text-base text-gray-600">Property Sold</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-2 mb-6 md:mb-8">
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 flex-shrink-0"></div>
                    <span>Over 100+ property & update regularly</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 flex-shrink-0"></div>
                    <span>Expert agent consultation</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 flex-shrink-0"></div>
                    <span>Loan & low interest facility</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <Button 
                type="primary" 
                size="large" 
                className="w-full md:w-auto bg-gray-800 hover:bg-gray-700 border-gray-800 hover:border-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Browse Listings
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ExploreDreamHome;