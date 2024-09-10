import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center">
      <div className="w-full max-w-[1140px] px-8 lg:px-2.5 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className='p-2.5'>
          <Link href="/">
            <span className='sr-only'>AIVIO</span>
            <Image
              src="/aivio-logo.png"
              alt="AIVIO logo"
              width={120}
              height={50}
              className='pb-6'
            />
          </Link>
          <p className='text-[#54595f] text-base font-normal leading-5'>AIVIO automates and personalizes your sales outreach, driving higher engagement and success.</p>
        </div>
        <div className="p-2.5">
          <h3 className='text-black text-xl font-bold leading-5 pb-6'>Features</h3>
          <ul>
            <li className='text-base font-normal leading-8 list-disc'>Customizable AI Outreach</li>
            <li className='text-base font-normal leading-8 list-disc'>User Management</li>
            <li className='text-base font-normal leading-8 list-disc'>Analytics and Reporting</li>
            <li className='text-base font-normal leading-8 list-disc'>Security and Compliance</li>
          </ul>
        </div>
        <div className='p-2.5'>
          <h3 className='text-black text-xl font-bold leading-5 pb-6'>Resources</h3>
          <ul>
            <li className='text-base font-normal leading-8 list-disc'>Blog</li>
            <li className='text-base font-normal leading-8 list-disc'>Documentation</li>
            <li className='text-base font-normal leading-8 list-disc'>Support Center</li>
          </ul>
        </div>
        <div className='p-2.5'>
          <h3 className='text-black text-xl font-bold leading-5 pb-6'>Support</h3>
          <ul>
            <li className='text-base font-normal leading-8 list-disc'>Contact Support</li>
            <li className='text-base font-normal leading-8 list-disc'>Knowledge Base</li>
            <li className='text-base font-normal leading-8 list-disc'>Community Forum</li>
            <li className='text-base font-normal leading-8 list-disc'>Schedule a Demo</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;