import Image from "next/image"
import AnimationUnderline from "./animationUnderline"
import { FaCheck } from "react-icons/fa"

const Intro = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-[1140px] flex justify-center items-center">
        <div className="pt-32 pb-16 grid gap-12">
          <div className="p-2.5 grid gap-5">
            <h1 className="text-5xl text-center font-bold leading-snug pb-2.5 flex flex-wrap justify-center items-center">
              Streamline Your Sales Outreach With <br className="max-[880px]:hidden" />
              <div className="relative max-[880px]:inline">
                <AnimationUnderline word="AI-Powered" className="w-72" />
              </div>
              <span>&nbsp;Personalization</span>
            </h1>
            <p className="text-center font-normal text-lg text-zinc-500">
              AIVIO automates and personalizatioin your sales outreach, <br />
              driving higher engagement and success.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center px-5 py-4 text-base font-semibold text-white bg-[#0066cc] border border-transparent rounded-md shadow-sm hover:bg-white hover:text-[#0066cc] hover:border-[#0066cc] transition-colors duration-500 ease-in-out"
              >
                Get Started - It&apos; free
              </button>
            </div>
            <ul className="grid justify-center min-[320px]:grid-cols-2 sm:flex ">
              <li className="mx-4 font-normal text-lg text-zinc-500 flex justify-center" dir="ltr">
                <span className="text-blue-700 flex items-center"><FaCheck /></span>
                <span className="ps-2">14-day free trial</span>
              </li>
              <li className="mx-4 font-normal text-lg text-zinc-500 flex justify-center" dir="ltr">
                <span className="text-blue-700 flex items-center"><FaCheck /></span>
                <span className="ps-2">No CC required</span>
              </li>
              <li className="mx-4 font-normal text-lg text-zinc-500 flex justify-center" dir="ltr">
                <span className="text-blue-700 flex items-center"><FaCheck /></span>
                <span className="ps-2">Cancel anytime</span>
              </li>
            </ul>
          </div>
          <div className="py-2.5 rounded-lg shadow-[0px_0px_50px_-15px_rgb(0_0_0/_0.25)]">
            <Image
              src='/Dashboard.png'
              alt="Dashboard"
              width={1140}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro