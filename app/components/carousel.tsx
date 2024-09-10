'use client'

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FaStar } from "react-icons/fa"
import Autoplay from 'embla-carousel-autoplay'

const sponsers = [
  {
    no: 1,
    avatar: '/8.jpg',
    name: 'John Doe',
    role: 'Sales Manager at XYZ Corp',
    des: "AIVIO has transformed our sales outreach process. The AI-generated messages are so personalized that our response rates have skyrocketed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    no: 2,
    avatar: '/14.jpg',
    name: 'Jane Smith',
    role: 'Sales Operations Lead at ABC inc',
    des: "Integrating AIVIO with our CRM and outreach tools was a breeze. Now, our team can focus on selling while the platform handles the personalization and automation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    no: 3,
    avatar: '/8.jpg',
    name: 'John Doe',
    role: 'Sales Manager at XYZ Corp',
    des: "AIVIO has transformed our sales outreach process. The AI-generated messages are so personalized that our response rates have skyrocketed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    no: 4,
    avatar: '/14.jpg',
    name: 'Jane Smith',
    role: 'Sales Operations Lead at ABC inc',
    des: "Integrating AIVIO with our CRM and outreach tools was a breeze. Now, our team can focus on selling while the platform handles the personalization and automation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
]

const Carousels = () => {
  return (
    <Carousel
      className="w-full max-w-[1008px] p-10 relative"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        })
      ]}
    >
      <CarouselContent className="m-0">
        {
          sponsers.map(s => (
            <CarouselItem key={s.no} className="bg-white rounded-2xl max-w-[944px] m-3 transform translate-x-0 translate-y-0 translate-z-0 flex-[0_0_100%] p-8">
              <Image
                src={s.avatar}
                alt={s.name}
                width={70}
                height={70}
                className="rounded-md"
              />
              <div className="ml-4 italic text-base font-semibold sm:flex items-center pb-12">
                <span>{s.name}&nbsp;</span>
                <div className="flex">
                  <FaStar color="#fcb900" size={16} />
                  <FaStar color="#fcb900" size={16} />
                  <FaStar color="#fcb900" size={16} />
                  <FaStar color="#fcb900" size={16} />
                  <FaStar color="#fcb900" size={16} />
                </div>
                <span className="text-sm">&nbsp;{s.role}</span>
              </div>
              <p className="text-left">{s.des}</p>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious className="absolute left-0" />
      <CarouselNext className="absolute right-0" />
    </Carousel>
  )
}

export default Carousels