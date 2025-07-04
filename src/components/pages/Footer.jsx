// 'use client'
// import React from 'react';
// import { Layout, Input, Button, Row, Col, Typography, Divider } from 'antd';

// const { Footer } = Layout;
// const { Text, Link } = Typography;
// const { TextArea } = Input;

// const AppFooter = () => {
//   return (
//     <div className=''>

//     <Footer className="py-12 bg-black text-white bg-gradient-to-r from-black to-red-900">
//       <div className="w-full min-h-full ">
//         <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-6 pb-4">
//           <Row gutter={[16, 24]} className="mb-2">
//             {/* Logo Column */}
//             <Col xs={24} sm={24} md={6} lg={6} xl={6} className="mb-4 md:mb-0">
//               <div className="flex items-center">
//                 <div className="  bg-red-600 flex items-center justify-center">
//                 <Link href="/"><img className="md:h-40 rounded-lg md:rounded-none" src="/images/logo.png" alt="Logo"/></Link>
//                 </div> 
//               </div>
//             </Col>

//             {/* Quick Links Column */}
//             <Col xs={24} sm={12} md={8} lg={8} xl={8}>
//               <Text className="text-white font-medium text-base mb-4 block">Quick links</Text>
//               <div className="flex flex-col gap-2">
//                 <Link href="#" className="!text-white hover:text-white">
//                   Home
//                 </Link>
//                 <Link href="#" className="!text-white hover:text-white">
//                   Store
//                 </Link>
//                 <Link href="#" className="!text-white hover:text-white">
//                   Consultation
//                 </Link>
//                 <Link href="#" className="!text-white hover:text-white">
//                   Training Program
//                 </Link>
//               </div>
//             </Col>

//             {/* Contact Form Column */}
//             <Col xs={24} sm={12} md={10} lg={10} xl={10}>
//               <Text className="text-white font-medium text-base mb-4 block">Need help?</Text>
//               <div className="mb-4">
//                 <Text className="text-gray-300 block mb-2">Email Us</Text>
//                 <TextArea
//                   placeholder="Type your message"
//                   autoSize={{ minRows: 2, maxRows: 3 }}
//                   className="w-[240px] bg-white border-gray-700 rounded"
//                 />
//               </div>
//                 <Button 
//                   danger 
//                   className=" hover:bg-red-700 border-none rounded px-6"
//                 >
//                   Send
//                 </Button>
//             </Col>
//           </Row>
          
//           <Divider className="border-gray-700 my-4" />
          
//           <div className="text-center text-gray-400 text-xs">
//             © 2024 Suplify Inc. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </Footer>
//     </div>
//   );
// };

// export default AppFooter;



import { Row, Col, Button } from 'antd';

const Footer = () => {
  return (
    <div
      className="bg-gray-900 text-gray-400 py-16"
      style={{
        backgroundImage: `url('/images/footer.png')`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 bg-black bg-opacity-60 py-8 rounded-lg">
        <Row gutter={[32, 32]} justify="space-between" align="top">
          <Col xs={24} sm={6}>
            <div className="mb-4">
              <h3 className="text-white font-semibold mb-2">Ghorari</h3>
              <p>24 Shantibag New Avenue, Halishohor, Chittagong</p>
            </div>
            <div className="flex space-x-4">
              <span className="text-gray-500">📧</span>
              <span className="text-gray-500">📞</span>
              <span className="text-gray-500">🌐</span>
            </div>
          </Col>
          <Col xs={24} sm={6}>
            <h3 className="text-white font-semibold mb-2">Categories</h3>
            <ul className="space-y-2">
              <li>Latest Properties</li>
              <li>Featured Properties</li>
              <li>Agents</li>
            </ul>
          </Col>
          <Col xs={24} sm={6}>
            <h3 className="text-white font-semibold mb-2">More</h3>
            <ul className="space-y-2">
              <li>Search Properties</li>
              <li>All Listings</li>
            </ul>
          </Col>
          <Col xs={24} sm={6}>
            <h3 className="text-white font-semibold mb-2">Account</h3>
            <ul className="space-y-2">
              <li>Log in</li>
              <li>Sign up</li>
            </ul>
          </Col>
          <Col xs={24} sm={6} className="text-right">
            <Button type="primary" className="bg-white text-gray-900 hover:bg-gray-200">
              Book A Call
            </Button>
          </Col>
        </Row>
        <div className="mt-8 text-center text-gray-500">
          <p>Privacy Policy | Terms of Service</p>
          <p className="mt-2">Copyright © 2025 Ghorari. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;