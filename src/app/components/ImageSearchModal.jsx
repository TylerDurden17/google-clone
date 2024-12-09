import React, { useState } from 'react';
import { useDropzone } from "react-dropzone";
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation'

const ImageSearchOverlay = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const handleUpload = async (file) => {
    setIsLoading(true);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate to new page after loading
    router.push('/search-results');
  };

  const onDrop = (acceptedFiles) => {
    console.log("File uploaded:", acceptedFiles[0]);
    handleUpload(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      'image/*': []
    }
  });

  if (!isOpen) return null;

  return (
    <div className="relative w-[600px] h-[380px] bg-[#303134] flex flex-col items-center pt-6 mx-auto rounded-[20px]">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
        onClick={onClose}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Header Text */}
      <div className="text-white mb-4 font-sans">
        Search any image with Google Lens
      </div>
      
      {isLoading ? (
        // Loading Spinner Container
        <div className="flex flex-col items-center justify-center w-[550px] h-[280px] border border-dashed bg-[#394357] rounded-lg">
          <div className="w-8 h-8 relative">
            <div className="absolute w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div><br></br>
          <span className="ml-3 text-blue-300">Uploading...</span>
        </div>
      ) : (
        <div className="bg-[#202124] border border-dashed border-[rgb(60,64,67)] rounded-lg">
          {/* Drop Zone */}
          <div
            {...getRootProps()}
            className="w-[550px] h-[188px] bg-[rgb(32,33,36)] flex flex-col justify-center items-center rounded-lg"
          >
            <input {...getInputProps()} />
            <div className="mt-5 flex items-center text-gray-400">
            <svg style={{marginRight:"18px"}} width="59" height="45" viewBox="0 0 59 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.3332 13.747L1.58323 13.747L1.58323 43.4553L40.3332 43.4553L40.3332 13.747Z" className="ArIAXb"></path><path d="M40.3332 13.747L17.0832 13.747L17.0832 33.122L40.3332 33.122L40.3332 13.747Z" className="qOFLsb"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.614479 12.7783L6.74988 12.7783L6.74988 14.7158L2.55198 14.7158L2.55198 18.9137L0.614479 18.9137L0.614479 12.7783Z" fill="#BDC1C6"></path><path fillRule="evenodd" clipRule="evenodd" d="M39.3644 42.4866L39.3644 38.2887L41.3019 38.2887L41.3019 44.4241L35.1665 44.4241L35.1665 42.4866L39.3644 42.4866Z" fill="#BDC1C6"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.614479 38.2887L2.55198 38.2887L2.55198 42.4866L6.74987 42.4866L6.74987 44.4241L0.614479 44.4241L0.614479 38.2887Z" fill="#BDC1C6"></path><path d="M19.6665 30.2531H58.4165L58.4165 0.544722H19.6665L19.6665 30.2531Z" fill="#AECBFA"></path><path d="M19.6665 21.8429L19.6665 30.2525L58.4168 30.2525L58.4168 19.7406L49.6667 12.4069C48.6234 11.5342 47.2931 11.0699 45.9272 11.1018C44.5614 11.1337 43.2547 11.6596 42.2542 12.5801L33.4166 20.7918L28.4166 17.2548C27.7332 16.7781 26.9013 16.5563 26.0684 16.6288C25.2354 16.7012 24.4554 17.0632 23.8666 17.6505L19.6665 21.8429Z" fill="#669DF6"></path><path d="M30.0056 12.9386C31.7315 12.9386 33.1306 11.5395 33.1306 9.8136C33.1306 8.08773 31.7315 6.68863 30.0056 6.68863C28.2798 6.68863 26.8807 8.08773 26.8807 9.8136C26.8807 11.5395 28.2798 12.9386 30.0056 12.9386Z" fill="#E8F0FE"></path></svg>
            <span>  Drag an image here or</span>
              <span className="text-[#8ab4f8] ml-1 cursor-pointer hover:underline">
                upload a file
              </span>
            </div>
          </div>

          {/* OR Divider */}
          <div className="flex items-center">
            <div className="border-t border-[#3c4043] ml-5 flex-grow"></div>
            <div className="text-[#9aa0a6] mx-5 text-sm font-sans">OR</div>
            <div className="border-t border-[#3c4043] mr-5 flex-grow"></div>
          </div>

          {/* URL Input */}
          <div className="w-full px-5 pb-5">
            <div className="flex gap-2 mt-3">
              <input
                type="text"
                placeholder="Paste image link"
                className="flex-grow bg-[#303134] text-white py-2 px-6 rounded-full text-sm border border-[#5f6368] border-opacity-20"
              />
              <button className="bg-[#303134] text-[#8ab4f8] px-6 py-2 rounded-full text-sm border border-[#5f6368] border-opacity-20">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSearchOverlay;