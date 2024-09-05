import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: '100%', duration: 0.5, ease: 'power3.inOut' });
    } else {
      gsap.to(menuRef.current, { x: '200%', duration: 0.5, ease: 'power3.inOut' });
    }
  }, [isOpen]);

  return (
    <div>
      {/* Menu Button */}
      <button
        className=""
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-3xl w-[100px]">
          <i className="ri-menu-line"></i>
        </p>
      </button>

      {/* Sidebar Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-[100%] w-[50%] z-10 bg-black transform -translate-x-full text-white"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <i className="ri-close-line"></i>
        </button>

        {/* Menu Items */}
        <ul className="mt-16 space-y-4 text-[2rem]">
          <li className="px-6 py-2 hover:bg-violet-900 cursor-pointer">Home</li>
          <li className="px-6 py-2 hover:bg-violet-900 cursor-pointer">About</li>
          <li className="px-6 py-2 hover:bg-violet-900 cursor-pointer">Services</li>
          <li className="px-6 py-2 hover:bg-violet-900 cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
