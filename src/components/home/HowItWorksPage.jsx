import { Row, Col } from 'antd';

const HowItWorks = () => {
  return (
    <div className="py-12 lg:container bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-4">How Ghorbar Works</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        We make it simple to find, purchase, or sell your property with our streamlined platform and expert agents.
      </p>
      <Row justify="center" gutter={[32, 32]}>
        <Col xs={24} sm={8}>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="text-xl font-semibold">Buy Properties</h3>
            <p className="text-gray-600 mt-2">
              Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📌</span>
            </div>
            <h3 className="text-xl font-semibold">Rent Properties</h3>
            <p className="text-gray-600 mt-2">
              We’re creating a seamless online experience – from shopping on the largest rental network, applying to paying rent.
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold">Lease Properties</h3>
            <p className="text-gray-600 mt-2">
              Whether you sell with new Homfort Offers or take another approach, we’ll help you navigate the path to a successful sale.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HowItWorks;