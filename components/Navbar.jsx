'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { navbarItems } from "../constants/options"

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-start py-[30px]">
      <Image src="/assets/logo.svg" alt="rizz-logo" width={110} height={140} />

      <div className="h-full flex flex-col justify-between">
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
              <Image src="/assets/cart.svg" alt="rizz-logo" width={36} height={36} />
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar