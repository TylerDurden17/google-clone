"use client";
import React from "react";
import "./Home.css";
import SearchBar from "../components/SearchBar";


function GoogleLogo() {
    return (
      <div className="k1zIA rSk4se">
        <style>
          {`
            .rSk4se {
              max-height: 92px;
              position: relative;
            }
            .lnXdpd {
              max-height: 100%;
              max-width: 100%;
              object-fit: contain;
              object-position: center bottom;
              width: auto;
            }
            .T8VaVe {
              color: #4487f6;
              font: 16px/16px Arial, sans-serif;
              position: absolute;
              left: 215px;
              bottom: 0;
              white-space: nowrap;
            }
          `}
        </style>
        <img
          className="lnXdpd"
          alt="Google Images"
          height="92"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          width="272"
          data-csiid="CXpUZ4bgG-W-vr0P4MnFmQI_2"
        />
        <span className="T8VaVe">images</span>
      </div>
    );
  }
  const Home = () => {
  
    return (
      <>
      <header style={{position:"fixed", top:"0", right: "0", display:"flex", margin:"10px", gap:"10px"}}>

      <button className="p-1">                
       <svg style={{width:"25px"}} className="gb_E" focusable="false" viewBox="0 0 24 24">
         <path fill="white" d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
         <image src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" height="124" width="124" />
       </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               </button>
             <img src="https://cataas.com/cat" style={{ borderRadius: '50%', width: '34px', height: '34px' }} />
      </header>
      <div style={{
        display: "flex",
        flexDirection:"column",
        marginTop:"12%",
        alignItems: "center",
        height: "100vh"
      }} className="home">
        <GoogleLogo/>
        <br></br>
        <div style={{width:"40%"}}><SearchBar/></div>

              {/* Footer */}
      
      <footer className="absolute bottom-0 w-full text-sm text-gray-400 items-center py-4 bg-[black]">
        <div style={{width:"100%"}}>
          <div style={{marginLeft:"23px", marginBottom:"10px", color:"#fff"}}>India</div>
        </div>

        <div style={{width:"100%", color:"#fff", fontSize:"14px"}} className="flex gap-4 border-t border-[#313335]">
          <a style={{marginLeft:"26px", marginTop:"10px"}} href="#" className="hover:underline">
            Advertising
          </a>
          <a style={{marginTop:"10px"}} href="#" className="hover:underline">
            Business
          </a>
          <a style={{marginTop:"10px"}} href="#" className="hover:underline">
            How Search works
          </a>
          <div style={{position:"fixed", right:"0", marginTop:"17px"}}>
          <a style={{marginTop:"10px"}} href="#" className="hover:underline">
            Privacy
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" className="hover:underline">Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a style={{marginRight:"30px"}} href="#" className="hover:underline">Settings</a></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </footer>
      </div></>
    );
  };

export default Home;
