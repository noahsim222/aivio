'use client'

import Link from 'next/link';
import {Menu, MenuItem, MenuButton, MenuHeading, MenuItems, MenuSection} from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [menuWidth, setMenuWidth] = useState<string>('0px');

  useEffect(() => {
    if (buttonRef.current) {
      setMenuWidth(`${buttonRef.current.offsetWidth}px`);
    }
  }, [])

  return (
    <nav ref={buttonRef} className="relative hidden lg:flex gap-5 items-center flex-grow justify-center">
      <Link
        href=""
        className="text-base font-semibold text-[#333333] border-b-2 border-transparent hover:text-[#0066cc] hover:border-b-[#0066cc] transition-colors duration-200 ease-in-out"
      >
        Why AIVIO?
      </Link>
      <Menu>
        <MenuButton className="flex items-center gap-1 group text-base font-semibold text-[#333333] border-b-2 border-transparent hover:text-[#0066cc] hover:border-b-[#0066cc] data-[active]:text-[#0066cc] data-[active]:border-b-[#0066cc] transition-colors duration-200 ease-in-out">
          Solutions
          <FaChevronDown className='transition-transform duration-[250] ease-in group-data-[active]:-rotate-180' size={14} />
        </MenuButton>
        <MenuItems transition className="z-10 bg-white absolute -bottom-[26px] translate-y-full left-0 border origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 p-5 flex gap-5" style={{ width: menuWidth } as React.CSSProperties}>
          <MenuSection className="w-1/3">
            <MenuSection className="p-2.5 grid gap-3">
              <MenuHeading className="text-[#333333] text-xl font-extrabold">Platform Overview</MenuHeading>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>What is AIVIO?</Link>
              </MenuItem>
            </MenuSection>
            <MenuSection className="p-2.5 grid gap-3">
              <MenuHeading className="text-[#333333] text-xl font-extrabold">Key Challenges Addressed</MenuHeading>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Difficulty in personalizing outreach at scale</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Inefficient integration with existing CRM and outreach tools</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Lack of actionable insights from outreach efforts</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Security concerns regarding data handling and compliance</Link>
              </MenuItem>
            </MenuSection>
          </MenuSection>
          <MenuSection className='w-1/3'>
            <MenuSection className="p-2.5 grid gap-3">
              <MenuHeading className="text-[#333333] text-xl font-extrabold">AIVIO Solution</MenuHeading>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Customizable AI Outreach</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Seamless Integration</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Robust Analytics and Reporting</Link>
              </MenuItem>
            </MenuSection>
            <MenuSection className="p-2.5 grid gap-3">
              <MenuHeading className="text-[#333333] text-xl font-extrabold">User Stories</MenuHeading>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Sales Manager</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Sales Representative</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Administrator</Link>
              </MenuItem>
            </MenuSection>
          </MenuSection>
          <MenuSection className='w-1/3'>
            <MenuSection className="p-2.5 grid gap-3">
              <MenuHeading className="text-[#333333] text-xl font-extrabold">Platfrom Features</MenuHeading>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>User management</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Cilent-Trained Model for Cadence Creation</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Security and Compliance</Link>
              </MenuItem>
              <MenuItem>
                <Link href="" className='pl-[30px] text-[#333333] text-base font-normal hover:text-[#0066cc]'>Scalability and Performance</Link>
              </MenuItem>
            </MenuSection>
          </MenuSection>
        </MenuItems>
      </Menu>
      <Menu>
        <MenuButton className="flex items-center gap-1 group text-base font-semibold text-[#333333] border-b-2 border-transparent hover:text-[#0066cc] hover:border-b-[#0066cc] data-[active]:text-[#0066cc] data-[active]:border-b-[#0066cc] transition-colors duration-200 ease-in-out ">
          Resources
          <FaChevronDown className='transition-transform duration-200 ease-in group-data-[active]:-rotate-180' size={14} />
        </MenuButton>
        <MenuItems anchor='bottom start' transition className="bg-white border w-44 divide-y [--anchor-gap:26px] origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0">
          <MenuItem>
            <Link href="#blog" className="block py-3 px-4 text-sm text-[#333333] data-[focus]:text-white data-[focus]:bg-[#605be5] transition-colors duration-200 ease-in-out">Blog</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#faqs" className="block py-3 px-4 text-sm text-[#333333] data-[focus]:text-white data-[focus]:bg-[#605be5] transition-colors duration-200 ease-in-out">FAQs</Link>
          </MenuItem>
          <MenuItem>
            <Link href="#doc" className="block py-3 px-4 text-sm text-[#333333] data-[focus]:text-white data-[focus]:bg-[#605be5] transition-colors duration-200 ease-in-out">Doc</Link>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Link
        href=""
        className="text-base font-semibold text-[#333333] border-b-2 border-transparent hover:text-[#0066cc] hover:border-b-[#0066cc] transition-colors duration-200 ease-in-out"
      >
        Pricing
      </Link>
      <Link
        href=""
        className="text-base font-semibold text-[#333333] border-b-2 border-transparent hover:text-[#0066cc] hover:border-b-[#0066cc] transition-colors duration-200 ease-in-out"
      >
        Contact Us
      </Link>
    </nav>
  )
}