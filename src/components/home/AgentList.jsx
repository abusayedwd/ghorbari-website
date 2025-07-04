import { Row, Col, Button } from 'antd';

const AgentList = () => {
  const agents = [
    { name: 'Ford Clinton', role: 'Listing Agent', listings: 3, image: '/images/agent1.png' 

    },
    { name: 'Hassan Patrick', role: 'Sales Person', listings: 2, 
      image: '/images/agent1.png' },
    { name: 'Mike Rutter', role: 'Commercial Broker', listings: 2, 
      image: '/images/agent2.png' },
    { name: 'Chloe Waterwood', role: 'Realtor', listings: 2, 
      image: '/images/agent2.png' },
    { name: 'Jessy King', role: 'Commercial Broker', listings: 5, 
      image: '/images/agent1.png' },
  ];

  return (
    <div className="py-10 lg:container bg-white text-center">
       <div className='mb-4'>
          <h1 className="text-[40px] font-bold">Our <span className='text-[#FF6625]'>Agents</span>  </h1>
          <p className="text-gray-600 text-sm font-semibold">Explore the world-class agents</p>
        </div>
      <Row gutter={[32, 32]} justify="center">
        {agents.map((agent, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <img src={agent.image} alt={agent.name} className="w-full h-auto rounded-md mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">{agent.name}</h3>
              <p className="text-gray-600">{agent.role}</p>
              <p className="text-gray-500 mt-1">{agent.listings} listing{agent.listings !== 1 ? 's' : ''}</p>
            </div>
          </Col>
        ))}
        <Col xs={24} sm={12} md={8}>
          <div className="bg-orange-50 p-6 rounded-lg shadow-md border border-orange-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ghorari</h3>
            <p className="text-gray-600 mb-4">
              Our agent are available to help with your property search and give your enquiries on the best offers.
            </p>
            <Button type="primary" size="large" className="bg-orange-500 text-white hover:bg-orange-600">
              Sign up
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AgentList;