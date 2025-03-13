import Image from "next/image"

const Products = () => {
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
          [...Array(8)].map((_, i) => (
            <div key={i} className="bg-[#31418C4D] rounded-xl overflow-hidden relative">
              <div className="absolute top-0 right-0">
                {/* <p className="w-fit px-4 py-1.5 bg-linear-to-l from-[#A75356] to-[#D78C6C] rounded-bl-xl rounded-tr-xl text-light">Research use only</p> */}

                <p className="w-fit px-4 py-1.5 bg-linear-to-l from-[#6c221d71] to-[#9541396c] border-l border-b border-[#A75356] bg rounded-bl-xl rounded-tr-xl text-light">Recurring Plan</p>

              </div>
              <div className="pt-6 px-4 flex justify-between items-center gap-6">
                <Image src={`/assets/product.svg`} width={250} height={120} alt={`product-${i + 1}`} />
                <p className="text-transparent bg-clip-text text-lg font-bold leading-[120%] bg-linear-to-b from-[#C1842D] to-[#ECC974] inline-block">Lyopholized
                  Glow (GHK-CU/ BPC-157/TB-500)</p>
              </div>

              <div className="bg-[#1F1F1F4D] pl-6 flex justify-between items-center">
                <p className="text-light text-xs">Starting at $99.00</p>
                <button className="px-8 py-5 bg-linear-to-b from-[#C1842D] to-[#ECC974]">
                  <Image src={`/assets/add_cart.svg`} width={24} height={24} alt="cart-add" />
                </button>
              </div>

            </div>
          ))
        }
      </div>

      <div className="mt-[50px] flex justify-center items-center gap-8">
      <button className="size-[60px] flex justify-center items-center rounded-full bg-golden">
          <Image src={`/assets/arrow.svg`} width={24} height={24} alt="arrow-left" className="rotate-180"/>
        </button>
        <button className="size-[60px] flex justify-center items-center rounded-full bg-golden">
          <Image src={`/assets/arrow.svg`} width={24} height={24} alt="arrow-r8" />
        </button>
      </div>
    </div>
  )
}

export default Products