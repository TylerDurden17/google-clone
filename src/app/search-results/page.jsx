"use client";
import React from 'react';
import { useState, useEffect, useRef } from "react";
import ResultsSection from './ResultsSection'
// import { Search, Camera, ArrowUpRight } from 'lucide-react';

// Glowing Stars Animation Component
const GlowingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array(20).fill(null).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: '20px',
            height: '20px',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 8px 2px rgba(255, 255, 255, 0.8)',
            animation: `glow ${star.duration}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
};

const RectangularLensCropper = ({ image, onCropComplete }) => {
  const containerRef = useRef(null);
  const [containerBounds, setContainerBounds] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 200, height: 200 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState(null);

  // Initialize container size and center the lens
  useEffect(() => {
    if (containerRef.current) {
      const bounds = containerRef.current.getBoundingClientRect();
      setContainerBounds({ width: bounds.width, height: bounds.height });
      
      // Center the lens initially
      setPosition({
        x: (bounds.width - size.width) / 2,
        y: (bounds.height - size.height) / 2
      });
    }
  }, []);

  const constrainPosition = (pos, newSize = size) => {
    return {
      x: Math.max(0, Math.min(pos.x, containerBounds.width - newSize.width)),
      y: Math.max(0, Math.min(pos.y, containerBounds.height - newSize.height))
    };
  };

  const constrainSize = (newSize, newPosition = position) => {
    return {
      width: Math.max(100, Math.min(newSize.width, containerBounds.width - newPosition.x)),
      height: Math.max(100, Math.min(newSize.height, containerBounds.height - newPosition.y))
    };
  };

  const handleDragStart = (e) => {
    if (e.target.classList.contains('resize-handle')) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleResizeStart = (e, handle) => {
    e.stopPropagation();
    setResizing(handle);
    setDragStart({
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newPosition = constrainPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
      setPosition(newPosition);
      
    } else if (resizing) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      
      setDragStart({ x: e.clientX, y: e.clientY });
      
      let newSize = size;
      let newPosition = position;

      switch (resizing) {
        case 'se':
          newSize = constrainSize({
            width: size.width + dx,
            height: size.height + dy
          });
          break;
        case 'sw':
          newPosition = constrainPosition({
            x: position.x + dx,
            y: position.y
          });
          newSize = constrainSize({
            width: size.width - dx,
            height: size.height + dy
          }, newPosition);
          break;
        case 'ne':
          newPosition = constrainPosition({
            x: position.x,
            y: position.y + dy
          });
          newSize = constrainSize({
            width: size.width + dx,
            height: size.height - dy
          }, newPosition);
          break;
        case 'nw':
          newPosition = constrainPosition({
            x: position.x + dx,
            y: position.y + dy
          });
          newSize = constrainSize({
            width: size.width - dx,
            height: size.height - dy
          }, newPosition);
          break;
      }

      setSize(newSize);
      setPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    if (isDragging || resizing) {
      onCropComplete({
        x: position.x,
        y: position.y,
        width: size.width,
        height: size.height
      });
    }
    setIsDragging(false);
    setResizing(null);
  };

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        overflow: 'hidden' // Prevents shadow overflow
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background Image */}
      <img
        src={image}
        alt="Source"
        style={{width: '100%', height: '600px'}}
        className=" object-contain"
      />
      
      {/* Lens/Selection Area */}
      <div
        className="absolute bg-transparent"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${size.width}px`,
          height: `${size.height}px`,
          boxShadow: '0 0 0 699px rgba(0, 0, 0, 0.5)',
          borderRadius:"20px",
        }}
        onMouseDown={handleDragStart}
      >
        {/* ROUNDED CORNERS*/}
        <div
          className="absolute -left-1 -top-1"
          style={{
            width: '80px',
            height: '80px',
            background: 'transparent',
            borderRadius: '20px 0 0 0',
            borderLeft: '4px solid white',
            borderTop: '4px solid white',
            clipPath: 'polygon(0 0, 40% 0, 0 40%)'
          }}>
        </div>
        <div
          className="absolute -right-1 -top-1"
          style={{
            width: '80px',
            height: '80px',
            background: 'transparent',
            borderRadius: '0 20px 0 0',
            borderRight: '4px solid white',
            borderTop: '4px solid white',
            clipPath: 'polygon(100% 0, 60% 0, 100% 40%)'
          }}>
        </div>
        <div
          className="absolute -left-1 -bottom-1"
          style={{
            width: '80px',
            height: '80px',
            background: 'transparent',
            borderRadius: '0 0 0 20px',
            borderLeft: '4px solid white',
            borderBottom: '4px solid white',
            clipPath: 'polygon(0 100%, 0 60%, 40% 100%)'
          }}>
        </div>
        <div
          className="absolute -right-1 -bottom-1"
          style={{
            width: '80px',
            height: '80px',
            background: 'transparent',
            borderRadius: '0 0 20px 0',
            borderRight: '4px solid white',
            borderBottom: '4px solid white',
            clipPath: 'polygon(100% 100%, 100% 60%, 60% 100%)'
          }}>
        </div>
        <div
          className="resize-handle absolute -left-1 -top-1 w-4 h-4 border-2 opacity-[0] cursor-nw-resize bg-black/20"
          onMouseDown={(e) => handleResizeStart(e, 'nw')}
        >
        </div>
        <div 
          className="resize-handle absolute -right-1 -top-1 w-4 h-4 border-2 opacity-[0] cursor-ne-resize bg-black/20"
          onMouseDown={(e) => handleResizeStart(e, 'ne')}
        ></div>
        <div 
          className="resize-handle absolute -left-1 -bottom-1 w-4 h-4 border-2 opacity-[0] cursor-sw-resize bg-black/20"
          onMouseDown={(e) => handleResizeStart(e, 'sw')}
        ></div>
        <div 
          className="resize-handle absolute -right-1 -bottom-1 w-4 h-4 border-2 opacity-[0] cursor-se-resize bg-black/20"
          onMouseDown={(e) => handleResizeStart(e, 'se')}
        ></div>
      </div>
    </div>
  );
};

