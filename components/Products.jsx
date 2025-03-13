'use client'

import APIKit from "@/helpers/APIKit"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useEffect, useState } from "react"
import ProductCard from "./common/ProductCard"

const Products = () => {
  const [skip, setSkip] = useState(0)

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => APIKit.prodcuts.getProducts(skip),
  })

  const nextProducts = () => {
    if (skip < data?.total) {
      setSkip(prev => prev + 8)
      refetch()
    }
  }

  const prevProducts = () => {
    if (skip > 0) {
      setSkip(prev => prev - 8)
      refetch()
    }
  }

  useEffect(() => {
    refetch()
  }, [skip, refetch]) // Refetch whenever skip changes

  if (isLoading) {
    return "Loading..."
  }



  return (
    <div className='px-40'>
      <h2 className="font-impact text-center text-light text-[48px]">Solutions for Your <span className="text-golden">Unique</span> Health Goals</h2>

      {/* Filter Buttons */}
      <div className="mt-[45px] mb-[66px] flex justify-between items-center">
        <button className="px-8 py-5 bg-golden rounded-full text-xl">All</button>
        <button className="px-8 py-5 border border-light text-light rounded-full text-xl">Best Selling Products</button>
        <button className="px-8 py-5 border border-light text-light rounded-full text-xl">Weight Loss</button>
        <button className="px-8 py-5 border border-light text-light rounded-full text-xl">Beauty And Hair Loss</button>
        <button className="px-8 py-5 border border-light text-light rounded-full text-xl">Testosterone/HRT</button>
        <button className="px-8 py-5 border border-light text-light rounded-full text-xl">Sexual Health</button>
        <button className="px-8 py-6 border border-light text-light rounded-full text-xl">
          <Image src={"/assets/right_arrow.svg"} width={26} height={26} alt="arrow-right" />
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-4 gap-[30px]">
        {
          data?.products?.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))
        }
      </div>

      <div className="mt-[50px] flex justify-center items-center gap-8">
        <button className="size-[60px] flex justify-center items-center rounded-full bg-golden cursor-pointer hover:bg-[#C1842D] duration-300 disabled:opacity-50 disabled:cursor-not-allowed" onClick={prevProducts} disabled={skip <= 0}>
          <Image src={`/assets/arrow.svg`} width={24} height={24} alt="arrow-left" className="rotate-180" />
        </button>
        <button className="size-[60px] flex justify-center items-center rounded-full bg-golden cursor-pointer hover:bg-[#C1842D] duration-300" onClick={nextProducts}>
          <Image src={`/assets/arrow.svg`} width={24} height={24} alt="arrow-r8" />
        </button>
      </div>
    </div>
  )
}

export default Products