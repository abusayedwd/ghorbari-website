import { Row, Col, Input, Button } from 'antd';

const Contact = () => {
  return (
    <div className="md:py-12 py-8 bg-orange-50 md:min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Get in touch</h1>
        <p className="text-gray-600 mb-6 text-center">
          Contact us today if you'd like to know more about how we help buy, sell or rent your home
        </p>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input placeholder="Jane Smith" className="w-full mb-4 rounded-md" />
          </Col>
          <Col span={12}>
            <Input placeholder="HelloGhorari" className="w-full mb-4 rounded-md" />
          </Col>
          <Col span={24}>
            <Input placeholder="Email" className="w-full mb-4 rounded-md" />
          </Col>
          <Col span={24}>
            <Button type="primary" size="large" className="w-full bg-gray-800 text-white hover:bg-gray-700 rounded-md">
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;