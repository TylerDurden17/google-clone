import React from 'react';

const ProductLabel = ({ price }) => {
  return (
    <div className="bg-white bg-opacity-70 text-black flex items-center space-x-2 px-3 py-1 rounded-lg">
      <span
        className="notranslate wNvWob"
        aria-hidden="true"
        alt="Product label tag"
      >
        <svg
          enableBackground="new 0 0 24 24"
          focusable="false"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          className="text-black"
        >
          <g>
            <rect fill="none" height="24" width="24" />
          </g>
          <g>
            <g>
              <path d="M19,2h-5.87c-0.8,0-1.56,0.32-2.12,0.88l-8.13,8.13c-1.17,1.17-1.17,3.07,0,4.24l5.87,5.87C9.34,21.71,10.11,22,10.87,22s1.54-0.29,2.12-0.88L21.12,13c0.56-0.56,0.88-1.33,0.88-2.12V5C22,3.34,20.66,2,19,2z M20,10.88c0,0.27-0.1,0.52-0.29,0.71l-8.13,8.12C11.33,19.97,11.03,20,10.87,20s-0.45-0.04-0.71-0.29l-5.87-5.87C4.04,13.58,4,13.29,4,13.13s0.04-0.45,0.29-0.71l8.13-8.13C12.61,4.1,12.87,4,13.13,4H19c0.55,0,1,0.45,1,1V10.88z" />
              <circle cx="16.5" cy="7.5" r="1.5" />
            </g>
          </g>
        </svg>
      </span>
      <span className="text-black">{price}</span>
    </div>
  );
};

const ResultsSection = () => {
  const mockData = {
    mainImage: "https://cataas.com/cat",
    relatedSearches: [
      {
        brand: "Uniqlo",
        name: "Uniqlo Sweat Cardigan",
        price: "₹2,490.00*",
        image: "https://cataas.com/cat",
        inStock: true,
        logo: "/api/placeholder/24/24"
      },
      {
        brand: "UNIQLO US",
        name: "Fleece Full-Zip Jacket Winter",
        price: "₹4,960.00*",
        image: "https://cataas.com/cat",
        inStock: true
      },
      {
        brand: "H&M",
        name: "THERMOLITE Relaxed Fit Teddy jacket",
        price: "₹2,249.00*",
        image: "https://cataas.com/cat",
        rating: 4.6,
        reviews: 373,
        inStock: false,
        platform: "H&M"
      },
      {
        brand: "The Indian Garage Co.",
        name: "Full Sleeve Solid Men Jacket",
        price: "₹799.00*",
        image: "https://cataas.com/cat",
        platform: "Flipkart",
        inStock: true
      }
    ]
  };

  return (
    <>
    

<div style={{maxHeight:"900px", overflowY:"auto"}} className="w-2/5 p-4">
          
          <div className="grid grid-cols-2 gap-4">
            {mockData.relatedSearches.map((item, index) => (
              <div key={index} className="flex flex-col p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="relative w-full h-48">
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 left-2 bg-opacity-50 text-white text-sm px-3 py-1 rounded-lg">
                    <ProductLabel price={item.price} />
                  </div>
                </div>
          
                <br></br>
                <div style={{color:"#000"}} className="flex-1">
                  <div className="flex items-start space-x-2">
                    {item.logo && (
                      <img 
                        src="https://cataas.com/cat"
                        alt={item.brand}
                        className="w-6 h-6"
                      />
                    )}
                    <div>
                      <p className="text-sm text-gray-600">{item.brand}</p>
                      <p className="font-medium line-clamp-2">{item.name}</p>
                      <p className="text-sm mt-1 font-medium">{item.price}</p>
                      {item.platform && (
                        <p className="text-sm text-gray-500">{item.platform}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-2">
                    {item.inStock ? (
                      <span className="text-green-600 text-sm">In stock</span>
                    ) : (
                      <span className="text-red-600 text-sm">Out of stock</span>
                    )}
                  </div>
                  {item.rating && (
                    <div className="flex items-center mt-1">
                      <span className="text-sm">{item.rating} ★</span>
                      <span className="text-sm text-gray-500 ml-1">({item.reviews})</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          {/* Feedback Section */}
          <div style={{position:"fixed", bottom:"10px"}} className="mt-6 flex justify-between text-sm text-gray-600 pt-4 w-[37%]">
          <div style={{display:"flex"}}>
          <svg width="20" height="20" viewBox="0 0 24 24" focusable="false" className="HxfNeb NMm5M">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12z" fill="grey" />
          <path d="M11 12h2v2h-2zm0-6h2v4h-2z" />
          </svg>&nbsp;<span>Did you find these results useful?</span>
          </div>
            <div className="space-x-4">
              <b>
              <button className="text-blue-600">Yes</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="text-blue-600">No</button></b>
            </div>
          </div>
          </div>
          
          </div>
    </>
  );
};

export default ResultsSection;