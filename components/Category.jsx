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
        <div className="mt-[72px] px-10 md:px-20 lg:px-40">
            <h2 className="font-impact text-center text-light text-3xl lg:text-[48px]">Shop by <span className="text-golden">Category</span></h2>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-[30px]">
                <div className="flex flex-col justify-start gap-[30px]">
                    <div className="w-full h-[550px] relative rounded-3xl overflow-hidden">
                        <Image src="/assets/c1.svg" fill alt="c1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden">
                        <Image src="/assets/c4.svg" fill alt="c1" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden">
                        <Image src="/assets/c2.svg" fill alt="c1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-[550px] relative rounded-3xl overflow-hidden">
                        <Image src="/assets/c5.svg" fill alt="c1" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="w-full h-[550px] relative rounded-3xl overflow-hidden">
                        <Image src="/assets/c3.svg" fill alt="c1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-[400px] relative rounded-3xl overflow-hidden">
                        <Image src="/assets/c6.svg" fill alt="c1" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category