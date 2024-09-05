import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import Model from "./Model";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene({ scrollPosition }) {
  const scrollControlsRef = useRef(null);

  useEffect(() => {
    if (scrollControlsRef.current) {
      scrollControlsRef.current.scroll = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls ref={scrollControlsRef} damping={0.5} pages={4}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
