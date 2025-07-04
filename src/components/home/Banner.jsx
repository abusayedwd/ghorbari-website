


"user client"

import { Button } from 'antd'
import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons' 
export default function Banner() {

// import { Bricolage_Grotesque } from 'next/font/google';

 

  const stats = [
    { number: '2,500+', label: 'Properties' },
    { number: '1,800+', label: 'Happy Clients' },
    { number: '35+', label: 'Cities' },
  ]

  return (
    <section className="relative ">
      {/* Background Image */}
  <div 
    className="absolute inset-0 w-full pb-6 h-full bg-no-repeat bg-right"
    style={{
      backgroundImage: "url('/images/bgimage1.png')"
    }}
  />
      {/* Overlay */}
      <div className="absolute inset-0 ml-12 "  />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff6b35]/10 text-[#ff6b35] text-sm font-medium mb-6">
              welcome to the future of Real Estate
            </div>

            {/* Title */}
            <h1 className="text-4xl font-mono sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find the{' '}
              <span className="text-[#ff6b35] relative">
                perfect
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#ff6b35]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
              <br />
              Property with
              <br />
              Ghorbari
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#4B5563] mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover your dream home with our curated selection of premium properties. 
              Expert guidance from search to closing.
            </p>

            {/* Buttons */}
            <div className="md:flex  gap-4 justify-center lg:justify-start mb-12">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="bg-[#ff6b35] my-2 hover:bg-[#e55a2b] border-[#ff6b35] hover:border-[#e55a2b] rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Explore Properties
              </Button>
              <Button
                size="large"
                icon={<PlayCircleOutlined />}
                className="border-[#ff6b35] my-2 text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 mb-12 gap-8 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#ff6b35] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
         
        </div>
      </div> 
    </section>
  )
}



// "use client"
// // components/Banner.tsx
// import { Button } from 'antd'
// import { ArrowRightOutlined, PlayCircleOutlined } from '@ant-design/icons'

// export default function Banner() {
//   const stats = [
//     { number: '2,500+', label: 'Properties' },
//     { number: '1,800+', label: 'Happy Clients' },
//     { number: '35+', label: 'Cities' },
//   ]

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background Image */}
//        <div 
//   className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//   style={{
//     backgroundImage: "url('/images/bgimage1.png')",
//     height: "900px"
//   }} 
// />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r" />
      
//       {/* Additional subtle overlay for better contrast */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />

//       <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">
//         {/* Left Content Section */}
//         <div className="relative flex items-center">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-5">
//             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//               <path d="M0,0 L100,0 L100,80 Q75,100 50,80 T0,80 Z" fill="currentColor" />
//             </svg>
//           </div>
          
//           <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 py-20 lg:py-0">
//             {/* Badge */}
//             <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff6b35]/20 backdrop-blur-sm text-[#ff6b35] text-sm font-medium mb-6 border border-[#ff6b35]/30">
//               welcome to the future of Real Estate
//             </div>

//             {/* Title */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
//               Find the{' '}
//               <span className="text-[#ff6b35] relative">
//                 perfect
//                 <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff6b35]/50 rounded-full"></div>
//               </span>
//               <br />
//               Property with
//               <br />
//               Ghorbari
//             </h1>

//             {/* Subtitle */}
//             <p className="text-lg text-gray-200 mb-8 max-w-lg drop-shadow-sm">
//               Discover your dream home with our curated selection of premium properties. 
//               Expert guidance from search to closing.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Button
//                 type="primary"
//                 size="large"
//                 icon={<ArrowRightOutlined />}
//                 className="bg-[#ff6b35] hover:bg-[#e55a2b] border-[#ff6b35] hover:border-[#e55a2b] rounded-full px-8 py-6 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               >
//                 Explore Properties
//               </Button>
//               <Button
//                 size="large"
//                 icon={<PlayCircleOutlined />}
//                 className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-full px-8 py-6 h-auto text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
//               >
//                 Learn More
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 max-w-md">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-left">
//                   <div className="text-2xl lg:text-3xl font-bold text-[#ff6b35] mb-1 drop-shadow-sm">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-300 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Empty for full background image effect */}
//         <div className="relative">
//           {/* Decorative elements */}
//           <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#ff6b35]/20 rounded-full blur-2xl"></div>
//         </div>
//       </div>

//       {/* Floating elements for visual interest */}
//       <div className="absolute top-20 right-20 w-4 h-4 bg-[#ff6b35]/30 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-32 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce"></div>
//     </section>
//   )
// }