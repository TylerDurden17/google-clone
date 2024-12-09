"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockImageResults } from "../components/results";
import SearchBar from "../components/SearchBar";

const ImagePreview = ({ image, onClose }) => {
  const [panelWidth, setPanelWidth] = useState("auto");
  const imageRef = useRef();

  useEffect(() => {
    if (imageRef.current) {
      setPanelWidth(`${imageRef.current.offsetWidth}px`);
    }
  }, [image]);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="preview-panel fixed top-[150px] right-0 h-full bg-[#1f1f1f] shadow-lg z-50"
      style={{ width: panelWidth }}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        ×
      </button>
      <div className="mt-8">
        <img
          ref={imageRef}
          src={image.link}
          alt={image.title}
          className="max-w-full h-auto"
        />
        <div className="mt-4 text-white">
          <h2 className="text-xl">{image.title}</h2>
          <p className="text-sm text-gray-300">{image.source}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TopicChip = ({ label, active = false }) => (
  <button
    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap
      ${active 
        ? "bg-[#303134] text-white" 
        : "bg-[#303134] text-gray-300 hover:bg-[#404040]"}`}
  >
    {label}
  </button>
);

const ResultsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainContentWidth, setMainContentWidth] = useState('100%');
  const scrollContainerRef = useRef(null);

  const scrollTopics = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };
  // Add effect to calculate the main content width
  useEffect(() => {
    if (selectedImage) {
      // Get the preview panel width and subtract it from the window width
      const previewWidth = document.querySelector('.preview-panel')?.offsetWidth || 0;
      const remainingWidth = `calc(100% - ${previewWidth}px)`;
      setMainContentWidth(remainingWidth);
    } else {
      setMainContentWidth('100%');
    }
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-[#1f1f1f] overflow-y-auto">
      {/* Search Bar Section */}
      <header className="sticky top-0 px-6 py-3 bg-[#1f1f1f]">
        {/* Logo and Search */}
        <div className="flex items-center space-x-6">
          <div className="mt-10">
            <img
              style={{ width: "122px", aspectRatio: "auto 272 / 92", height: "42px" }}
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
            />
          </div>
          <div className="mt-8 w-full max-w-xl">
            <SearchBar />
          </div>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center mt-2 text-sm">
          <div className="flex space-x-1 ml-32">
            <a href="#" className="flex items-center px-3 py-2 text-[#969ba1] hover:text-white">
              <span>All</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-[#8ab4f8] border-b-2 border-[#fff]">
              <span>Images</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-[#969ba1] hover:text-white">
              <span>Videos</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-[#969ba1] hover:text-white">
              <span>News</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-[#969ba1] hover:text-white">
              <span>Shopping</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-[#969ba1] hover:text-white">
              <span>Books</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-[#969ba1] hover:text-white">
              <span>Maps</span>
            </a>
          </div>
        </div>

        {/* Topics Scroll */}
        <div className="relative px-6 mt-2">
          <button
            onClick={() => scrollTopics('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#202124] to-transparent px-4 h-full"
          >
            ◀
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex space-x-2 overflow-x-auto scrollbar-hide relative"
          >
            {["Anime", "Drawing", "Kitten", "Wallpaper", "Kawaii", "Art", "Tabby", "Girl", 
              "Aesthetic", "Pink", "Pet", "Chibi", "Sketch", "Pusheen"].map((topic, i) => (
              <TopicChip key={topic} label={topic} active={i === 2} />
            ))}
          </div>
          
          <button
            onClick={() => scrollTopics('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-[#202124] to-transparent px-4 h-full"
          >
            ▶
          </button>
        </div>
      </header>

      {/* Wrap the main content in a motion.div */}
      <motion.div
        animate={{
          width: selectedImage ? mainContentWidth : "100%",
          transition: { type: "tween" }
        }}
        className="transition-all duration-300 ease-in-out"
      >
        {/* Image Results Grid */}
        <main style={{margin:"10px"}} className="px-6 py-4">
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {mockImageResults.map((result) => (
              <div
                key={result.id}
                className="break-inside-avoid mb-4 cursor-pointer group"
                onClick={() => setSelectedImage(result)}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={result.link}
                    alt={result.title}
                    className="w-full object-cover hover:brightness-90 transition-all"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-sm truncate">{result.title}</p>
                    <p className="text-xs text-gray-300 truncate">{result.source}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Image Preview as part of the grid */}
            <AnimatePresence>
              {selectedImage && (
                <>
                <ImagePreview
                  image={selectedImage}
                  onClose={() => setSelectedImage(null)}
                />
                </>
              )}
            </AnimatePresence>
          </div>
        </main>
      </motion.div>
    </div>
  );
};

export default ResultsPage;
