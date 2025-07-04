import { Row, Col, Input, Button } from 'antd';

const Newsletter = () => {
  return (
    <div className="md:py-12 py-8 bg-white">
      <div className="bg-orange-50 p-6 py-12 rounded-lg shadow-md max-w-4xl mx-auto">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={16}>
            <div className="text-left">
              <h2 className="text-xl font-bold text-gray-800">There is always something new!</h2>
              <p className="text-gray-600">Don't miss out.</p>
              <p className="text-gray-600 mt-2">
                Get property updates and the latest on pricing for your next property decision.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <div className="flex items-center space-x-2">
              <Input placeholder="Enter email address" className="w-full rounded-md" />
              <Button type="primary" className="bg-gray-800 text-white hover:bg-gray-700">
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Newsletter;