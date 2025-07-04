// import React from 'react';
// import { Heart, ChevronRight } from 'lucide-react';

// export default function FitnessPage() {
//   // Sample product data
//   const supplements = [
//     {
//       id: 1,
//       name: 'Supplements',
//       price: 250,
//       image: '/images/fitnesss.png',
//       description: 'Description for this item is very brief. Click here to learn more to know in details of the item...'
//     },
//     {
//       id: 2,
//       name: 'Supplements',
//       price: 250,
//       image: '/images/fitnesss.png',
//       description: 'Description for this item is very brief. Click here to learn more to know in details of the item...'
//     },
//     {
//       id: 3,
//       name: 'Supplements',
//       price: 250,
//       image: '/images/fitnesss.png',
//       description: 'Description for this item is very brief. Click here to learn more to know in details of the item...'
//     },
//     {
//       id: 4,
//       name: 'Supplements',
//       price: 250,
//       image: '/images/fitnesss.png',
//       description: 'Description for this item is very brief. Click here to learn more to know in details of the item...'
//     }
//   ];

//   return (
//     <div className="  mx-auto px-4 py-6">
//       {/* Header with "See More" link */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-bold">Fitness</h1>
//         <a href="#" className="text-blue-600 flex items-center text-sm">
//           See More <ChevronRight size={16} />
//         </a>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {supplements.map((product) => (
//           <SupplementCard 
//             key={product.id}
//             name={product.name}
//             price={product.price}
//             image={product.image}
//             description={product.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function SupplementCard({ name, price, image, description }) {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden">
//       {/* Product Image with Wishlist Button */}
//       <div className="relative">
//         <div className="bg-red-500  w-full">
//           <img 
//             src={image} 
//             alt={name} 
//             className="w-full object-cover" 
//           />
//         </div>
//         {/* <button className="absolute top-2 right-2 bg-white p-1 rounded-full" aria-label="Add to wishlist">
//           <Heart size={20} className="text-gray-500" />
//         </button> */}
//       </div>
      
//       {/* Product Info */}
//       <div className="p-3">
//         <div className="text-sm text-gray-600 mb-1">{name}</div>
//         <div className="flex justify-between items-center mb-2">
//           <div className="text-lg font-bold">${price}</div>
//           <button className="text-red-500 border border-red-500 p-1 rounded-md" aria-label="Add to cart">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
//               <path d="M20 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
//               <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//             </svg>
//           </button>
//         </div>
//         <p className="text-xs text-gray-500">
//           {description.substring(0, 85)}
//           <a href="#" className="text-blue-500 ml-1">see more</a>
//         </p>
//       </div>
//     </div>
//   );
// }


// FitnessPage.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import { productData } from './productData';

const FitnessPage = () => {

    const fitness= [
        { id: 2, category: 'fitness', name: 'Resistance Bands', price: 150, image: '/images/fitnesss.png' },
        { id: 9, category: 'fitness', name: 'Dumbbells', price: 300, image: '/images/fitnesss.png' },
      ]



  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };
  
  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div>
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackToProducts} />
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Fitness</h2>
          </div>
          
          <div className="grid grid-cols-1  lg:grid-cols-4 gap-4">
            {fitness?.map(product => (
              <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FitnessPage;