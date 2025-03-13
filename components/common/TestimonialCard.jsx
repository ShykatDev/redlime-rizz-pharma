import Image from "next/image"

const TestimonialCard = () => {
    return (
        <div className="p-8 rounded-xl w-[414px] h-[440px] bg-[url('/assets/noise.svg')] bg-cover bg-center bg-no-repeat backdrop-blur-2xl">
            <Image src="/assets/inverted-comma.svg" width={24} height={24} alt="quote" />

            <p className="mt-[30px] mb-9 text-light text-lg leading-[160%]">I’ve tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.</p>

            <div className="flex justify-center items-center gap-3">
                {
                    [...Array(4)].map((_, i) => (
                        <Image key={i} src="/assets/star.svg" width={24} height={24} alt="star" />
                    ))
                }
                <Image src="/assets/star-stoke.svg" width={24} height={24} alt="star-stoke" />
            </div>

            <div className="mt-13 flex items-center gap-5 justify-center">
                <Image src="/assets/testimonial-avatar.svg" width={60} height={60} alt="avatar" />
                <div>
                    <h2 className="text-light text-xl font-bold">John Williams</h2>
                    <p className="text-white/50 text-base font-bold">Lead designer</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard