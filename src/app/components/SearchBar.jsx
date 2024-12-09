"use client";
import { useState, useEffect, useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ImageSearchOverlay from "./ImageSearchModal";
import ListeningIndicator from "./ListeningIndicator";
import './search.css';
import HoverCameraIcon from './hoverCameraIcon'
import HoverMicIcon from "./hoverMicIcon";

import { useRouter } from 'next/navigation'

const GoogleSearchButton = () => {
  return (
    <button
      className="HZVG1b Tg7LZd"
      aria-label="Google Search"
      type="submit"
      data-ved="0ahUKEwiY6pG7jpaKAxVTafUHHaBeHw8Q4dUDCBA"
    >
      <style>
        {`
          .zgAlFc {
            height: 24px;
            width: 24px;
          }
        `}
      </style>
      <div className="zgAlFc">
        <span className="KlpaXd z1asCe MZy1Rb">
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="#8ab4f8" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
        </span>
      </div>
    </button>
  );
};

export default function SearchBar() {
  const router = useRouter();
  // const pathname = window.location.pathname;

  const [pathname, setPathname] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isListeningIndicatorOpen, setIsListeningIndicatorOpen] = useState(false);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1); // For keyboard navigation


  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  // Debounce Function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

// Fetch Suggestions
const fetchSuggestions = useCallback(
  debounce(async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&pretty=1`
      );
      if (!response.ok) throw new Error("Failed to fetch suggestions");
      
      const data = await response.json();
      
      // Extracting suggestions (DuckDuckGo API uses `RelatedTopics` for results)
      const suggestions = data.RelatedTopics.map(topic => topic.Text).filter(Boolean);
      
      setSuggestions(suggestions);
      setError(null);
    } catch (err) {
      setError("Unable to fetch suggestions. Try again.");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  }, 300),
  []
);


  // Handle Input Change
  useEffect(() => {
    fetchSuggestions(searchTerm);
  }, [searchTerm, fetchSuggestions]);

  // Handle Keyboard Navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      setSearchTerm(suggestions[selectedIndex]);
      setSuggestions([]); // Clear suggestions after selection
    }
  };

  const clickSel = () =>{
    if (pathname === '/searchHome') {
      router.push('/images');
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pathname === '/searchHome') {
      router.push('/images');
    }
    // console.log('cat');
  }

  return (
    <div className="relative">
      {/* Search Bar */}
      {isModalOpen === false && (
        <div
        className={`flex items-center ${
          suggestions.length > 0 ? "rounded-t-full" : "rounded-full"
        } bg-[#303134] px-4 py-2 shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-lg focus-within:shadow-lg`}
      >
          {/* Search Icon */}
          <AiOutlineSearch
            className="text-gray-400 mr-3 hover:text-white transition-colors duration-200 ease-in-out"
            role="button"
            aria-label="Search"
          />

          {/* Input */}
          <form onSubmit={handleSubmit} style={{width:"100%"}}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            // placeholder="Search..."
            className="flex-grow bg-transparent text-white placeholder-gray-500 focus:outline-none"
            aria-label="Search Google"
            style={{width:"100%"}}
          />

          </form>
          {/* Microphone Icon */}
        {/* <div style={{width:"24px", marginRight:"15px", background:"transparent"}} 
          onClick={() => setIsListeningIndicatorOpen(true)}
          aria-label="Image Search">
          <div jscontroller="unV4T" jsname="F7uqIe" className="XDyW0e" aria-label="Search by voice" role="button" tabIndex="0" jsaction="h5M12e;rcuQ6b:npT2md" data-ved="0ahUKEwjQj9qThpSKAxWJRmwGHbllEisQvs8DCBE"><svg className="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg></div>
        </div> */}
        <HoverMicIcon setIsListeningIndicatorOpen={setIsListeningIndicatorOpen}/>

          {/* camera Icon */}
          <HoverCameraIcon setIsModalOpen={setIsModalOpen}/>
        {/* <div style={{width:"24px"}} 
          onClick={() => setIsModalOpen(true)}
          aria-label="Image Search">
        <div jscontroller="lpsUAf" className="nDcEnd" data-base-lens-url="https://lens.google.com" data-image-processor-enabled="true" data-is-images-mode="false" data-preferred-mime-type="image/jpeg" data-propagated-experiment-ids="" jsname="R5mgy" aria-label="Search by image" role="button" tabIndex="0" jsaction="rcuQ6b:npT2md;h5M12e" data-ved="0ahUKEwjQj9qThpSKAxWJRmwGHbllEisQhqEICBI"><svg className="Gdd5U" focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc04" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg></div>
        </div> */}
        {/* search Icon */}
        {pathname === '/searchHome' ? (
          <div style={{display:"flex"}} onClick={clickSel}>
        &nbsp;&nbsp;&nbsp;<GoogleSearchButton/></div>
          ) : (
            <div></div>
          )}

        </div>
      )}
      
      {/* Suggestions Dropdown */}
      {searchTerm && (
        <div className="absolute w-full bg-[#303134] rounded-b-lg shadow-lg z-50">
          <div style={{borderTop:"1px solid #5f6368", width:"94%", margin:"0 auto"}}></div>
          {loading && (
            <div className="px-4 py-3 text-[#9aa0a6] text-sm">Loading...</div>
          )}
          {error && (
            <div className="px-4 py-3 text-[#f28b82] text-sm">{error}</div>
          )}
          {!loading && !error && suggestions.length === 0 && (
            <div className="px-4 py-3 text-[#9aa0a6] text-sm">No suggestions found</div>
          )}
          {!loading &&
            !error &&
            suggestions.map((suggestion, index) => (
              <div
                key={index}
                className={`px-6 py-3 cursor-pointer hover:bg-[#4f5c69] flex items-center gap-3 ${
                  selectedIndex === index ? "bg-[#3c4043]" : ""
                }`}
                onClick={() => {
                  setSearchTerm(suggestion);
                  setSuggestions([]);
                  clickSel()
                }}
              >
                <AiOutlineSearch className="text-[#9aa0a6] text-lg" />
                <span className="text-[#e8eaed] text-sm">{suggestion}</span>
              </div>
            ))}
        </div>
      )}

      {/* Image Search Modal */}
      <ImageSearchOverlay
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Listening Indicator */}
      <ListeningIndicator
        isOpen={isListeningIndicatorOpen}
        onClose={() => setIsListeningIndicatorOpen(false)}
      />
    </div>
  );
}
