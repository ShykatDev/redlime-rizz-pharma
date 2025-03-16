import Image from "next/image"

const Support = () => {
  return (
    <div className="w-full bg-[#31418C4D] py-14 px-10 md:px-20 lg:px-40 xl:px-60 my-[160px] grid grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image src="/assets/payment.svg" width={37} height={37} alt="payment" />
            <h2 className="text-[22px] text-light text-center">Secure Payment</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image src="/assets/customer-support.svg" width={37} height={37} alt="support" />
            <h2 className="text-[22px] text-light text-center">Online Support</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image src="/assets/truck-delivery.svg" width={37} height={37} alt="delivery" />
            <h2 className="text-[22px] text-light text-center">Free Shipping</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Image src="/assets/discount.svg" width={37} height={37} alt="discount" />
            <h2 className="text-[22px] text-light text-center">Best Value</h2>
        </div>
    </div>
  )
}

export default Support