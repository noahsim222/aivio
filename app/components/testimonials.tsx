import AnimationUnderline from "./animationUnderline"
import Carousels from "./carousel"

const Testimonials = () => {
  return (
    <div className="w-full max-w-[1140px] flex flex-col justify-center items-center pb-16">
      <div className="w-full py-16 flex flex-col justify-center items-center gap-5">
        <div className="p-2.5 text-center">
          <span className="p-2.5 px-5 bg-white text-lg text-zinc-500 font-normal rounded-md">Testimonials</span>
          <h1 className="text-5xl text-center font-bold leading-snug pb-2.5 py-5 flex justify-center items-center flex-wrap w-[1000px]">
            <span>Here</span>
            <div className="relative min-[585px]:inline-block">
              <AnimationUnderline word="Success Stories" className="w-[360px]" />
            </div>
            <span>From Our Satisfied Users</span>
          </h1>
        </div>
      </div>
      <Carousels />
    </div>
  )
}

export default Testimonials