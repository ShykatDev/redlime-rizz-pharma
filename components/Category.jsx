'use client'

import APIKit from "@/helpers/APIKit";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const Category = () => {
    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: APIKit.category.getCategories
    })

    //   console.log(data.slice(0, 6));


    return (
        <div className="mt-[72px] px-10 md:px-20 lg:px-40 xl:px-60">
            <h2 className="font-impact text-center text-light text-3xl lg:text-[48px]">Shop by <span className="text-golden">Category</span></h2>

            <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                <div className="flex flex-col items-end gap-[30px]">
                    <div className="w-full h-[450px] relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F27070] to-[#97B5FB]">
                        <Image src="/assets/category/c1_vector.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-0" />
                        <Image src="/assets/category/c1.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-10" />
                        <p className="absolute top-6 left-6 text-white text-[36px] z-20">Weight<br />Loss</p>
                    </div>
                    <div className="w-full h-[376px] relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#AD70F2] to-[#9D37A2]">
                        <Image src="/assets/category/c4_vector.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-0" />
                        <Image src="/assets/category/c4.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-10" />
                        <p className="absolute top-6 left-6 text-white text-[36px] z-20">Testosterone
                            <br />HRT</p>
                    </div>
                    <div className="w-full h-[450px] relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#97B5FB] to-[#F27070]">
                        <Image src="/assets/category/c3_vector.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-0" />
                        <Image src="/assets/category/c3.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-10" />
                        <p className="absolute top-6 left-6 text-white text-[36px] z-20">Brain<br />Health</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px] items-center">
                    <div className="w-full h-[376px] relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F29B70] to-[#FBD197]">
                        <Image src="/assets/category/c2_vector.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-0" />
                        <Image src="/assets/category/c2.svg" width={300} height={300} alt="c1-vector" className="absolute top-0 right-0 z-10" />
                        <p className="absolute top-6 left-6 text-white text-[36px] z-20">Sexual
                            <br />Health</p>
                    </div>
                    <div className="w-full h-[450px] relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F27070] to-[#97B5FB]">
                        <Image src="/assets/category/c5_vector.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-0" />
                        <Image src="/assets/category/c5.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-10" />
                        <p className="absolute top-6 left-6 text-white text-[36px] z-20">Athletic<br />Performance</p>
                    </div>
                    <div className="w-full h-[376px] relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#70CBF2] to-[#97B0FB]">
                        <Image src="/assets/category/c6_vector.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-0" />
                        <Image src="/assets/category/c6.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-10" />
                        <p className="absolute top-6 left-6 text-white text-[36px] z-20">Beauty and
                            <br />Hair Loss</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[30px]">
                    <div className="w-full h-[450px] relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#97B5FB] to-[#F27070] xl:block hidden">
                        <Image src="/assets/category/c3_vector.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-0" />
                        <Image src="/assets/category/c3.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-10" />
                        <p className="absolute top-6 left-6 text-white text-[36px] z-20">Brain<br />Health</p>
                    </div>
                    <div className="w-full h-[376px] relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#70CBF2] to-[#97B0FB] xl:block hidden">
                        <Image src="/assets/category/c6_vector.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-0" />
                        <Image src="/assets/category/c6.svg" width={300} height={300} alt="c1-vector" className="absolute bottom-0 right-0 z-10" />
                        <p className="absolute top-6 left-6 text-white text-[36px] z-20">Beauty and
                            <br />Hair Loss</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category