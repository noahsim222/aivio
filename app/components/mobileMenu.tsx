import Link from "next/link";
import { Menu, MenuButton, MenuItems, MenuItem, MenuSection, MenuHeading } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export default function MobileMenu() {
  return (
    <div className="flex flex-grow justify-end lg:hidden">
      <Menu>
        <MenuButton className="data-[hover]:text-[#605be5] data-[open]:text-[#605be5] transition-colors duration-500 ease-in-out">
          <HiBars3 {...({ className: 'w-11 h-auto' } as any)} />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-full p-5 origin-top bg-white divide-y transition duration-200 ease-in-out  focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <Link href="" className='block p-2.5 text-base font-semibold text-[#333333] hover:bg-[#605be5] hover:text-white transition-colors duration-200 ease-in-out'>Why AIVIO?</Link>
          </MenuItem>
          <MenuSection>

            <Disclosure as='div' defaultOpen={false} >
              <DisclosureButton className="p-2.5 w-full group flex justify-between items-center text-base font-semibold text-[#333333] hover:bg-[#605be5] hover:text-white transition-colors duration-200 ease-in-out">
                <span>Solutions</span>
                <FaCaretDown  className='transition-transform duration-[250] ease-in group-data-[open]:-rotate-180' size={14}/>
              </DisclosureButton>
              <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 grid sm:grid-cols-2 gap-x-5 px-5 pb-5">
                <MenuSection className="">
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
                <MenuSection className=''>
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
              </DisclosurePanel>
            </Disclosure>
          </MenuSection>
          <MenuSection>
            <Disclosure as='div' defaultOpen={false}>
              <DisclosureButton className="p-2.5 w-full group flex justify-between items-center text-base font-semibold text-[#333333] hover:bg-[#605be5] hover:text-white transition-colors duration-200 ease-in-out">
                <span>Resources</span>
                <FaCaretDown  className='transition-transform duration-[250] ease-in group-data-[open]:-rotate-180' size={14}/>
              </DisclosureButton>
              <DisclosurePanel transition className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 pb-5">
                <MenuSection>
                  <MenuItem>
                    <Link href="#blog" className='block pl-[30px] py-2.5 data-[focus]:text-white data-[focus]:bg-[#605be5] transition-colors duration-200 ease-in-out text-[#333333] text-base font-normal hover:text-[#0066cc]'>Blog</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="#faqs" className='block pl-[30px] py-2.5 data-[focus]:text-white data-[focus]:bg-[#605be5] transition-colors duration-200 ease-in-out text-[#333333] text-base font-normal hover:text-[#0066cc]'>FAQs</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="doc" className='block pl-[30px] py-2.5 data-[focus]:text-white data-[focus]:bg-[#605be5] transition-colors duration-200 ease-in-out text-[#333333] text-base font-normal hover:text-[#0066cc]'>Doc</Link>
                  </MenuItem>
                </MenuSection>
              </DisclosurePanel>
            </Disclosure>
          </MenuSection>
          <MenuItem>
            <Link href="" className='block p-2.5 text-base font-semibold text-[#333333] hover:bg-[#605be5] hover:text-white transition-colors duration-200 ease-in-out'>Pricing</Link>
          </MenuItem>
          <MenuItem>
            <Link href="" className='block p-2.5 text-base font-semibold text-[#333333] hover:bg-[#605be5] hover:text-white transition-colors duration-200 ease-in-out'>Contact Us</Link>
          </MenuItem>
        </MenuItems>
      </Menu>

    </div>
  )
}

