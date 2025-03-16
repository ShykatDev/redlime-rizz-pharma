import Image from "next/image"

const Ad = () => {
    return (
        <div className='my-[160px] min-h-[500px] lg:h-[812px] relative block bg-red-300'>
            <Image alt="ad" src="/assets/ad.svg" fill className="z-0 object-cover" />

            <div className="absolute w-full top-10 lg:top-24 z-10 grid md:grid-cols-2 gap-10 px-10 md:px-20 lg:px-40 xl:px-60">
                <div>
                    <h2 className="text-light font-impact text-4xl lg:text-[58px] leading-none">100% Online,<br/>100% Convenient</h2>
                </div>
                <ul className="space-y-5">
                    <li className="flex items-center gap-[30px]">
                        <Image src="/assets/pointer.svg" width={24} height={24} alt="pointer" className="size-3 md:size-6"/>
                        <p className="lg:text-lg text-light font-bold">Chat with a provider 24/7</p>
                    </li>
                    <li className="flex items-center gap-[30px]">
                        <Image src="/assets/pointer.svg" width={24} height={24} alt="pointer" className="size-3 md:size-6"/>
                        <p className="lg:text-lg text-light font-bold">Fast, discreet shipping</p>
                    </li>
                    <li className="flex items-center gap-[30px]">
                        <Image src="/assets/pointer.svg" width={24} height={24} alt="pointer" className="size-3 md:size-6"/>
                        <p className="lg:text-lg text-light font-bold">Clinically proven ingredients and FDA-approved treatments.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Ad