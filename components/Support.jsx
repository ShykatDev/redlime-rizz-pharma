import Image from "next/image"

const Support = () => {
  return (
    <div className="w-full bg-[#31418C4D] py-14 px-40 my-[160px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="flex items-center justify-center gap-8">
            <Image src="/assets/payment.svg" width={37} height={37} alt="payment" />
            <h2 className="text-[22px] text-light">Secure Payment</h2>
        </div>

        <div className="flex items-center justify-center gap-8">
            <Image src="/assets/customer-support.svg" width={37} height={37} alt="support" />
            <h2 className="text-[22px] text-light">Online Support</h2>
        </div>

        <div className="flex items-center justify-center gap-8">
            <Image src="/assets/truck-delivery.svg" width={37} height={37} alt="delivery" />
            <h2 className="text-[22px] text-light">Free Shipping</h2>
        </div>

        <div className="flex items-center justify-center gap-8">
            <Image src="/assets/discount.svg" width={37} height={37} alt="discount" />
            <h2 className="text-[22px] text-light">Best Value</h2>
        </div>
    </div>
  )
}

export default Support