import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const FlipTimer = () => {
  const targetDate = new Date("September 13, 2024 00:00:00").getTime(); // Set target date
  const [timeRemaining, setTimeRemaining] = useState(targetDate - new Date().getTime());
  const topRef = useRef();
  const bottomRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    const flip = () => {
      gsap.to(cardRef.current, {
        rotateX: -180,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.set(cardRef.current, { rotateX: 0 });
        }
      });
    };

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft >= 0) {
        setTimeRemaining(timeLeft);
        flip();
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <div className="flex justify-center items-center h-[200px] w-[100%] bg-red-700">
      <div className="relative w-32 h-[200px]">
        <div
          ref={cardRef}
          className=" flex w-full h-full bg-white rounded-lg overflow-hidden shadow-lg transform-gpu transition-transform"
        >
          <div className="w-full h-1/2 bg-blue-500 text-white text-4xl flex justify-center items-center">
            <span ref={topRef}>{`${days}d ${hours}h ${minutes}m`}</span>
          </div>
          <div className="w-full h-1/2 bg-blue-600 text-white text-4xl flex justify-center items-center">
            <span ref={bottomRef}>{`${seconds}s`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipTimer;
