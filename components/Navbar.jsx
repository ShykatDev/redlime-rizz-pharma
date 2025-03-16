'use client'

import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { navbarItems } from "../constants/options"

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex justify-between items-start py-[30px] lg:px-40 xl:px-60">
        <Image src="/assets/logo.svg" alt="rizz-logo" width={110} height={140} className="hidden lg:block" />


        {/* Desktop Navbar */}
        <div className="h-full lg:flex flex-col justify-between hidden">
          <div className="flex gap-14">
            {navbarItems.map((item, index) => (
              <div key={index} className={`flex items-center pb-1 gap-2 ${pathName === item.href ? 'border-b-2 border-light' : ''}`}>
                <Link href={item.href} className="text-base text-light">{item.title}</Link>
                {item.icon && (
                  <Image src="/assets/down_arrow.svg" alt="arrow-down" width={24} height={24} />
                )}
              </div>
            ))}
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image src="/assets/fb.svg" alt="rizz-logo" width={24} height={24} />
              </Link>
              <Link href="/">
                <Image src="/assets/insta.svg" alt="rizz-logo" width={24} height={24} />
              </Link>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-[30px] items-center">
            <button className="bg-golden border border-dark-golden px-4 py-1.5 rounded-full">Sign Up</button>
            <button className="bg-transparent text-light border border-text px-4 py-1.5 rounded-full">Log In</button>
            <Link href="/">
              <Image src="/assets/cart.svg" alt="cart-logo" width={36} height={36} />
            </Link>
          </div>
        </div>


      </div>

      {/* Mobile Navbar */}
      <div className="relative lg:hidden">

        <div className="w-full px-10 py-3 flex justify-between bg-[#31428c27] backdrop-blur-2xl fixed top-0 z-50 lg:hidden">
          <Image src="/assets/logo.svg" alt="rizz-logo" width={50} height={50} className="lg:hidden" />

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? <X size={32} color="white" /> : <Menu size={32} color="white" />}
          </button>


        </div>
        <div className="w-full fixed flex flex-col justify-between items-end bg-[#31428c27] h-[calc(100vh-86.6px)] backdrop-blur-2xl translate-x-full transform transition-all duration-500 ease-in-out top-[86.6px] p-10 z-40 space-y-2" style={{ transform: !isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
          <div className="space-y-2 ">
            {navbarItems.map((item, index) => {
              return (
                <div key={index} className={`flex items-center justify-end pb-1 gap-3`}>
                  <Link href={item.href} className="text-base text-light">{item.title}</Link>
                  {item.icon && (
                    <Image src="/assets/down_arrow.svg" alt="arrow-down" width={16} height={16} />
                  )}
                </div>
              )
            })}

            <div className="border-t mt-6 pt-6 justify-end items-center border-white/20 flex gap-4">
              <button className="bg-golden border border-dark-golden px-4 py-1.5 rounded-full">Sign Up</button>
              <button className="bg-transparent text-light border border-text px-4 py-1.5 rounded-full">Log In</button>
              <Link href="/">
                <Image src="/assets/cart.svg" alt="cart-logo" width={30} height={30} />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/">
              <Image src="/assets/fb.svg" alt="rizz-logo" width={24} height={24} />
            </Link>
            <Link href="/">
              <Image src="/assets/insta.svg" alt="rizz-logo" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar