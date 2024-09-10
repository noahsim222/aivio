'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { FaChevronDown } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'

const accord = [
  {
    value: 'item-1',
    title: 'How long does it take to set up AIVIO?',
    text: 'Our onboarding process is designed to be quick and easy. Most customers can get started within a few hours, with our support team available to assist you every step of the way.'
  },
  {
    value: 'item-2',
    title: 'Can I integrate AIVIO with my existing tools?',
    text: 'Absolutely! AIVIO offers seamless integration with popular CRM platforms like Salesforce and Hubspot, as well as outreach tools such as Outreach.io, SalesLoft, and Conquer.io. Our robust APIs ensure real-time data sync and a smooth user experience.'
  },
  {
    value: 'item-3',
    title: 'Is my data secure with AIVIO?',
    text: 'Smile spoke total few great had never their too. Amongst moments do in arrived at my replied. Fat weddings servants but man believed prospect. Compaions understood is as especially pianoforte connection introduced. Nay newspaper can sportsman are admitting gentleman belonging his.'
  },
  {
    value: 'item-4',
    title: 'Is my data secure with AIVIO?',
    text: 'Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken horrible consider. Abode never think to at. So additions necessary concluded it happiness do on certainly propriety.'
  },
]

const Accordions = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    })

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [])

  return (
    <Accordion.Root
      ref={ref}
      className={`${isVisible ? "showFaq" : ""} bg-white w-full rounded-lg shadow-[0_2px_10px] shadow-black/5`}
      type="single"
      defaultValue=""
      collapsible
    >
      {
        accord.map(a => (
          <Accordion.Item
            key={a.value}
            value={a.value}
            className='focus-within:shadow-gray-400 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]'
          >
            <Accordion.Trigger className='w-full flex justify-start items-center gap-2 px-5 py-6 bg-white text-base font-normal text-[#4f4f4f] shadow-black hover:text-[#0066cc] group flex-1 cursor-default leading-none outline-none'>
              <FaChevronDown size={14} className='transition-transform duration-300 group-data-[state=open]:rotate-180' />
              {a.title}
            </Accordion.Trigger>
            <Accordion.Content
              className='text-[#4f4f4f] bg-[#f5f9ff] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden '
            >
              <div className='text-[15px] py-[15px] px-5 pl-10'>
                {a.text}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))
      }
    </Accordion.Root>
  )
}

export default Accordions