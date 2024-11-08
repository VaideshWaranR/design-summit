import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Import the ScrollTo plugin
import React, { lazy, useEffect, useRef } from "react";
import Cardlayout from "./Components/Cardlayout";
import "./index.css";
import FlipTimer from "./Components/FlipTimer";
import Footer from "./Components/Footer";
import Postponed from "./Components/Postponed";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Scene = lazy(() => import("./Components/Scene"));
const Cyl = lazy(() => import("./Components/Cyl"));

const App = () => {
  const marqueeRef = useRef(null);
  const scrollToTopBtn = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    // Clone the text to create a continuous scrolling effect
    const clone = marqueeElement.innerHTML;
    marqueeElement.innerHTML += clone;

    gsap.to(marqueeElement, {
      xPercent: -100, // Move the marquee element to the left
      duration: 125, // Duration for one complete loop
      ease: "linear", // Linear easing for a consistent scrolling speed
      repeat: -1, // Infinite repeat
    });
  }, []);

  // Function to smoothly scroll to the top
  const scrollToTop = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1.5, ease: "power2.inOut" });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-[100%] whitespace-nowrap text-white flex justify-between items-center p-1 bg-black/70">
          <img
            src="./element.png"
            alt="Logo"
            className="h-[50px] w-[100px] object-contain"
          />
          <img
            src="./logow.png"
            alt="Logo"
            className="h-[50px] w-[200px] object-cover"/>
         {/* <a href="https://rajalakshmi.org/design-summit-2k24/" target="_self" rel="noopener noreferrer " className="hover:underline p-4 font-mono">Register</a> */}
        </div>
        <Canvas
          camera={{ fov: 85 }}
          gl={{ alpha: true }}
          style={{ padding: "0px", width: "100vw", height: "50vh" }}
        >
          <OrbitControls />
          <ambientLight />
          <Cyl />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={7.0}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
          </EffectComposer>
        </Canvas>
        <div className="overflow-hidden mt-[30px] whitespace-nowrap bg-black py-2 w-[100%]">
          <div
            ref={marqueeRef}
            className="inline-block f text-5xl font-extrabold "
          >
            {" "}
            &emsp;DESIGN - SUMMIT 2024 <i class="ri-arrow-right-line"></i>{" "}
            CAREER CRAFT <i class="ri-arrow-right-line"></i> TECHNO KALLOS{" "}
            <i class="ri-arrow-right-line"></i> DESIGN ARENA{" "}
            <i class="ri-arrow-right-line"></i> VISION VAULT
            <i class="ri-arrow-right-line"></i> DISCUSSION DEN{" "}
            <i class="ri-arrow-right-line"></i> CODE CRACK{" "}
            <i class="ri-arrow-right-line"></i> CODE YOUR WAY OUT
          </div>
        </div>
        {/* <FlipTimer /> */}
        <Cardlayout />
        {/* <Postponed /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
