import { motion } from "framer-motion";
import {BallCanvas} from "./canvas";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { EarthCanvas } from "./canvas";
import { useEffect, useState } from "react";
import { photo } from "../assets";
import {RiDatabaseFill} from "react-icons/ri"
import {d3logo} from "../assets"

const Hero = () => {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto ">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mx-auto flex flex-row  items-start gap-8`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 bg-white rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hy , I am <span className="text-[#915eff]">Akash</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>I am a Full Stack Developer <br  className="sm:block hidden"/>
           with a passion for building amazing ideas.</p>
           <img className="relative" style={{ height: isMobile ? 60 : 80 ,marginTop : isMobile ? 10 : 40,float: isMobile? 'right':'left'}} src={d3logo} alt="img" />
        </div>
          
      </div>
      {/* {isMobile?(<div className="w-28 h-28"><BallCanvas icon={photo} /></div>):(<ComputersCanvas/>)} */}
        
      <ComputersCanvas/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex  justify-center items-center">
      <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero