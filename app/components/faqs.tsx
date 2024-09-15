'use client'

import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"
import Accordions from "./accordion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const Faqs = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible1(true);
        observer1.disconnect();
      }
    }, {
      threshold: 0.1
    })
    const observer2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible2(true);
        observer2.disconnect();
      }
    }, {
      threshold: 0.1
    })
    const observer3 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible3(true);
        observer3.disconnect();
      }
    }, {
      threshold: 0.1
    })

    if (ref1.current) {
      observer1.observe(ref1.current);
    }
    if (ref2.current) {
      observer2.observe(ref2.current);
    }
    if (ref3.current) {
      observer3.observe(ref3.current);
    }

    return () => {
      if (ref1.current) {
        observer1.unobserve(ref1.current);
      }
      if (ref2.current) {
        observer2.unobserve(ref2.current);
      }
      if (ref3.current) {
        observer3.unobserve(ref3.current);
      }
    }
  }, [])

  return (
    <div className="max-w-[1140px] w-full py-16 md:flex justify-between items-start gap-5 ">
      <div className="flex-grow" >
        <div ref={ref1} className={`${isVisible1 ? 'showFaq' : ""} bg-white py-1 px-10 rounded-md text-[#4f4f4f] text-lg font-normal leading-8 w-[150px] text-center`}>FAQs</div>
        <h1 ref={ref2} className={`${isVisible2 ? 'showFaq' : ""}  py-2.5 text-gray-950 text-[44px] font-bold leading-snug pb-6`}>
          We Are Here Tp Answer All Your Questions
        </h1>
        <Accordions />
        <Link href='/faqs'>
          <button
            ref={ref3}
            className={`${isVisible3 ? 'showFaq' : ""} mt-10 px-5 py-3 text-base font-semibold text-white bg-[#0066cc] border border-transparent rounded-md shadow-sm hover:bg-white hover:text-[#0066cc] transition-colors duration-500 ease-in-out flex items-center gap-3`}
            type="button"
          >
            Ask Question
            <FaArrowRight />
          </button>
        </Link>
      </div>
      <div className="flex-none w-[380px]">
        <Image
          src='/faqs.webp'
          alt="FAQs"
          width={380}
          height={380}
        />
      </div>
    </div>
  )
}

export default Faqs