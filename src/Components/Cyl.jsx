import React, { useRef, useState, useEffect } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

const Cyl = () => {
  const cyl = useRef(null);
  const tex = useTexture('/pu.png');
  const [hasInteracted, setHasInteracted] = useState(false);
  const [interactionTimeout, setInteractionTimeout] = useState(null);

  // Define the initial rotation
  const initialRotation = { x: 0, y: 0.3, z: 0.2 };

  useFrame((state, delta) => {
    if (!hasInteracted) {
      cyl.current.rotation.y += delta * 0.6; // Normal rotation speed
    }
  });

  const handleCylinderClick = () => {
    // Mark as interacted
    setHasInteracted(true);

    // Cancel any previous timeout
    if (interactionTimeout) {
      clearTimeout(interactionTimeout);
    }

    // Animate the cylinder rotation
    gsap.to(cyl.current.rotation, {
      y: "+=6.28", // Full rotation
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.to(cyl.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      },
    });

    // Animate event cards or other interactions here if needed
  };

  useEffect(() => {
    // Set a timeout to reset interaction status after a period of inactivity
    const timeout = setTimeout(() => {
      if (!hasInteracted) {
        // Animate cylinder back to initial rotation
        gsap.to(cyl.current.rotation, {
          x: initialRotation.x,
          y: initialRotation.y,
          z: initialRotation.z,
          duration: 1,
          ease: "power3.inOut",
        });
      }
      setHasInteracted(false);
    }, 3000); // 3 seconds of inactivity

    // Cleanup function to clear the timeout on component unmount or when interaction changes
    return () => clearTimeout(timeout);
  }, [hasInteracted]);

  return (
    <group rotation={[0, 0.3, 0.2]}>
      <mesh ref={cyl} >
        <cylinderGeometry args={[3, 3, 5, 80, 80, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Cyl;
