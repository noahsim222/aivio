import Link from 'next/link'
import Image from 'next/image'
import Navigation from './navigation'
import MobileMenu from './mobileMenu'

const Header = () => {
  return (
    <header className="flex justify-center items-center py-2.5">
      <div className="w-full max-w-[1140px] p-5 lg:p-2.5 flex items-center gap-5">
        <Link href="/">
          <span className="sr-only">AIVIO</span>
          <Image
            src="/aivio-logo.png"
            alt="AIVIO logo"
            width={150}
            height={58.45}
            className='w-[150px] h-[58.45px] object-contain'
          />
        </Link>
        <Navigation />
        <div className="hidden lg:block">
          <button
            type="button"
            className="px-5 py-3 text-base font-semibold text-white bg-[#0066cc] border border-transparent rounded-md shadow-sm hover:bg-white hover:text-[#0066cc] hover:border-[#0066cc] transition-colors duration-500 ease-in-out"
          >
            Get Started
          </button>
        </div>
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header