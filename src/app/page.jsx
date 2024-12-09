"use client";

import Head from "next/head";
import SearchBar from "../app/components/SearchBar";
import Link from 'next/link'
import HoverCardSearch from "./hover";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#202124] text-white relative">
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div style={{position:"fixed", top:"0", left:"0", display:"flex", margin:"15px", gap:"15px"}}>
              <div style={{fontSize:"14px", height:"fit-content", marginTop:"7px"}}>About</div>
              <div style={{fontSize:"14px", height:"fit-content", marginTop:"7px"}}>Store</div>
        </div>
      <div style={{position:"fixed", top:"0", right:"0", display:"flex", margin:"15px", gap:"15px"}}>
              <div style={{fontSize:"13px", height:"fit-content", marginTop:"10px"}}>Gmail</div>
              <div style={{fontSize:"13px", height:"fit-content", marginTop:"10px", marginRight: "10px"}}><Link href="/searchHome">Images</Link></div>
              <div style={{marginTop: "6px", marginRight: "10px", height: "fit-content"}}><svg
                className="MfDLTc"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="#041E49"
              >
                  <path fill="white"
                    d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-170h220v170q0 17 5 34t15 31l227 341q7 9 10 20.5t3 26.5q0 41-28 69t-69 28H209Zm115-177q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430v110q0 26-7.5 50.5T401-573L274-382q-3 4-9 28 0 23 17 40t42 17Zm26-483q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780H350Z"
                  />
                </svg>
              </div>
          
              <button className="p-1">                
            <svg style={{width:"25px"}} className="gb_E" focusable="false" viewBox="0 0 24 24">
              <path fill="white" d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
              {/* <img key="al-icon" src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" height="124" width="124" /> */}
            </svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                  <img src="https://cataas.com/cat" style={{ borderRadius: '50%', width: '34px', height: '34px' }} />
      </div>
      </header>
      <div style={{ 
  display: "flex", 
  flexDirection:"column",
  justifyContent: "center", 
  alignItems: "center", 
  height: "100vh",
  width:"100%",
  paddingBottom:"210px"
}}>

      <div className="mt-10">
        <img style={{width:"282px", aspectRatio:"auto 272 / 92", height:"92px"}}
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          alt="Google Logo"
          className="w-44"
        />
      </div>

      {/* Search Bar */}
      <div className="mt-8 w-full max-w-xl relative">
        {/* <SearchBar /> */}
        <HoverCardSearch/>

    <div style={{display:"flex", justifyContent:"center"}} className="flex gap-3 p-4">
      <button 
        className="px-4 py-2 bg-zinc-700 text-gray-200 text-sm rounded hover:bg-zinc-600 transition-colors"
        onClick={() => console.log('Search clicked')}
      >
        Google Search
      </button>
      <button 
        className="px-4 py-2 bg-zinc-700 text-gray-200 text-sm rounded hover:bg-zinc-600 transition-colors"
        onClick={() => console.log('Feeling Lucky clicked')}
      >
        I'm Feeling Lucky
      </button>
    </div>
    <div style={{marginTop:"20px", lineHeight:"28px", fontSize:"16px", textAlign:"center"}} id="SIvCob"><span style={{color:"#bfbfbf"}}>Google offered in:</span>  <a style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCQ">हिन्दी</a>&nbsp;&nbsp;    <a  style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCU">বাংলা</a>&nbsp;    <a  style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCY">తెలుగు</a>&nbsp;    <a  style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCc">मराठी</a>&nbsp;    <a  style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCg">தமிழ்</a>&nbsp;    <a  style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCk">ગુજરાતી</a>&nbsp;    <a  style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCo">ಕನ್ನಡ</a>&nbsp;    <a  style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCs">മലയാളം</a>&nbsp;    <a  style={{color:"#77a8ec"}} onMouseOver={(e) => e.target.style.textDecoration = 'underline'} 
  onMouseOut={(e) => e.target.style.textDecoration = 'none'} href="https://www.google.com/setprefs?sig=0_Zlnw3feIm1dbuGk5kWLunk_c2Y8%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj80fTWl5SKAxU8T2cHHVPHJfUQ2ZgBCCw">ਪੰਜਾਬੀ</a>  </div>
      </div>
      </div>
      {/* Logo */}

      

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
    </div>
  );
}
