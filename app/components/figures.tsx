'use client'

import { useState, useEffect, useRef } from "react";

const figures = [
  {
    rate: 120,
    des: "Increase conversation rate"
  },
  {
    rate: 50,
    des: "Improvement in client satisfaction"
  },
  {
    rate: 30,
    des: "Increase in customer engagement"
  },
]

export default function Figures() {
  const [conver, setConver] = useState(0);
  const [satisfy, setSatisfy] = useState(0);
  const [engage, setEngage] = useState(0);

  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const totalDuration = 3000;
    const converRate = 3000 / figures[0].rate;
    const satisfyRate = 3000 / figures[1].rate;
    const engageRate = 3000 / figures[2].rate;
    
    const converInterval = setInterval(() => {
      setConver(prev => Math.min(prev + 1, figures[0].rate))
    }, converRate);
    const satisfyInterval = setInterval(() => {
      setSatisfy(prev => Math.min(prev + 1, figures[1].rate))
    }, 3000 / satisfyRate);
    const engageInterval = setInterval(() => {
      setEngage(prev => Math.min(prev + 1, figures[2].rate))
    }, 3000 / engageRate);

    const timerId = setTimeout(() => {
      clearInterval(converInterval);
      clearInterval(satisfyInterval);
      clearInterval(engageInterval);
    }, totalDuration);

    return () => {
      clearInterval(converInterval);
      clearInterval(satisfyInterval);
      clearInterval(engageInterval);
      clearTimeout(timerId);
    }
  }, [isVisible])

  return (
    <div ref={ref} className="w-full bg-white flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col justify-center items-center py-8">
        <div className="p-2.5 flex flex-wrap justify-center gap-10">
          <div className="text-center">
            <h1 className="text-7xl font-semibold text-[#fe2d2d] text-center">+{conver}%</h1>
            <p className="text-xl font-normal leading-10 text-center text-zinc-500">{figures[0].des}</p>
          </div>
          <div className="text-center">
            <h1 className="text-7xl font-semibold text-[#fe2d2d] text-center">+{satisfy}%</h1>
            <p className="text-xl font-normal leading-10 text-center text-zinc-500">{figures[1].des}</p>
          </div>
          <div className="text-center">
            <h1 className="text-7xl font-semibold text-[#fe2d2d] text-center">+{engage}%</h1>
            <p className="text-xl font-normal leading-10 text-center text-zinc-500">{figures[2].des}</p>
          </div>
        </div>
      </div>
    </div>
  )
}