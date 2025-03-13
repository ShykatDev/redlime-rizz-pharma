import Image from "next/image"

const Hero = () => {
    return (
        <div className="mt-12">
            <h2 className="text-[80px] font-impact font-bold text-white capitalize leading-[120%] tracking-wide">
                Prescription<br />
                treatments for<br />
                your<br />
                <span className="text-golden">
                    health goals
                </span>
            </h2>

            <div className="mt-14 w-fit  bg-linear-to-r from-[#DB5095] to-[#1945E8] rounded-full p-0.5">
                <button className="text-2xl px-8 py-4 font-bold text-light bg-dark rounded-full">Find My Treatment</button>
            </div>

            <div className="mt-36">
                <div className="mx-auto w-[612px] h-[75px] px-[40px] py-6 bg-[#43434329] backdrop-blur-3xl rounded-full border border-light flex items-center gap-4">
                    <Image src="/assets/search.svg" alt="search" width={24} height={24} />

                    <input type="text" placeholder="Search by product/treatment" className="text-xl text-light placeholder:text-light w-full h-full outline-none border-0 tracking-widest"/>
                </div>
            </div>
        </div>
    )
}

export default Hero