const GoogleLensShop = () => {
  const [isCropping, setIsCropping] = useState(false);
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


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCropping(true);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCropComplete = (cropData) => {
    console.log('Crop completed:', cropData);
    // setIsCropping(false);
  };

  return (
    <div className="w-full bg-white">

      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center space-x-2">
          <img 
            src="https://lh3.googleusercontent.com/d_S5gxu_S1P6NR1gXeMthZeBzkrQMHdI5uvXrpn3nfJuXpCjlqhLQKH_hbOxTHxFhp5WugVOEcl4WDrv9rmKBDOMExhKU5KmmLFQVg" 
            alt="Google" 
            className="h-10" 
          />
        </div>
        <div className="flex items-center space-x-2">
          <button style={{display:"flex"}} className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" className=" NMm5M"><path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m4.41-7.59L11 7.83V16h2V7.83l2.59 2.59L17 9l-5-5-5 5 1.41 1.41z"></path></svg>
            &nbsp;&nbsp;&nbsp;<span style={{color:"grey"}}>Upload</span>
          </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="p-2">
            {/* <Camera className="w-6 h-6" /> */}
            <img src='https://ssl.gstatic.com/gb/images/bar/al-icon.png'></img>
          </button>
          <img src="https://cataas.com/cat" style={{ borderRadius: '50%', width: '34px', height: '34px' }} />
        </div>
      </div>
      <div className="flex w-full">
        {/* Main Image Section */}
        <div style={{padding:"10%", maxHeight:"100px"}} className="w-3/5 bg-gray-900 min-h-screen relative">


        <div className="relative h-full">
            {isCropping ? (
              <RectangularLensCropper 
                image={mockData.mainImage}
                onCropComplete={handleCropComplete}
              />
            ) : (
              <img 
                src={mockData.mainImage}
                alt="Main product" 
                style={{ width: '100%', height: '600px' }}
                className="w-full h-full object-contain"
              />
            )}
            {!isCropping && <GlowingStars />}
          </div>

          <div style={{display:"flex", justifyContent:"center"}} className="absolute top-0 left-0 right-0 p-4">
            <button style={{border:"1px solid grey", fontFamily:"Roboto,sans-serif", fontSize:"18px"}} className="bg-gray-800/80 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
              {/* <Search className="w-4 h-4" /> */}
              <svg enableBackground="new 0 0 24 24" height="18" viewBox="0 0 24 24" width="18" focusable="false" className="VTbk7c NMm5M">
                <rect fill="none" height="24" width="24"></rect>
                <path fill="#FFFFFF" d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path>
              </svg><span>Find image source</span>
            </button>
          </div>

          <div style={{marginBottom:"128px"}} className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4">
            <div style={{background:"#393c40", borderRadius:"20px", height:"35px", display:"flex"}}>
              <div style={{background:"#fff", color:"#000", height:"33px", fontSize:"14px", fontFamily:"Roboto,sans-serif", display:"flex", alignItems:"center", cursor: "pointer"}} className="text-white px-6 py-2 rounded-full text-sm"><span >Search</span></div>
              <div style={{display:"flex", alignItems:"center", cursor: "pointer"}} className="text-white px-6 py-2 rounded-full text-sm">Text</div>
              <div style={{display:"flex", alignItems:"center", cursor: "pointer"}} className="text-white px-6 py-2 rounded-full text-sm">Translate</div>
            </div>
          </div>
          
        </div>

        {/* Results Section */}
        <ResultsSection/>
      </div>
    </div>
  );
};

export default GoogleLensShop;