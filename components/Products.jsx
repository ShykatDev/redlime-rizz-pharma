'use client'

import APIKit from "@/helpers/APIKit"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import ProductCard from "./common/ProductCard"

const Products = () => {
  const [skip, setSkip] = useState(0)
  const [category, setCategory] = useState("")
  const scrollRef = useRef(null)
  const router = useRouter()
  const pathName = usePathname()

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["products", category],
    queryFn: () => APIKit.prodcuts.getProducts(category, skip),
    placeholderData: (previousData) => previousData
  })

  const { data: categories, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: APIKit.category.getCategories
  })

  // console.log(data.slice(0, 6));

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

  const handleScrollToRight = () => {
    // const container = document.getElementById("category-scroll");
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleFilter = (e) => {
    const target = e.target.textContent.toLowerCase();

    setCategory(target)
    setSkip(0)
    router.push(`${pathName}?category=${target}`, { scroll: false })

    refetch()
  }

  useEffect(() => {
    refetch()
  }, [skip, refetch]) // Refetch whenever skip changes

  useEffect(()=> {
    setSkip(0)
    refetch()
  }, [category])

  if (isLoading || isCategoryLoading) {
    return "Loading..."
  }



  return (
    <div className='px-10 md:px-20 lg:px-40'>
      <h2 className="font-impact text-center text-light text-3xl lg:text-[48px]">Solutions for Your <span className="text-golden">Unique</span> Health Goals</h2>

      {/* Filter Buttons */}
      <div className="mt-[45px] mb-[66px] flex justify-between items-center gap-6">

        <div ref={scrollRef} className="flex gap-3 items-center w-full overflow-auto hide-scrollbar">
          <button className={`px-5 py-3 lg:px-8 text-nowrap capitalize lg:py-5 border border-light rounded-full text-xl cursor-pointer hover:bg-golden hover:text-black ${category === "" ? "bg-golden text-black" : "text-light"}`} onClick={() => {
            setCategory("")
            router.push(pathName, { scroll: false })
          }}>All</button>

          {categories?.map((item, i) => (
            <button key={i} className={`px-5 py-3 lg:px-8 text-nowrap capitalize lg:py-5 border border-light rounded-full text-xl cursor-pointer hover:bg-golden hover:text-black ${category === item ? "bg-golden text-black" : "text-light"}`} onClick={handleFilter}>{item}</button>
          ))}
        </div>

        <button className="px-5 py-4 md:px-8 md:py-6 border border-light text-light rounded-full text-xl shrink-0 cursor-pointer hover:bg-golden/30 duration-300" onClick={handleScrollToRight}>
          <Image src={"/assets/right_arrow.svg"} width={26} height={26} alt="arrow-right" />
        </button>
      </div>


      {/* Products */}
      {
        data?.products?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.products?.map((product, i) => (
              <ProductCard key={i} product={product} index={i}/>
            ))}
          </div>
        ) : (
          <h2 className="text-center text-light text-[24px]">No products found</h2>
        )
      }

      <div className="mt-[50px] flex justify-center items-center gap-4 lg:gap-8">
        <button className="size-[50px] lg:size-[60px] flex justify-center items-center rounded-full bg-golden cursor-pointer hover:bg-[#C1842D] duration-300 disabled:opacity-50 disabled:cursor-not-allowed" onClick={prevProducts}>
          <Image src={`/assets/arrow.svg`} width={24} height={24} alt="arrow-left" className="rotate-180" />
        </button>
        <button className="size-[50px] lg:size-[60px] flex justify-center items-center rounded-full bg-golden cursor-pointer hover:bg-[#C1842D] duration-300 disabled:opacity-50" onClick={nextProducts}>
          <Image src={`/assets/arrow.svg`} width={24} height={24} alt="arrow-r8" />
        </button>
      </div>
    </div>
  )
}

export default Products