import React, { lazy, Suspense, useEffect, useState ,useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { gsap } from 'gsap';
import "./index.css";
import Cardlayout from './Components/Cardlayout';
const Scene = lazy(() => import('./Components/Scene'));
const Cyl = lazy(() => import('./Components/Cyl'));
const App = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    // Clone the text to create a continuous scrolling effect
    const clone = marqueeElement.innerHTML;
    marqueeElement.innerHTML += clone;

    gsap.to(marqueeElement, {
      xPercent: -100,  // Move the marquee element to the left
      duration:125,    // Duration for one complete loop
      ease: 'linear',  // Linear easing for a consistent scrolling speed
      repeat: -1,      // Infinite repeat
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-[100%] whitespace-nowrap text-white flex justify-between items-center p-1'>
      <img src='./element.png' alt='Logo' className="h-[50px] w-[100px] object-contain" />
      <img src='./logow.png' alt='Logo' className="h-[50px] w-[200px] object-cover" />
      <p className='text-3xl w-[100px]'><i class="ri-menu-line" ></i></p>
    </div>
    <Canvas camera={{ fov:70 }} gl={{alpha:true}} style={{padding:'0px',width: '100vw', height: '50vh' }}>
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
     {/* <ToneMapping adaptive /> */}
     </EffectComposer>
    </Canvas>
    <div className="overflow-hidden mt-[30px] whitespace-nowrap bg-black py-2 w-[100%]">
      <div
        ref={marqueeRef}
        className="inline-block f text-5xl font-extrabold "
      >  &emsp;DESIGN - SUMMIT  2024 <i class="ri-arrow-right-line"></i> CAREER CRAFT <i class="ri-arrow-right-line"></i> TECHNO KALLOS <i class="ri-arrow-right-line"></i> DESIGN ARENA <i class="ri-arrow-right-line"></i> VISION VAULT<i class="ri-arrow-right-line"></i> DISCUSSION DEN <i class="ri-arrow-right-line"></i> CODE CRACK <i class="ri-arrow-right-line"></i> CODE YOUR WAY OUT <i class="ri-arrow-right-line"></i> BATTLE OF BOARDS <i class="ri-arrow-right-line"></i> 69 SECONDS 
      </div>
    </div>
    <Cardlayout />
    </div>
  )
};

export default App